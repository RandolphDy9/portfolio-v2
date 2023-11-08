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
        from: "#D16BA5",
        via: "#86A8E7",
        to: "#5FFBF1"
      },
      fontFamily: {
        'main': ['Poppins', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif']
        // 'secondary': ['Montserrat', 'sans-serif']
      },
      animation: {
        'infinite-scroll-left': 'infinite-scroll-left 40s linear infinite',
        'infinite-scroll-right': 'infinite-scroll-right 40s linear infinite',
        'infinite-scroll-left-slow': 'infinite-scroll-left 60s linear infinite',
        'infinite-scroll-right-slow': 'infinite-scroll-right 60s linear infinite',
      },
      keyframes: {
        'infinite-scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-right': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        }
      }  
    }, 
  },
  plugins: [],
}

