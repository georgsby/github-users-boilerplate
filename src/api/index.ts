import axios from 'axios';
import { AUTH_TOKEN } from '@/constants/auth';
import { getToken } from '@/lib/tokenManagement';

export const axiosInstance = axios.create({
  headers: {
    accept: 'application/vnd.github+json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = getToken();
    if (authToken && config.headers) config.headers[AUTH_TOKEN] = `Bearer ${authToken}`;
    config.url = `${import.meta.env.VITE_API_URL}${config.url}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
