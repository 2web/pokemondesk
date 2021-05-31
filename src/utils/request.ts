/* eslint-disable no-shadow */
import Url from 'url';

import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import config from '../config/index';

type TEndpoint = keyof typeof config.client.endpoint;

async function req<T>(endpoint: TEndpoint, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const result = await fetch(uri).then((response) => response.json());

  return result;
}

export default req;