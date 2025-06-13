/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'opacity-0',
    'opacity-100',
    'transition-all',
    'duration-1000',
    'left-1/2',
    'top-1/2',
    'transform',
    'translate-x-1/2',
    'translate-y-1/2'
  ],
  theme: {
    extend: {
      fontFamily: {
        'editorial': ['Playfair Display', 'serif'],
        'script': ['Cormorant Garamond', 'serif'],
        'typewriter': ['Crimson Text', 'serif'],
      },
      colors: {
        'pure-white': '#FFFFFF',
        'editorial-black': '#000000',
        'gold': '#FFD700',
        'gold-dark': '#B8860B',
        'blush': '#FFF5F5',
        'gunmetal': '#2C3539',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      rotate: {
        '-7': '-7deg',
        '-5': '-5deg',
        '-3': '-3deg',
        '3': '3deg',
        '5': '5deg',
        '7': '7deg',
      },
    },
  },
  plugins: [],
};
