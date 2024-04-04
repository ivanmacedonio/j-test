module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      spacing : {
        'half': '50%',
        '80' : "80%",
        'full': "100%"
      }
    },
  },
  variants: {},
  plugins: [],
}