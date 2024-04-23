import { AUTH_ENDPOINTS } from '@/constants/auth';
import type { TValidateUserResponse } from './types';
import axios from 'axios';

export const validateUser = async (code: string): Promise<TValidateUserResponse> => {
  const response = await axios.post(AUTH_ENDPOINTS.CALLBACK, { code });
  return response.data;
};
