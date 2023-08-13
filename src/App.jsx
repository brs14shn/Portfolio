import { useState,useEffect } from 'react'
import {Suspense} from 'react'
import { BarLoader, PacmanLoader, PropagateLoader } from 'react-spinners'
import Home from './pages/Home';

function App() {

const [loading,setLoading] =useState(true);



useEffect(()=>{
  const timer =setTimeout(()=>{
    setLoading(!loading)
  },5000);
  return  ()=> clearTimeout(timer)
},[])

  return (
    
    <Suspense
    fallback ={
      <div className="h-screen w-full flex items-center justify-center">
       <BarLoader  height={4} color='brown'/>
      </div>
    }
    >
      {loading ? (
      <div className="h-screen w-full flex items-center justify-center">
      {/* <BarLoader  height={4} color='red'/> */}
      {/* <PacmanLoader/> */}
      <PropagateLoader height={4} color='brown' />
     </div>
      ) : <Home/>}


    </Suspense>
    
       
    
  )
}

export default App
