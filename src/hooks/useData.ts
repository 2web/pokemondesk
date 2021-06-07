import { useState, useEffect } from 'react';

import req from '../utils/request';
import config from '../config/index';

type TEndpoint = keyof typeof config.client.endpoint;

type TData<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T | null;
};

const useData = <T>(endpoint: TEndpoint, query: object, deps: Array<any> = []): TData<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsloading(true);
      try {
        const response = await req<T>(endpoint, query);
        setData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsloading(false);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return {
    isLoading,
    isError,
    data,
  };
};

export default useData;