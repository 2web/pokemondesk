const config = {
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
            pathname: '/api/v1/pokemon/{id}',
          },
        },
  
        // FAKE API
        createPokemon: {
          method: 'POST',
          uri: {
            pathname: '/api/v1/pokemon/create',
          },
        },
        updatePokemon: {
          method: 'PATCH',
          uri: {
            pathname: '/api/v1/pokemon/{id}',
          },
        },
        deletePokemon: {
          method: 'DELETE',
          uri: {
            pathname: '/api/v1/pokemon/{id}/delete',
          },
        },
      },
    },
  };
  
  export default config;