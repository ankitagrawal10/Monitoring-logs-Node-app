import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // This allows connections from any host, including the custom domain
    allowedHosts: ['ankit.com', 'localhost', '0.0.0.0'], // Add 'ankit.com' to the allowed hosts
    watch: {
      usePolling: true,  // Enable polling
      interval: 1000,    // Set polling interval (in ms)
    },
  },
  plugins: [react()],
})

