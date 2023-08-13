/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:"true",
      padding:'1rem',
      screens:{
        sm : '640px',
        md :'768px',
        lg :'976px',
        xl :'1280px',
        "2xl":'1536px'     
      },
    },

    extend: {
      colors:{
        primaryColor:'#FFC107',
        secondaryColor:'#FBC02D',
        tertiaryColor:'#EAAF0A',
        quaternaryColor:'#BFA000',
        darkPrimaryColor:'#c4a50f',
        lightSecondaryColor:'#ffebcd',
        grayishBlue:'#bababa',
        blackishGray:'#d6d6d6',
        whiteishGray:'#e6e6fa',
      }
    },
  },
  plugins: [],
}
