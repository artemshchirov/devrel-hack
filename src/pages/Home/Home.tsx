// TODO: .tsx
import { FC, useState, useEffect } from 'react';

import Page from '../../layouts/Page';

import DataTableExport from './DataTableExport';
import TabViewTech from './TabViewTech';
import PieChartDemo from './PieChart';
import DoughnutChart from './DoughnutChart';
import { repository_stack } from '../../data/repository_stack';
import JsonApi from '../../utils/jsonApi';

interface HomeProps {
  jsonApi: JsonApi;
}

const Home: FC<HomeProps> = ({ jsonApi }) => {
  const sortable = Object.fromEntries(
    Object.entries(repository_stack).sort(([, a], [, b]) => b - a),
  );

  const [pieChartData, setPieChartData] = useState(sortable);

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
      <div className="flex items-center py-5 mt-3 overflow-hidden bg-white rounded-lg card justify-evenly">
        <PieChartDemo data={pieChartData} />
        <DoughnutChart jsonApi={jsonApi} />
      </div>
    </Page>
  );
};

export default Home;
