import React, { FC, useState, useEffect } from 'react';

import s from './Pokemon.module.scss';

import Heading from '../../components/Heading/index';
import Loader from '../../components/Loader/index';
import useData from '../../hooks/useData';

export interface IProps {
  id: string | number;
}

const Pokemon: FC<IProps> = ({ id }) => {
  const { data, isLoading } = useData('getPokemon', { id });
  const [pokemon, setPokemon] = useState<any | null>(null);

  useEffect(() => {
    setPokemon(data);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={s.root}>
      {pokemon ? (
        <div className={s.pokemonCard}>
          <div className={s.pokemonImage}>
            <img className={s.pokemonPic} src={pokemon.img} alt="pokemon" />
            <div className={s.pokemonAbilities}>
              <div className={s.labelWrap}>
                {pokemon.types.map((type: string) => (
                  <span key={type} className={s.label}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={s.pokemonStats}>
            <div className={s.pokemonInfo}>
              <Heading className={s.pokemonName} size="m">
                {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
              </Heading>
              <div className={s.pokemonGenAndCircle}>
                <Heading className={s.pokemonGeneration} size="s">
                  Generation 1
                </Heading>
                <div className={s.pokemonCircle}>
                  <Heading size="xs" className={s.pokemonState}>
                    578
                  </Heading>
                </div>
              </div>
            </div>
            <div className={s.pokemonAbilitiesText}>
              <Heading size="xs" className={s.pokemonState}>
                Abilities
              </Heading>
              <Heading size="xs" className={s.pokemonStateText}>
                Overgrow - Chlorophyll
              </Heading>
            </div>
            <div className={s.pokemonHealthAndExp}>
              <div className={s.pokemonHealth}>
                <Heading size="xs" className={s.pokemonState}>
                  Healthy Points
                </Heading>

                <Heading size="xs" className={s.pokemonNums}>
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
                <Heading size="xs" className={s.pokemonState}>
                  Experience
                </Heading>

                <Heading size="xs" className={s.pokemonNums}>
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