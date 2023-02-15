import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  resolve: {
    mainFields: [],
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },

  build: {
    outDir: '../server/wwwroot',
    emptyOutDir: true,
  },
});
