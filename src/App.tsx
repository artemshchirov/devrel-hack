import React, { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/ui/Spinner';
import JsonApi from './utils/jsonApi';

import { configJsonApi } from './utils/configApi';

const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));

const App: FC = () => {
  const jsonApi = new JsonApi(configJsonApi);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home jsonApi={jsonApi} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
