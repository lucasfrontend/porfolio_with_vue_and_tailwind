/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'green': '#1DB954',
        'dark': '#121212',
        'light': '#282828',
        'lightest': '#838383',
        'darkest': '#191414'
      }
    },
  },
  plugins: [],
}
