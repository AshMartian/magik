import { defineConfig } from 'vite';

import inject from '@rollup/plugin-inject';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
        plugins: [inject({ Buffer: ['Buffer', 'Buffer'] })],
    },
  },
})
