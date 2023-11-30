/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#707aff",
        dark: "#171717",
        light: "#E6E6FA",
        from: "#D16BA5",
        via: "#86A8E7",
        to: "#5FFBF1"
      },
      fontFamily: {
        'main': ['Poppins', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif']
      },
      animation: {
        'infinite-scroll-left': 'infinite-scroll-left 40s linear infinite',
        'infinite-scroll-right': 'infinite-scroll-right 40s linear infinite',
        'infinite-scroll-left-slow': 'infinite-scroll-left 60s linear infinite',
        'infinite-scroll-right-slow': 'infinite-scroll-right 60s linear infinite',
        blob: 'blob 10s infinite',
        blob2: 'blob 4s infinite',
        blob3: 'blob 6s infinite',
      },
      keyframes: {
        'infinite-scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-right': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        },
        blob: {
          "0%": {
            transform: "translate(80px, -20px) scale(1)"
          },
          "33%": {
            transform: "translate(300px, -300px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-900px, 900) scale(0.9)"
          },
          "100%": {
            transform: "translate(80px, -20px) scale(1)"
          }
        }
      }  
    }, 
  },
  plugins: [],
}

