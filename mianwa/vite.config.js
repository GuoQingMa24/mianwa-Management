import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 将 @ 指向 src 目录
    },
  },
  build:{
    rollupOptions:{
      output:{
        manualChunks:{
          vue: ['vue', 'vue-router'],
        }
      }
    }
  },

});