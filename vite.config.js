import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-webapps/',
  server:{
    open:true,
    port:8080
  },
  plugins: [react()],
})
