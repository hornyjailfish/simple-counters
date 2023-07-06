import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8082,
    open: true,
  },
  preview: {
    port: 8082,
  },
  plugins: [react()],
});