/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        codex: {
          void: "#05070c",
          panel: "#0b1018",
          panel2: "#101622",
          line: "rgba(170, 222, 255, 0.22)",
          blue: "#54a6ff",
          cyan: "#b6f2ff",
          violet: "#8a6bff"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 40px rgba(84, 166, 255, 0.18)"
      }
    }
  },
  plugins: []
};
