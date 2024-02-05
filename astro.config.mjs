import {
  defineConfig
} from 'astro/config';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  experimental: {
    // assets: true,
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  integrations: [
    astroI18next(),
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ]
});