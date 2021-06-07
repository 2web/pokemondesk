import { Dispatch } from 'react';
import { IInitialState } from '.';
import { ITypesRequest, IStateRequest } from '../Types';
import req from '../utils/request';

// eslint-disable-next-line no-shadow
export enum PokemonsActionTypes {
    FETCH_TYPES = 'FETCH_TYPES',
    FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
    FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

interface ITypesAction {
    type: PokemonsActionTypes;
    payload?: string[];
}

type ActionTypes = ITypesAction;

export interface IPokemonsInitialState {
    types: IStateRequest<string>;
}

const initialState = {
    types: {
        isLoading: false,
        data: null,
        error: null,
    },
};

const pokemons = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonsActionTypes.FETCH_TYPES:
            return {
                ...state,
                types: {
                    isLoading: true,
                    data: null,
                    error: null,
                },
            };
        case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
            return {
                ...state,
                types: {
                    isLoading: false,
                    data: action.payload,
                    error: null,
                },
            };
        case PokemonsActionTypes.FETCH_TYPES_REJECT:
            return {
                ...state,
                types: {
                    isLoading: false,
                    data: null,
                    error: action.payload,
                },
            };
        default:
            return state;
    }
};

export const getPokemonsAction = (endpoint: string) => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
        try {
            const response = await req<ITypesRequest>(endpoint);
            dispatch({ type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response });
        } catch (error) {
            dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: error });
        }
    };
};

export const getPokemonsTypes = (state: IInitialState) => state.pokemons.types.data;
export const getPokemonsTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading;

export default pokemons;