import { PropsWithChildren } from "react";

/* eslint-disable camelcase */
export interface IAccMenu {
    [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

export interface IGeneralMenu {
    title: string;
    link: string;
    component: (props: PropsWithChildren<any>) => JSX.Element;
}

interface IStat {
    /** Здоровье */
    hp: number;
    /** Атака */
    attack: number;
    /** Защита */
    defense: number;
    /** Спец атака */
    'special-attack': number;
    /** Спец защита */
    'special-defense': number;
    /** Скорость */
    speed: number;
}

export interface IPokemon {
    /** Чистое имя */
    name_clean: string;
    /** Способности */
    abilities: string[];
    /** Стата */
    stats: IStat;
    /** Тип перечислить типы */
    types: string[];
    /** Картинка */
    img: string;
    /** Имя */
    name: string;
    /** Базовый опыт */
    base_experience: number;
    /** Рост */
    height: number;
    /** Идентификатор */
    id: number;
    /** Умолчательный? */
    is_default: boolean;
    /** Порядок */
    order: number;
    /** Вес */
    weight: number;
}

export interface IPokemonsData {
    total: number;
    pokemons: IPokemon[];
}