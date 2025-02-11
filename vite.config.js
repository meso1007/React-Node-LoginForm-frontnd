import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.js', // postcss.config.js が必要なら設定
  }
});
