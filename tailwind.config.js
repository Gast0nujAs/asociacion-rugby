/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    
    extend: {
      fontFamily : {
        'sans' : ['Overpass', 'sans-serif'],
        'bebas' : ['Bebas Neue', 'cursive'],
      },
      colors : {
        'primary' : '#FF0000',
        'secondary' : '#00FF00',
        "SoftOrange": "hsl(35, 77%, 62%)",
        "VeryDarkBlue": "hsl(207, 13%, 34%)",
        "GrayishBlue": "hsl(240, 2%, 79%)",
        "Oro" : '#DCC81E',
      },
      backgroundImage : {
        "back-image" : "url('./assets/img/background.webp')",
      }
    },
  },
  plugins: [],
}
