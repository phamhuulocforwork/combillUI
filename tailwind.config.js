/** @type {import('tailwindcss').Config} */
module.exports = {
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
