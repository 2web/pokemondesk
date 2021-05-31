import config from '../config/index';

type TEndpoint = keyof typeof config.client.endpoint;

interface IApiConfigUri {
  host: string;
  protocol: string;
  pathname: string;
  query?: object;
}

interface IEndpoint {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

const getUrlWithParamsConfig = (endpointConfig: TEndpoint, params: any) => {
  // const { method, uri } = config.client.endpoint[endpointConfig as keyof config.client.emdpoint];
  const { method, uri }: IEndpoint = config.client.endpoint[endpointConfig];

  let body = {};
  const apiConfigUri: IApiConfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = {
    ...params,
  };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`${val}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val as keyof typeof query]);
      // eslint-disable-next-line no-param-reassign
      delete query[val];
      return result;
    }

    return acc;
  }, apiConfigUri.pathname);

  apiConfigUri.pathname = pathname;

  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = query;
  }

  return {
    method,
    uri: apiConfigUri,
    body,
  };
};

export default getUrlWithParamsConfig;