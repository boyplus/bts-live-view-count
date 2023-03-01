import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

function delay(t: number) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

const useFetch = <T>(
  fetch: (options?: AxiosRequestConfig) => Promise<AxiosResponse<T, any>>,
  intervalNum?: number,
  dependencies?: Array<any>
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
      const [_, res] = await Promise.all([delay(500), fetch()]);

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
    if (intervalNum) {
      const interval = setInterval(() => {
        fetchData();
      }, intervalNum);
      return () => {
        clearInterval(interval);
      };
    }
  }, dependencies ?? []);

  return { data, error, status, isLoading };
};

export default useFetch;
