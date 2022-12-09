import React, { FC, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Spinner from './components/ui/Spinner';

const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

const App: FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
