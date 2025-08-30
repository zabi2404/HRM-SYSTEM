import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:2404",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"), 
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
