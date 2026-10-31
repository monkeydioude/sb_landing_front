import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vite';

// BASE_PATH: sub-path hosting (GitHub Pages preview), e.g. '/sb_landing_front/'. Unset = domain root.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  resolve: { alias: { '~': path.resolve(__dirname, 'app') } },
  plugins: [tailwindcss(), reactRouter()],
  server: { port: 4056 },
});
