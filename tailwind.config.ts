import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Scans the app folder
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // Scans pages (just in case)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // <--- THIS IS THE MISSING LINK
    "./src/**/*.{js,ts,jsx,tsx,mdx}",        // Scans src (just in case)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;