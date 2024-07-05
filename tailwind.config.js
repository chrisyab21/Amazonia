/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rubik: ['Rubik', 'sans-serif'],
        roboto: 'Roboto'
      },
      colors: {
        AzulOscuro: '#0b172a',
        Verde: '#004d26'
      },
      aspectRatio: {

        '4/5':'4/5',
        '16/8': '2',
        '16/11': '1.45'
      }
    },
  },
  plugins: [],
}

