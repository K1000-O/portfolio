/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-serif': ['Noto Serif Display Variable', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

