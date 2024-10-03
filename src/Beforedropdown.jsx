import { useState } from "react";

function Beforedropnav(props) {

  const [ishovered,sethovered]=useState(true)
    
  const handlehover = () => {
      
        sethovered(!ishovered);
     
    
    
      
      
    };
    const handlehoverleave = () => {
       
       if(ishovered=== true){
        sethovered(!ishovered);

       }
     
       
  
     
      
      
    };
    
    
    return (
     
      
        <div className= {`${
    ishovered ? 'fixed bg-black h-48 text-white' : 'relative h-28 bg-transparent'
  } top-0 w-full justify-between align-top py-8 flex flex-row h-24 mr-4`}
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
          </div>
        
    )
  }
  
  export default Beforedropnav