import React from 'react';
import { IPokemon } from '../../pokemon';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCard {
    pokemon: IPokemon;
}

const PokemonCard: React.FC<IPokemonCard> = ({ pokemon }) => {
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading tag="h2">
                    {pokemon.name_clean.charAt(0).toUpperCase() + pokemon.name_clean.slice(1)}
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{pokemon.stats.attack}</div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{pokemon.stats.defense}</div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                    {pokemon.types.map((type) => (
                        <span className={s.label}>{type}</span>
                    ))}
                </div>
            </div>
            <div className={s.pictureWrap}>
                <img src={pokemon.img} alt={pokemon.name} />
            </div>
        </div>
    );
};

export default PokemonCard;