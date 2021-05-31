import React, { FC, useState, useEffect } from 'react';
import { usePath } from 'hookrouter';

import s from './Pokemon.module.scss';

import { PokemonRequest } from '../../interface/pokemons';
import Heading from '../../components/Heading/index';
import Loader from '../../components/Loader/index';

export interface IProps {
  id: string | number;
}

const pokemonsData = {
  name_clean: 'bulbasaur',
  abilities: ['overgrow', 'chlorophyll'],
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    'special-attack': 65,
    'special-defense': 65,
    speed: 45,
  },
  types: ['grass', 'poison'],
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  name: 'bulbasaur',
  base_experience: 64,
  height: 7,
  id: 1,
  is_default: true,
  order: 1,
  weight: 69,
};

const Pokemon: FC<IProps> = ({ id }) => {
  const path = usePath();

  // eslint-disable-next-line no-console
  console.log(path);

  const [pokemon, setPokemon] = useState<PokemonRequest | null>(null);

  useEffect(() => {
    setPokemon(pokemonsData);
  }, [id]);
  return (
    <div className={s.root}>
      {pokemon ? (
        <div className={s.pokemonCard}>
          <div className={s.pokemonImage}>
            <img className={s.pokemonPic} src={pokemon.img} alt="pokemon" />
            <div className={s.pokemonAbilities}>
              <div className={s.labelWrap}>
                {pokemon.types.map((type) => (
                  <span key={type} className={s.label}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={s.pokemonStats}>
            <div className={s.pokemonInfo}>
              <Heading className={s.pokemonName} level="h3">
                {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
              </Heading>
              <div className={s.pokemonGenAndCircle}>
                <Heading className={s.pokemonGeneration} level="h4">
                  Generation 1
                </Heading>
                <div className={s.pokemonCircle}>
                  <Heading level="h6" className={s.pokemonState}>
                    578
                  </Heading>
                </div>
              </div>
            </div>
            <div className={s.pokemonAbilitiesText}>
              <Heading level="h6" className={s.pokemonState}>
                Abilities
              </Heading>
              <Heading level="h6" className={s.pokemonStateText}>
                Overgrow - Chlorophyll
              </Heading>
            </div>
            <div className={s.pokemonHealthAndExp}>
              <div className={s.pokemonHealth}>
                <Heading level="h6" className={s.pokemonState}>
                  Healthy Points
                </Heading>

                <Heading level="h6" className={s.pokemonNums}>
                  1 000 000
                </Heading>
                <div className={s.pokemonProgressBar}>
                  <div
                    className={s.pokemonProgressBarReady}
                    style={{
                      width: '80%',
                      background: 'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)',
                    }}
                  />
                </div>
              </div>
              <div className={s.pokemonExp}>
                <Heading level="h6" className={s.pokemonState}>
                  Experience
                </Heading>

                <Heading level="h6" className={s.pokemonNums}>
                  1 000 000
                </Heading>
                <div className={s.pokemonProgressBar}>
                  <div
                    className={s.pokemonProgressBarReady}
                    style={{
                      width: '96%',
                      background: 'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={s.pokemonDefAndAttack}>
              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>49</span>
                </dd>
                <dt>Defence</dt>
              </dl>

              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>165</span>
                </dd>
                <dt>Attack</dt>
              </dl>

              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>130</span>
                </dd>
                <dt>Sp Attack</dt>
              </dl>

              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>271</span>
                </dd>
                <dt>Sp Defence</dt>
              </dl>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Pokemon;