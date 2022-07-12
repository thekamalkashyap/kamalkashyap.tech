module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      light: '#c9b185',
      dark: '#242424',
      blue: '#08fdd8',
      red: '#DC2626',
      yellow: '#FACC15',
      green: '#84CC16',
      black: '#000',
      white: '#fff',
    },
  },
  darkMode: 'class', // or media
  variants: {
    extend: {},
  },
  plugins: [],
};
