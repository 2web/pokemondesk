import config from '../config/index';

type TEndpoint = keyof typeof config.client.endpoint;

const getUrlWithParamsConfig = (endpointConfig: TEndpoint, query: object) => {
  const url = {
    // search: `limit=${query.limit}&name=${query.name}`,
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };

  return url;
};

export default getUrlWithParamsConfig;