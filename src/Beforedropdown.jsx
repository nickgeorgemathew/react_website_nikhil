

function Beforedropnav(props) {
    const{ishovered,sethovered}=props;
    const handlehover = () => {
      if(ishovered==false){
        sethovered(!ishovered);
      }
    
    
      
      
    };
    const handlehoverleave = () => {
      if (ishovered==true){
        sethovered(!ishovered);
  
      }
      
      
    };
    
    
    return (
     
      
        <div className=" fixed  top-0   w-full justify-between align-top  bg-black  py-8 flex flex-row h-24" onMouseLeave={handlehoverleave} >
              <h1  className=" mr-4 hover:underline hover:opacity-60"
                >
                NIKHIL
              </h1>
  
              <div className="   flex flex-row gap-2  cursor-pointer">
                <i className="block h-full hover:opacity-60 hover:underline" onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>products</i>
  
  
                <i className="hover:underline hover:opacity-60" onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>resume</i>
  
  
                <i className="hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>upcoming</i>
  
                <i className="hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>about</i>
  
                <i className="hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>technologies</i>
                
            </div>
          </div>
        
    )
  }
  
  export default Beforedropnav