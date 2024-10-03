import { useState,useEffect } from "react";
import Hnav from './Hnav'

function Beforedropnav(props) {

  const [ishovered,sethovered]=useState(false)
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
  const handlehover = () => {
    if(ishovered === true){
      ishovered === false 

    }
      
        
     
    
    
      
      
    };
    const handlehoverleave = () => {
       
       if(ishovered=== true){
        sethovered(!ishovered);

       }
     
       
  
     
      
      
    };
    
    
    return (
      <>
      {
        ishovered===false ?<Hnav ishovered={ishovered} sethovered={sethovered}/>:
      
      
     
      
        <div className= {`transition-transform duration-300 top-0 w-full justify-between align-top py-8 flex flex-row h-24 mr-4  ${show ? 'translate-y-0' : '-translate-y-48'}transition-transform duration-300 
    fixed bg-black h-48 text-white' 
    top-0 w-full justify-between align-top py-8 flex flex-row  mr-4  `}
   onMouseLeave={handlehoverleave} >
              <h1  className="ml-4 mr-4 hover:underline hover:opacity-60"
                >
                NIKHIL
              </h1>
  
              <div className=" pr-5  flex flex-row gap-2  cursor-pointer">
                <i className=" h-8 w-15 hover:opacity-60 hover:underline" onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>products</i>
  
  
                <i className=" h-8 w-15 hover:underline hover:opacity-60" onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>resume</i>
  
  
                <i className=" h-8 w-19 hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>upcoming</i>
  
                <i className=" h-8 w-11 hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>about</i>
  
                <i className=" h-8 w-20 hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>technologies</i>
                
            </div>
          </div>}
          </>
        
    )
  }
  
  export default Beforedropnav