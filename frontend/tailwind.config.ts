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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mint: {
          50:  '#f0fffe',
          100: '#ddf6f4',
          200: '#ccf2f0',
          300: '#b8ebe8',
          400: '#a8edea',
          500: '#7dd8d4',
          600: '#4ecdc4',
          700: '#2ab5ac',
          800: '#1a8c85',
          900: '#0d5e59',
        },
        ocean: {
          50:  '#eff8ff',
          100: '#dbeffe',
          200: '#b8dffd',
          300: '#7ac4fb',
          400: '#4a90d9',
          500: '#2d7abf',
          600: '#1e6fa8',
          700: '#175c8e',
          800: '#0d3b4a',
          900: '#082530',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'mint-sm': '0 1px 4px rgba(74,144,217,0.10)',
        'mint-md': '0 4px 16px rgba(74,144,217,0.16)',
        'mint-lg': '0 8px 32px rgba(74,144,217,0.20)',
        'mint-xl': '0 16px 48px rgba(74,144,217,0.18)',
      },
    },
  },
  plugins: [],
};
export default config;
