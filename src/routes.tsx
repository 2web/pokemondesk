import React from 'react';
import EmptyPage from './pages/Empty';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';
import { IAccMenu, IGeneralMenu } from './Types';

// eslint-disable-next-line no-shadow
export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES = '/legendaries',
    DOCUMENTATION = '/documentation',
}

export const GENERAL_MENU: IGeneralMenu[] = [
    {
        title: 'Home',
        link: LinkEnum.HOME,
        component: () => <HomePage />,
    },
    {
        title: 'Pokédex',
        link: LinkEnum.POKEDEX,
        component: () => <PokedexPage />,
    },
    {
        title: 'Legendaries',
        link: LinkEnum.LEGENDARIES,
        component: () => <EmptyPage title="Legendaries" />,
    },
    {
        title: 'Documentation',
        link: LinkEnum.DOCUMENTATION,
        component: () => <EmptyPage title="Documentation" />,
    },
];

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item) => {
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;