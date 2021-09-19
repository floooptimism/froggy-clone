module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mdp': '900px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
