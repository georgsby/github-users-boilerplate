/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_GITHUB_CLIENT_ID: string;
  VITE_GITHUB_CLIENT_SECRET: string;
  VITE_SERVER_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
