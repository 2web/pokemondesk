import React, { FC } from 'react';

import Heading from '../Heading/index';

import s from './PokemonCard.module.scss';

interface IProps {
  name: string;
  attack: number;
  defense: number;
  types: Array<string>;
  img: string;
}

const PokemonCard: FC<IProps> = ({ name, attack, defense, types, img }) => {
  return (
    <li className={s.root}>
      <div className={s.infoWrap}>
        <Heading level="h4" className={s.titleName}>
          {`${name[0].toUpperCase()}${name.slice(1)}`}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={type} className={s.label}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </li>
  );
};

export default PokemonCard;