/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*{svg}'],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "url('/public/gridpattern.svg')",
        'grid-random-fill': "url('/public/gridrandomtransparentfills.svg')",
      },
    },
  },
  plugins: [],
}
