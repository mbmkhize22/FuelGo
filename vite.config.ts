import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ This must match your GitHub repo name
export default defineConfig({
  base: '/fuelgo/',  
  plugins: [react()],
})
