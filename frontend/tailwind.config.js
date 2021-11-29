const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      borderColor: ['active', 'checked'],
      border: ['active'],
      outline: ['focus', 'hover', 'active']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}