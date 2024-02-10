import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  resolve: {
    mainFields: [],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'axios', replacement: path.resolve(__dirname, 'node_modules', 'axios/dist/esm/axios.js') }
    ],
  },

  build: {
    outDir: '../server/wwwroot',
    emptyOutDir: true,
  },
});
