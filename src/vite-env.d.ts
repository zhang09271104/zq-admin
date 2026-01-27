/// <reference types="vite/client" />
// src/vite-env.d.ts

declare module 'virtual:svg-icons-register' {
  const component: any
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_APP_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
