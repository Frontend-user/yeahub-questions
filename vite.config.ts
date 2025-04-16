import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      icons: path.resolve(__dirname, "./src/shared/assets/icons"),
      images: path.resolve(__dirname, "./src/shared/assets/images"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  // css: {
  //     modules: {
  //         localsConvention: 'camelCaseOnly',
  //     },
  // },
});
