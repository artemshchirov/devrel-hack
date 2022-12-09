import { FC, useState } from 'react';

import Page from '../../layouts/Page';

import DataTableExport from '../../components/DataTableExport';

const Home: FC = () => {
  return (
    <Page>
      <DataTableExport />
    </Page>
  );
};

export default Home;
