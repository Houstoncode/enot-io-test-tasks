import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import { VitePluginFonts } from 'vite-plugin-fonts';
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSvgr(),
    VitePluginFonts({
      google: {
        families: [
          { name: 'Abhaya Libre', styles: 'wght@400;500;600;700;800' },
          { name: 'Actor' },
        ],
      },
    }),
    EnvironmentPlugin('all', { prefix: 'VITE' }),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src/') }],
  },
});
