import { useState } from "react";

import image1 from './w.jpg'
import image3 from './ss.jpg'
import image4 from './wp2.jpg'



const bgarray=[
  {
    num:1,
    title:"one",
    img:image1,
    datas:"sdasdasdsadasda"
  }
  ,
  
{
  num:3,
  title:"two",
  img:image3,
  datas:"sdasdasdsadasda"
},
{
  num:4,
  title:"two",
  img:image4,
  datas:"sdasdasdsadasda"
}





]
const navdrop_content=bgarray.map((item,index)=>(
  <div key={index} className=" align-middle justify-center w-10 h-10 p-5">
  {/*  card content */}
  <div  className="bg"style={{ backgroundImage: `url(${item.img})` }}>
   <p>{item.datas}</p>
    </div>
</div>
 )
)
  

const Hnav = (props) => {
  const{ishovered,sethovered}=props;
 


 
 

  const handlehover = () => {
    
    if (ishovered==false){
    
    sethovered(!ishovered);
    }
    
  };
  const handlehoverleave = () => {
    if (ishovered==true){
      sethovered(!ishovered);

    }
    
    
  };
  

  return (
   
      
        <div  className=" bg-black   grid grid-flow-col justify-between py-8 px-3 h-20" >
          
              <h1  className=" hover:underline hover:opacity-60"
                >
                NIKHIL
              </h1>
  
              <div className=" h-max flex flex-row gap-2  cursor-pointer">
                <i className="block h-full hover:opacity-60 hover:underline" onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>products</i>
  
  
                <i className="hover:underline hover:opacity-60" onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>resume</i>
  
  
                <i className="hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>upcoming</i>
  
                <i className="hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>about</i>
  
                <i className="hover:underline hover:opacity-60"onMouseEnter={handlehover} onMouseLeave={handlehoverleave}>technologies</i>
                
          
          </div>

      {/* <div  onMouseLeave={handlehoverleave} > 
      <div className={ ` ${ishovered ? 'h-48 ' : 'h-0'}  `}
         > <div className="    ">

         
            <div onMouseEnter={handlehover} className="   ">
              asjdhkjashkjhaksjdhas
            {ishovered&&navdrop_content}
            </div>
            </div> 
            </div>  
        
          
          <div className="  w-screen inline-flex flex-row h-16 justify-between items-center  top-0  z-10  bg-blue-950 text-gray-400 text-center px-12" onMouseLeave={handlehoverleave}>
            <h1  className=" hover:underline hover:opacity-60"
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
       </div> */}
    </div>
  );
}


export default Hnav;
