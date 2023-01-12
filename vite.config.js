import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import history from 'connect-history-api-fallback';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  root: './public',
  build: {
    outDir: '../dist',
  },
  // server: {
  //   middleware: [
  //     history({
  //       index: 'index.html',
  //     }),
  //   ],
  // },
});
