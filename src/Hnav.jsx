import { useState } from "react";

const Hnav = () => {
  const [ishovered, sethovered] = useState(false);
  var ishoveredfix;

  const handlehover = () => {
    
    
    sethovered(!ishovered);
  };
  const handlehoverleave = () => {
    if (ishovered==true){
      sethovered(!ishovered);

    }
    
    
  };
  

  return (
    <div>
      <div>
        <div className={`${ishovered ? 'h-48' : 'h-0'} fixed bg-black`}
         >
          
          <div className="flex flex-row w-screen h-16 justify-between items-center left-0 top-0 right-0 z-10 relative bg-blue-950 text-gray-400 text-center px-12" onMouseLeave={handlehoverleave}>
            <h1 className=" hover:underline hover:opacity-60"
              >
              NIKHIL
            </h1>
            <div className="flex flex-row gap-2 justify-evenly cursor-pointer">
              <i className="block h-full hover:opacity-60 hover:underline" onMouseEnter={handlehover} onMouseLeave={handlehover}>products</i>


              <i className="hover:underline hover:opacity-60" onMouseEnter={handlehover} onMouseLeave={handlehover}>resume</i>


              <i className="hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehover}>upcoming</i>

              <i className="hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehover}>about</i>

              <i className="hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehover}>technologies</i>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hnav;
