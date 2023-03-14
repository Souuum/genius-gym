/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary': '#fb4b4e',
      'secondary': '#1a1b37',
      'secondary-light': '#2a2b57',
      'accent': '#ff7849',
      'black': '#1b1b1e',
      'white': '#fbfffe',
      'gray': '#a0a0a0',
    },
  },
  plugins: [],
}
