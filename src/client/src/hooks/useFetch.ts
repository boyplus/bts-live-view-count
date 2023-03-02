import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

function delay(t: number) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

export interface fetchOptions {
  intervalNum?: number;
  dependencies?: Array<any>;
  isDelay?: boolean;
  delayDuration?: number;
}

const useFetch = <T>(
  fetch: (options?: AxiosRequestConfig) => Promise<AxiosResponse<T, any>>,
  options?: fetchOptions
): {
  data: T | undefined;
  status: number | undefined;
  error: any;
  isLoading: boolean;
} => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>();
  const [status, setStatus] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [_, res] = await Promise.all([
        options?.isDelay ? delay(options.delayDuration ?? 500) : null,
        fetch(),
      ]);

      setData(res.data);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        setStatus(error.status);
      }
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    if (options?.intervalNum) {
      const interval = setInterval(() => {
        fetchData();
      }, options.intervalNum);
      return () => {
        clearInterval(interval);
      };
    }
  }, options?.dependencies ?? []);

  return { data, error, status, isLoading };
};

export default useFetch;
