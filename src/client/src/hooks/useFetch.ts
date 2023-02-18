import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const useFetch = <T>(
  fetch: (options?: AxiosRequestConfig) => Promise<AxiosResponse<T, any>>
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

      const res = await fetch();
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
  }, []);

  return { data, error, status, isLoading };
};

export default useFetch;
