/* eslint-disable no-shadow */
import Url from 'url';

import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import config from '../config/index';

type TEndpoint = keyof typeof config.client.endpoint;

const req = async (endpoint: TEndpoint) => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  const result = await fetch(uri).then((response) => response.json());

  return result;
};

export default req;