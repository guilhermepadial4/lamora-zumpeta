import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), 
  ],
  build: {
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: true,
  },
});
