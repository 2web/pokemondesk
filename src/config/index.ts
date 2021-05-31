export const config = {
  client: {
      server: {
          protocol: 'http',
          host: 'zar.hosthot.ru',
      },
      endpoint: {
          getPokemons: {
              method: 'GET',
              uri: {
                  pathname: '/api/v1/pokemons',
              },
          },
          getPokemon: {
              method: 'GET',
              uri: {
                  pathname: '/api/v1/pokemon',
              },
          },
      },
  },
};

export default config;