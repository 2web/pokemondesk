/* eslint-disable camelcase */
import React, { useState } from 'react';
import { A } from 'hookrouter';

import s from './Pokedex.module.scss';

import PokemonCard from '../../components/PokemonCard/index';
import Heading from '../../components/Heading/index';
import Loader from '../../components/Loader/index';

import useDebounce from '../../hooks/useDebounce';
import useData from '../../hooks/useData';
import { IPokemons, PokemonRequest } from '../../interface/pokemons';

interface IQuery {
  name?: string;
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500);

  const { isLoading, isError, data } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  if (isError) return <div>Something wrong...</div>;

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Heading level="h3">
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input
          className={s.pokemonInput}
          placeholder="Choose pokemon"
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <ul className={s.pokemonCards}>
          {isLoading ? (
            <Loader />
          ) : (
            data &&
            data.pokemons.map((pokemon: PokemonRequest) => {
              const { id, name_clean, stats, types, img } = pokemon;
              return (
                <A className={s.polemonLink} key={id} href={`/pokemon/${id}`}>
                  <PokemonCard
                    name={name_clean}
                    attack={stats.attack}
                    defense={stats.defense}
                    types={types}
                    img={img}
                  />
                </A>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;