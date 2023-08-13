import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from  "aos"
import "aos/dist/aos.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

 
)

AOS.init({
  duration:1000,
  easing:'ease',
  once:true,
  mirror:false,
  anchorPlacement:"top",
  disable:'mobile',

  offset:0
})
