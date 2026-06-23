import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1D9E75',
          dark: '#0F6E56',
          bg: '#FAFAF8',
          accent: '#F5C96A',
          text: '#333333',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 10px 30px -10px rgba(15, 110, 86, 0.08)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;