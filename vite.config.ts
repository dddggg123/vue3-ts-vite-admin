import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json', ".scss"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()]
})
