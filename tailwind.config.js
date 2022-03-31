module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
       colors: {
        black: '#000',
        yellow: 'rgb(251,237,42)',
        white: '#fff',
        grey: 'rgb(227,229,227)',
        darkGray: 'rgb(40,40,40);'
      },
    extend: {
      backgroundImage: {
        'split-white-black': "linear-gradient(to bottom, #000 60% , white 40%);"
      }
    },
  },
  plugins: [],
}
