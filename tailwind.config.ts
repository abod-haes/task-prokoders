import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "#1c9dea",
        secondly: "#223645",
        "light-100": "#647589",
        "light-200": "#eff1f2",
      },
    },
  },
  plugins: [],
};
export default config;
