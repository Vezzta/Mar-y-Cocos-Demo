import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        terracotta: "#7A3A3A",
        wine: "#6E3030",
        sand: "#E9DFCF",
        ivory: "#FAF6EF",
        ocean: "#2F6F73",
        palm: "#6C8A6A",
        sunset: "#F4A68A"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
