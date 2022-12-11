// TODO: .tsx
import { FC, useState, useEffect } from 'react';

import Page from '../../layouts/Page';

import {
  ComboChart,
  DataTableExport,
  DoughnutChart,
  PieChart,
  PolarAreaChart,
  RadarChart,
  TabViewTech,
} from './components';

import JsonApi from '../../utils/jsonApi';
import { configJsonApi } from '../../utils/configApi';
import { contributors } from '../../data/contributors';
import { repository_stack } from '../../data/repository_stack';

const initialCols = [
  { field: 'type', header: 'Type', id: 2 },
  { field: 'login', header: 'Login', id: 0 },
  { field: 'stack', header: 'Stack', id: 1 },
  { field: 'contributions', header: 'Contributions', id: 9 },
  { field: 'html_url', header: 'Account', id: 4 },
  { field: 'issue', header: 'Issue', id: 3 },
  { field: 'issue_comments', header: 'Issue Comments', id: 11 },
  { field: 'issue_closed', header: 'Issue Closed', id: 7 },
  { field: 'events', header: 'Events', id: 5 },
  { field: 'following', header: 'Following', id: 6 },
  { field: 'repos_url', header: 'Repositories', id: 8 },
  { field: 'followers', header: 'Followers', id: 10 },
];

const Home: FC = () => {
  const [cols, setCols] = useState(initialCols);

  const jsonApi = new JsonApi(configJsonApi);

  const topRepositoriyStack = Object.fromEntries(
    Object.entries(repository_stack).sort(([, a], [, b]) => b - a),
  );

  const topContributors = contributors.map((user) => {
    const contributor = {
      labelsName: user.login,
      dataset: user.contributions,
    };
    return contributor;
  });

  const [pieChartData, setPieChartData] = useState(topRepositoriyStack);

  useEffect(() => {
    setPieChartData(repository_stack);
  }, []);

  // TODO: change any
  const parseStack = (userRepositories: any) => {
    const stackCounter: any = {};
    userRepositories.forEach((repo: any) => {
      stackCounter[repo.language] = (stackCounter[repo.language] || 0) + 1;
    });
    return stackCounter;
  };

  // TODO: change any
  const handleLineClick = (userRepositories: any) => {
    const userStack = parseStack(userRepositories);
    setPieChartData(userStack);
  };

  // TODO: change any
  const handleCheckboxClick = (fields: any) => {
    const res = initialCols.filter((obj) => {
      return fields.includes(obj.field);
    });
    console.log('r', res);
    setCols(res);
  };

  return (
    <Page>
      <TabViewTech
        cols={cols}
        handleCheckboxClick={handleCheckboxClick}
        defaultCheckboxes={initialCols}
      />
      <DataTableExport cols={cols} handleLineClick={handleLineClick} />
      <div className="flex items-center p-6 mt-3 overflow-hidden bg-white rounded-lg flex-nowrap card justify-evenly">
        <PieChart jsonApi={jsonApi} data={pieChartData} />
        <h2 className="mt-3 mb-auto text-xs w-max">
          Top 10 Stack | Top 10 Activists
        </h2>
        <RadarChart jsonApi={jsonApi} />
      </div>
      <div className="flex items-center p-6 mt-3 overflow-hidden bg-white rounded-lg flex-nowrap card justify-evenly">
        <PolarAreaChart jsonApi={jsonApi} data={topContributors} />
        <h2 className="mt-3 mb-auto text-xs w-max">Top Contributors</h2>
        <DoughnutChart jsonApi={jsonApi} />
      </div>
      {/* <div className="flex items-center p-6 mt-3 overflow-hidden bg-white rounded-lg flex-nowrap card justify-evenly">
        <ComboChart />
      </div> */}
    </Page>
  );
};

export default Home;
