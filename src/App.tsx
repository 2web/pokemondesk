import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';

const App = () => {
  console.log('###: Some log');

  return <div className={cn(s.header, 'color')}>!!!!This is App Component</div>;
};

export default App;
