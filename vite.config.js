import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Asegura que las rutas comiencen desde la raíz
  build: {
    outDir: 'dist', // Vercel toma por defecto la carpeta dist
  },
});
