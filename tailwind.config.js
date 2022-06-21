let plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'inspire-orange': '#FF914D', // #F28C00 inspirecoffee.com / #F98A0C menukaart / #FF914D honktwee
        'inspire-orange-dark': '#D07418', // #D07418 color picker
        'inspire-brown-light': '#DDC5B8', // #DDC5B8 menukaart / #C49463 honktwee
        'inspire-brown': '#C99C6C', // #C99C6C color picker
        'inspire-brown-dark': '#331606', // #331606 menukaart / #331606 honktwee
        'inspire-beige': '#EFDAC5', // #EFDAC5 honktwee (achtergrond kleur)
        'inspire-blue-gray': '#B0C4CF', // Verf kleur voorgevel (zie cover photo mobiel)
        'instagram-blue': '#0095F6',
        'instagram-blue-dark': '#0074CC',
      },
      fontFamily: {
        sans: '"Libre Franklin", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
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
