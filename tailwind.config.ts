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
        themeDialogBlack: "#23232E",
        themeGrey: "#3C3C3C",
        themeTextGrey: "#777777",
        themeNavBlack: "#131722",
        themeBorder: "#FDFDFD",
        themeVideoBgGrey: "#22222C",
        themeTextInputBg: "#070B16",
        themeErr: "#CC2B2D",
        themePositionBg: "#2C2E34",
        themeWebBg: "#0d0d17",
        themeRed: "#C93030"
      },
      screens: {
        mmd: "992px",
        mmmd:"1400px",
      },
      fontSize: {
        "2xs": "0.6rem"
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
      }
    },
  },
  plugins: [],
};
export default config;
