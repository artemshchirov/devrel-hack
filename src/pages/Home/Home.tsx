// TODO: .tsx
import { FC, useState, useEffect } from 'react';

import Page from '../../layouts/Page';

import { Charts, DataTableExport, TabViewTech } from './components';

import JsonApi from '../../utils/jsonApi';
import { configJsonApi } from '../../utils/configApi';

import { contributors } from '../../data/contributors';
import { repository_stack } from '../../data/repository_stack';

const initialCols = [
  { field: 'type', header: 'Type', id: 0 },
  { field: 'login', header: 'Login', id: 1 },
  { field: 'stack', header: 'Stack', id: 2 },
  { field: 'contributions', header: 'Contributions', id: 3 },
  { field: 'html_url', header: 'Account', id: 7 },
  { field: 'followers', header: 'Followers', id: 5 },
  { field: 'following', header: 'Following', id: 6 },
  { field: 'events', header: 'Events', id: 4 },
  { field: 'issue', header: 'Issue', id: 8 },
  { field: 'issue_comments', header: 'Comments', id: 9 },
  { field: 'issue_closed', header: 'Closed', id: 10 },
  { field: 'repos_url', header: 'Repositories', id: 11 },
];

const topRepositoriyStack = Object.fromEntries(
  Object.entries(repository_stack).sort(([, a], [, b]) => b - a),
);

const Home: FC = () => {
  const [cols, setCols] = useState(initialCols);
  const [pieChartData, setPieChartData] = useState(topRepositoriyStack);

  // const jsonApi = new JsonApi(configJsonApi);

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
    setPieChartData(userStack);
  };

  // TODO: change any
  const handleCheckboxClick = (fields: any) => {
    const res = initialCols.filter((obj) => fields.includes(obj.field));
    setCols(res);
  };

  const polarChartData = contributors.map((user) => {
    const contributor = {
      labelsName: user.login,
      dataset: user.contributions,
    };
    return contributor;
  });

  return (
    <Page>
      <TabViewTech
        cols={cols}
        handleCheckboxClick={handleCheckboxClick}
        defaultCheckboxes={initialCols}
      />
      <DataTableExport cols={cols} handleLineClick={handleLineClick} />
      <Charts pieChartData={pieChartData} polarChartData={polarChartData} />
    </Page>
  );
};

export default Home;
