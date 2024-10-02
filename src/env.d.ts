/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_BASEURL: string;
    readonly VITE_BASEURL
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }