import fluid, { extract } from 'fluid-tailwind'
export default {
  content: {
    files: [/* ... */],
    extract
  },
  plugins: [
    fluid
  ]
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
    extend: {
      screens: {
        xs: '20rem'
      }
    },
  },
  plugins: [],
}

