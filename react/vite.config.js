import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

process.env.BROWSER = "chrome";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react()],
});
