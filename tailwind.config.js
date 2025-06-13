/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      },
      colors: {
        'lavender': {
          50: '#f8f7fc',
          100: '#f1eef8',
          200: '#e4def2',
          300: '#d5cae4',
          400: '#c0aed5',
          500: '#a889c4',
          600: '#8f67af',
          700: '#7a5498',
          800: '#66467d',
          900: '#553c66',
        },
        'cream': {
          50: '#fefcf3',
          100: '#fef7e0',
          200: '#fcefc0',
          300: '#f9e394',
          400: '#f3e5ab',
          500: '#edc842',
          600: '#d4b537',
          700: '#b8962d',
          800: '#967829',
          900: '#7b6227',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      lineHeight: {
        'relaxed': '1.75',
      },
    },
  },
  plugins: [],
};