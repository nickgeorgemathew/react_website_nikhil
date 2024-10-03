import { useState,useEffect } from "react";
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
   <>
   <div className= {` fixed transition-transform duration-300 top-0 w-full justify-between align-top py-8 flex flex-row h-24 mr-4  ${show ? 'translate-y-0' : '-translate-y-48'}`}
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
          </>
      
        
  );
}


export default Hnav;
