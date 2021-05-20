import React from 'react';
import { useRoutes } from 'hookrouter';

import routes from './routes';
import NotFoundPage from './pages/NotFound';
// import s from './App.module.scss';

import HomePage from './pages/Home/index';

const App = () => {
  const match = useRoutes(routes);

  return match || <NotFoundPage />;
};

export default App;
