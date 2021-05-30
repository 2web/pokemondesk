import config from '../config/index';

type TEndpoint = keyof typeof config.client.endpoint;

const getUrlWithParamsConfig = (endpointConfig: TEndpoint) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
  };

  return url;
};

export default getUrlWithParamsConfig;