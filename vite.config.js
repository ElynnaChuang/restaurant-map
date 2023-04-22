import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

export default ({ mode }) =>
  defineConfig({
    base: '/restaurant-map/',
    plugins: [
      react(),
      svgrPlugin(),
      eslintPlugin({
        include: ['src/**/*.jsx', 'src/*.jsx'],
      }),
    ],
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    build: {
      // 把輸出路徑設定成跟 CRA 相同的 `build/`
      outDir: 'build',
    },
    server: {
      open: true,
      port: 3000,
    },
  });
