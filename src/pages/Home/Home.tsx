import { FC, useState } from 'react';

import Page from '../../layouts/Page';

import DataTableExport from '../../components/ui/DataTableExport';
import TabView from '../../components/ui/TabView';

const Home: FC = () => {
  return (
    <Page>
      <TabView />
      <DataTableExport />
    </Page>
  );
};

export default Home;
