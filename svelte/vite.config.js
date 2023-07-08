import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

process.env.BROWSER = "chrome";
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [sveltekit()],
});
