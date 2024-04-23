export const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
export const GITHUB_CLIENT_SECRET = import.meta.env.VITE_GITHUB_CLIENT_SECRET;
export const REDIRECT_URI = 'http://localhost:5173/callback';
const AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user`;

export const AUTH_ENDPOINTS = {
  AUTH: AUTH_URL,
  GET_ACCESS_TOKEN: 'https://github.com/login/oauth/access_token',
  CALLBACK: 'http://localhost:5001/github/callback',
} as const;

export const AUTH_TOKEN: string = 'Authorization';

export default { AUTH_ENDPOINTS, AUTH_TOKEN };
