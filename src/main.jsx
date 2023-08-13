import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from  "aos"
import "aos/dist/aos.css"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
 
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
