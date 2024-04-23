import { AUTH_ENDPOINTS } from '@/constants/auth';
import type { TValidateUserResponse } from './types';
import axios from 'axios';

const SERVER_PORT = import.meta.env.VITE_SERVER_PORT;

export const validateUser = async (code: string): Promise<TValidateUserResponse> => {
  const response = await axios.post(`http://localhost:${SERVER_PORT}${AUTH_ENDPOINTS.CALLBACK}`, { code });
  return response.data;
};
