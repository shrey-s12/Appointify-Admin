import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {port: 5174},
  envPrefix: 'VITE_',  // Ensure the prefix is 'VITE_'
})
