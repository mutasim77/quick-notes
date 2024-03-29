import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      checker({
        eslint: {
          lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        },
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^~(.+)/,
          replacement: path.join(process.cwd(), 'node_modules/$1'),
        },
        {
          find: /^src(.+)/,
          replacement: path.join(process.cwd(), 'src/$1'),
        },
      ],
    },
    server: {
      port: 3030,
    },
    preview: {
      port: 3030,
    },
  }
});
