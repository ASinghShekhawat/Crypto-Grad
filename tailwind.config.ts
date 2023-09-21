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
        themeViolet: "#743FE0",
        themeVioletText: "#cbb2fd",
        themeBlue: "#5E5AFF",
        themeBorderBlue: "#6754F8",
        themeBlack: "#191A21",
        themeBgBlack: "#20222B",
        themeGrey: "#3C3C3C",
        themeTextGrey: "#777777",
        themeNavBlack: "#131722",
        themeBorder: "#FDFDFD",
      },
      screens: {
        mmd: "992px",
      },
    },
  },
  plugins: [],
};
export default config;
