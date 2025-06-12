/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        editorial: ["Playfair Display", "serif"],
        script: ["Cormorant Garamond", "serif"],
        typewriter: ["Crimson Text", "serif"]
      },
      colors: {
        "pure-white": "#FFFFFF",
        "editorial-black": "#000000",
        gold: "#D4AF37",
        blush: "#FFF5F5",
        gunmetal: "#2C3539"
      }
    }
  },
  plugins: []
};