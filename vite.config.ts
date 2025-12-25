import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['draft-js'],
  },
  define: {
    global: 'window',
  },
  resolve: {
    alias: {
      'draft-js': 'draft-js/lib/Draft',
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
