import { FC, useState } from 'react';

import Page from '../../layouts/Page';

import DataTableExport from './DataTableExport';
import TabViewTech from './TabViewTech';
import PieChartDemo from './PieChart';
import DoughnutChart from './DoughnutChart';

const Home: FC = () => {
  const cols = [
    { field: 'login', header: 'Login', id: 0 },
    { field: 'contributions', header: 'Contributions', id: 1 },
    { field: 'account_url', header: 'Account', id: 2 },
    { field: 'repos_url', header: 'Repositories', id: 3 },

    { field: 'login1', header: 'Login1', id: 10 },
    { field: 'contributions1', header: 'Contributions1', id: 11 },
    { field: 'account_url1', header: 'Account1', id: 21 },
    { field: 'repos_url1', header: 'Repositories1', id: 31 },
  ];

  return (
    <Page>
      <TabViewTech cols={cols} />
      <DataTableExport cols={cols} />
      <div className="flex items-center py-5 mt-3 overflow-hidden bg-white rounded-lg card justify-evenly">
        <PieChartDemo />
        <DoughnutChart />
      </div>
    </Page>
  );
};

export default Home;
