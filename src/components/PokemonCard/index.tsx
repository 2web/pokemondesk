import React from 'react';
import { IPokemon } from '../../pokemon';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCard {
  name: string;
  attack: number;
  defense: number;
  types: Array<string>;
  img: string;
}

const PokemonCard: React.FC<IPokemonCard> = ({ name, attack, defense, types, img }) => {
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading tag="h2">
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
                        <span className={s.label}>{type}</span>
                    ))}
                </div>
            </div>
            <div className={s.pictureWrap}>
                <img src={img} alt={name} />
            </div>
        </div>
    );
};

export default PokemonCard;