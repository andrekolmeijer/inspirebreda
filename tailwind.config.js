let plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'inspire-orange': '#F98A0C', // #F28C00 inspirecoffee.com / #F98A0C menukaart
        'inspire-orange-logo': '#F28C00',
        'inspire-brown': '#331606',
        'inspire-brown-light': '#DDC5B8',
        'inspire-blue-gray': '#B0C4CF',
        'instagram-blue': '#0095F6',
        'instagram-blue-dark': '#0074CC',
      },
      fontFamily: {
        sans: 'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        'condensed': '"Roboto Condensed"',
        'oswald': 'Oswald'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-hyphens"),
    plugin(function ({ addVariant }) {
      // Add a `second` variant, ie. `second:ml-0`
      addVariant('second', '&:nth-child(2)')
    })
  ],
}
