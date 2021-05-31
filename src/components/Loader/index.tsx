import React from 'react';

import s from './style.module.scss';

import { ReactComponent as PokeballSpinner } from './assets/PokeballSpinner.svg';

const Loader = () => {
  return (
    <div className={s.root}>
      <PokeballSpinner className={s.pokemonSpinner} />
    </div>
  );
};

export default Loader;