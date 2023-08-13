// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     container:{
//       center:"true",
//       padding:'1rem',
//       screens:{
//         sm : '640px',
//         md :'768px',
//         lg :'976px',
//         xl :'1280px',
//         "2xl":'1536px'     
//       },
//     },

//     extend: {
//       colors:{
//         primaryColor:'#FFC107',
//         secondaryColor:'#FBC02D',
//         tertiaryColor:'#EAAF0A',
//         quaternaryColor:'#BFA000',
//         darkPrimaryColor:'#c4a50f',
//         lightSecondaryColor:'#ffebcd',
//         grayishBlue:'#bababa',
//         blackishGray:'#d6d6d6',
//         whiteishGray:'#e6e6fa',
//       }
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config}*/
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1535px",
        xl: "1279px",
        lg: "1023px",
        sm: "639px",
        md: "767px",
      },
      maxWidth: "100%",
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "836px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      exsm: { max: "380px" },
    },
    extend: {
      colors: {
        "text-yellow-500": "#ffc312",
      },
    },
  },
  plugins: [],
};