import axios from 'axios';
import { AxiosInstance } from 'axios';

import { AdminApi, AuthApi } from './generated';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export const adminApi = new AdminApi(undefined, '');
export const authApi = new AuthApi(undefined, '');

export default axiosInstance;
