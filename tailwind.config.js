/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'YoungSerif': ['Young Serif', 'serif'],
        'Outfit': ["Outfit", 'sans-serif']
      },
      colors:{
        'RoseWhite':'hsl(330, 100%, 98%)',
        'Eggshell':'hsl(30, 54%, 90%)',
        'LightGrey':'hsl(30, 18%, 87%)',
        'WengeBrown': 'hsl(30, 10%, 34%)',
        'DarkCharcoal': 'hsl(24, 5%, 18%)'
      }
    },
  },
  plugins: [],
}