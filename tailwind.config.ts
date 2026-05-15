import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./docs/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05060f",
        foreground: "#ffffff",
        primary: "#c2ccff",
        secondary: "#d8ecf8",
        tertiary: "#d1e4fa",
        neutral: "#05060f",
        surface: "#0b1020",
        border: "#374151",
        accent: {
          DEFAULT: "#c2ccff",
          foreground: "#05060f",
        },
      },
      fontFamily: {
        sans: ["Untitled Sans", "Inter", "sans-serif"],
        display: ["aeonikPro", "Untitled Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
