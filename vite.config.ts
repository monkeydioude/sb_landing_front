import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: { alias: { '~': path.resolve(__dirname, 'app') } },
  plugins: [tailwindcss(), reactRouter()],
  server: { port: 4056 },
});
