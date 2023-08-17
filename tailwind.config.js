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
        // accent: "#00ff87",
        accent: "#707aff",
        lightPrimary: "#FFFFFF",
        dark: "#171717",
        light: "#F1F1F1",
        from: "#03A696",
        to: "#03aa60"
      },
      fontFamily: {
        'main': ['Poppins', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif']
        // 'secondary': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

