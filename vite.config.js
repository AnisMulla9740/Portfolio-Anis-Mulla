import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio-Anis-Mulla/',  // MUST match repo name exactly
  plugins: [react()]
});
