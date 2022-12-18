// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "blue":'#0D4C92',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      "navy":'#3E6D9C',
      "login":'#AAC4FF',
      "white-light":"#f2f2f2",
      "white":"#ffff",
      "red-500":'#e80d0d',
      "red-600":'#e80d0d',
      "yellow-light":'#E6E5D1'
    },
    extend: {
    },
  },
  plugins: [],
}
