import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/goikode-multiIdioma/', // 👈 añade esto
  plugins: [vue()],
})
