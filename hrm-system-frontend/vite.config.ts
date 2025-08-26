import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target:"http://localhost:2404/",
        secure:false,
      }
    }
  },
  plugins: [react(),
       tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ map @ to src/
    },
  },
})
