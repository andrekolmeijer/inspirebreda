module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'inspire-orange': '#F98A0C', // #f28c00
        'inspire-brown': '#331606',
        'inspire-brown-light': '#DDC5B8',
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
  plugins: [],
}
