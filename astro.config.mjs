import {
  defineConfig
} from 'astro/config';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  experimental: {
    // assets: true,
  },
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ]
});