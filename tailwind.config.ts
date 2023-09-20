import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themePurple: "#743FE0",
        themeBlue: "#5E5AFF",
        themeBorderBlue: "#6754F8",
        themeBlack: "#191A21"
      },
    },
  },
  plugins: [],
};
export default config;
