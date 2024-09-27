import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Hnav from './Hnav'
import { Content_card } from './Content_card'
import Footer from './Footer'
import Beforedropnav from './Beforedropdown.jsx'



function App() {
  const [count, setCount] = useState(0)
  const [display,setDisplay]=useState(false)
  const setDisplayup=()=>{
    setDisplay(!display)
  
  }
  const [ishovered, sethovered] = useState(true);


 
 

  const handlehover = () => {
    
    
    sethovered(!ishovered);
    
  };
  const handlehoverleave = () => {
    if (ishovered==true){
      sethovered(!ishovered);

    }
  }
 

  return (
    <>
   {/* <Beforedropnav ishovered={ishovered} sethovered={sethovered} handlehover={handlehover} handlehoverleave={handlehoverleave}/>
   */}
   <Beforedropnav ishovered={ishovered} sethovered={sethovered} />
  {/* <div className=" fixed  hover:h-52 h-40 bg-slate-500 grid place-items-center [grid-template-areas:'stack']">
  <div className="h-40 w-full bg-gradient-to-t from-slate-800 to-transparent [grid-area:stack]"></div>

  <h1 className="text-6xl font-bold text-white [grid-area:stack]">Tailwind CSS</h1>
</div> */}
    

   
    
    
    <Content_card/>
  
    
    
    </>
    
    
   
  )
}

export default App
