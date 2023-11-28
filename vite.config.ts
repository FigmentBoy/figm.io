import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { enhancedImages } from '@sveltejs/enhanced-img';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [enhancedImages(),svelte()],
})
