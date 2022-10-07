import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wanted-pre-onboarding-challenge-fe-3/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        root: resolve(__dirname, 'index.html'),
      },
    },
  },
});
