import axios from 'axios';
import { AxiosInstance } from 'axios';

import { AdminApi, AuthApi, VideoApi } from './generated/api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export const adminApi = new AdminApi(undefined, '');
export const authApi = new AuthApi(undefined, '');
export const videoApi = new VideoApi(undefined, '');

export default axiosInstance;
