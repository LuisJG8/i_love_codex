import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://codex-wins.example",
  vite: {
    plugins: [tailwindcss()]
  },
  output: "static"
});
