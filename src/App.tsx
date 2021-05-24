import React from 'react';
import { useRoutes } from 'hookrouter';

import routes from './routes';
import NotFoundPage from './pages/NotFound';
import Header from './components/Header';
// import s from './App.module.scss';


const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
