/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // accent: "#71EAC6",
        accent: "#01DC73",
        lightPrimary: "#254B45",
        dark: "#27232C"
      },
      fontFamily: {
        'main': ['Poppins', 'sans-serif'],
        'secondary': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

