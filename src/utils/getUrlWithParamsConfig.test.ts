import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('When call this methond then you get url', () => {
  test('Should take 2 arguments "getPokemons" and an empty object, get an object with the pathname, protocol, host fields and an empty query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('It should take 2 arguments "getPokemons" and {name: "Pikachu"}, on the output get an object with pathname, protocol, host and query fields with name fields equal to Pikachu', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('It should take 2 arguments "getPokemons" and {id: 25 "}, on the output get an object with the fields pathname, protocol, host and an empty query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  test('Should take 2 arguments "createPokemon" and an empty object, on the output get an object with pathname, protocol, host fields and an empty query', () => {
    const url = getUrlWithParamsConfig('createPokemon', {});

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: {},
    });
  });

  test('Should take 2 arguments "updatePokemon" and {id: 42 "}, get an object with the fields pathname, protocol, host and an empty query on the output', () => {
    const url = getUrlWithParamsConfig('updatePokemon', { id: 42 });

    expect(url).toEqual({
      method: 'PATCH',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/42',
        query: {},
      },
      body: {},
    });
  });

  test('Should take 2 arguments "deletePokemon" and {id: 42 "}, get an object with the pathname, protocol, host fields and an empty query on the output', () => {
    const url = getUrlWithParamsConfig('deletePokemon', { id: 42 });

    expect(url).toEqual({
      method: 'DELETE',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/42/delete',
        query: {},
      },
      body: {},
    });
  });
});