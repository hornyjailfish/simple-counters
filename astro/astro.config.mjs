import { defineConfig } from "astro/config";

process.env.BROWSER = "chrome";
// https://astro.build/config
export default defineConfig({
  server: {
    open: true,
  },
});
