import axios from 'axios';
import { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export default axiosInstance;
