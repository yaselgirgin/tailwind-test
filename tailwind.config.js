/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },

      colors: {
        'nm-blue': '#007BFF',
        'nm-red': '#DE202A',
        'nm-orange': '#FD7E14',
        'nm-aqua': '#0DCAF0',
        'nm-green': '#28A745',
        'nm-yellow': '#FFC107',
        'nm-navy': '#194F90',
      },
    },
  },
  plugins: [],
}

