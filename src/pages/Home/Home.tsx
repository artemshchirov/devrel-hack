// TODO: .tsx
import { FC, useState, useEffect } from 'react';

import Page from '../../layouts/Page';

import DataTableExport from './DataTableExport';
import TabViewTech from './TabViewTech';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import { repository_stack } from '../../data/repository_stack';
import JsonApi from '../../utils/jsonApi';
import RadarChart from './RadarChart';
import { configJsonApi } from '../../utils/configApi';
import PolarAreaChart from './PolarAreaChart';
import { contributors } from '../../data/contributors';

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

  const cols = [
    { field: 'login', header: 'Login', id: 0 },
    { field: 'contributions', header: 'Contributions', id: 1 },
    { field: 'account_url', header: 'Account', id: 2 },
    { field: 'repos_url', header: 'Repositories', id: 3 },
    { field: 'stack', header: 'Stack', id: 4 },
  ];

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
      <div className="flex items-center flex-wrap py-5 mt-3 overflow-hidden bg-white rounded-lg card justify-evenly">
        <PieChart jsonApi={jsonApi} data={pieChartData} />
        <RadarChart jsonApi={jsonApi} />
      </div>
      <div className="flex items-center flex-wrap py-5 mt-3 overflow-hidden bg-white rounded-lg card justify-evenly">
        <PolarAreaChart jsonApi={jsonApi} data={topContributors} />
        <DoughnutChart jsonApi={jsonApi} />
      </div>

    </Page>
  );
};

export default Home;
