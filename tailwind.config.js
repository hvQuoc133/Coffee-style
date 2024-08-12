const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#C89f94',
          400: '#A25F4B',
          600: '#744838',
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeIn: {
           from: { opacity: 0},
           to: {opacity: 1}
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out'
      },
      backgroundImage: {
        'slider-bg': 'url("./image/slider-bg.jpg")',
        'card1-bg': 'url("./image/card1.jpg")',
        'card2-bg': 'url("./image/card2.jpg")',
        'card3-bg': 'url("./image/card3.jpg")',
        'card4-bg': 'url("./image/card4.jpg")',
        'card5-bg': 'url("./image/card5.jpg")',
        'card6-bg': 'url("./image/card6.jpg")',
        'card7-bg': 'url("./image/card7.jpg")',
        'card8-bg': 'url("./image/card8.jpg")',
        'card9-bg': 'url("./image/card9.jpg")',
        'card10-bg': 'url("./image/card10.jpg")',
        'card11-bg': 'url("./image/card11.jpg")'
      }
    },
  },
  plugins: [],
}

