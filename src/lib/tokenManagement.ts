import { AUTH_TOKEN } from '@/constants/auth';
import { useAppStore } from '@/store/auth';

export type TToken = string | null;
const { setIsAuthUser, startWithoutToken } = useAppStore.getState().actions;

export const saveToken = (token: string) => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};

export const manageToken = (token: TToken = null) => {
  if (typeof token === 'string' && token.length > 1) {
    saveToken(token);
    setIsAuthUser();
    return;
  }
  removeToken();
};

export const startApp = () => {
  const token: TToken = getToken() || null;
  if (!token) {
    startWithoutToken();
    return;
  }
  manageToken(token);
};

export const getToken = (): TToken => localStorage.getItem(AUTH_TOKEN) || null;

export default {
  removeToken,
  manageToken,
  saveToken,
  getToken,
  startApp,
};
