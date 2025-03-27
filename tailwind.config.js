/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#5c8bd3",
         input:"#22262c",
         listCard:"#101204",
         inputBorder:'#579bff',
         transparentWhite:'#ffffff3d'
      },
    },
  },
  plugins: [],
}

