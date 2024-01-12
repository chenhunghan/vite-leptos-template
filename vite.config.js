import { defineConfig } from 'vite'
import { vitePluginTrunk } from 'vite-plugin-trunk'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePluginTrunk()],
})