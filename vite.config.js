import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/My_New_Potfolio/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});

