/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        'custom-black': '#23211f',
        'custom-blue': '#565681',
        'custom-purple': '#8a5362',
        'custom-red': '#ca3d22',
        'custom-pink': '#e9c7be'
      }
    },
  },
  plugins: [],
}

