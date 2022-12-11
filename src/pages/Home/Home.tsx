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

const cols = [
  { field: 'login', header: 'Login', id: 0 },
  { field: 'issue', header: 'Issue', id: 1 },
  { field: 'stack', header: 'Stack', id: 2 },
  { field: 'admin', header: ' Admin', id: 3 },
  { field: 'account_url', header: 'Account', id: 4 },
  { field: 'issue_closed', header: 'Issue Closed', id: 5 },
  { field: 'contributions', header: 'Contributions', id: 6 },
  { field: 'following', header: 'Following', id: 7 },
  { field: 'repos_url', header: 'Repositories', id: 8 },
  { field: 'issue_comments', header: 'Issue Comments', id: 9 },
  { field: 'events', header: 'Events', id: 10 },
  { field: 'follower', header: 'Followers', id: 11 },
];

const Home: FC = () => {
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
  function parseStack(userRepositories: any) {
    const stackCounter: any = {};
    userRepositories.forEach((repo: any) => {
      stackCounter[repo.language] = (stackCounter[repo.language] || 0) + 1;
    });
    return stackCounter;
  }

  // TODO: change any
  function handleLineClick(userRepositories: any) {
    const userStack = parseStack(userRepositories);
    setPieChartData(userStack);
  }

  return (
    <Page>
      <TabViewTech cols={cols} />
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
      <div className="flex items-center p-6 mt-3 overflow-hidden bg-white rounded-lg flex-nowrap card justify-evenly">
        <ComboChart />
      </div>
    </Page>
  );
};

export default Home;
