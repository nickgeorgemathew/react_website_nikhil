import { useState, useEffect,useRef } from "react";
import { motion } from 'framer-motion';
import './App.css';
import Hnav from './Hnav';
import image1 from './w.jpg';
import image3 from './ss.jpg';
import image4 from './wp2.jpg';

const navarray = [
  {
    num: 1,
    title: "resume",
    img: image1,
    datas: "sdasdasdsadasda"
  },
  {
    num: 3,
    title: "about",
    img: image3,
    datas: "sdasdasdsadasda"
  },
  {
    num: 4,
    title: "technologies",
    img: image4,
    datas: "sdasdasdsadasda"
  },
  {
    num: 5,
    title: "products",
    img: image4,
    datas: "sdasdasdsadasda"
  },
  {
    num: 6,
    title: "upcoming",
    img: image4,
    datas: "sdasdasdsadasda"
  }
];
//items that appear on dropdown


//main function

function Beforedropnav(props) {
  // initialising
  const [ishovered, sethovered] = useState(false);
  const [selectedNav, setSelectedNav] = useState(null);
  const [show, setShow] = useState(true);
  const header_chosen=useRef()
  //filtering based on choice
 const filteredContent = navarray.filter((item) => item.title === selectedNav);

const navdrop_content = filteredContent.length > 0 ? (
  filteredContent.map((item, index) => (
    <div key={index} className="grid grid-template-rows align-middle justify-center w-10 h-10 p-5">
      <div style={{ backgroundImage: `url(${item.img})` }}>
        <p>{item.datas}</p>
      </div>
      <div style={{ backgroundImage: `url(${item.img})` }}>
        <p>{item.datas}</p>
      </div>
    </div>
  ))
) : (
  <p className="text-gray-400 text-center">No content available</p>
);
  
//manage nav visibility on scrolling
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setShow(window.scrollY <= lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //function to handle ref and find which header
function ref_manage(params){
  setSelectedNav(params);

  };
  
//functions to handle hover
  const handlehover = () => {
    sethovered(false);
  };

  const handlehoverleave = () => {
    sethovered(false);
  };
//major rendering
  return (
    <>
      {ishovered === false ? (
        <Hnav ishovered={ishovered} sethovered={sethovered} selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      ) : (
        <motion.div
          initial={{ height: "-12rem", opacity:0, position: "relative"}}
          animate={{  opacity: "1", height:"12rem", position: "fixed" }}
          transition={{ ease: "easeIn", duration: 2 }}
          exit={{height:"0rem",opacity:0}}
          className={`bg-black h-48 flex flex-row mr-4 ${show ? 'translate-y-0' : '-translate-y-48'} transition-transform duration-300 text-white top-0 w-full justify-between align-top py-8 opacity-0`}
          onMouseLeave={handlehoverleave}
        >
          <h1 className="ml-4 mr-4 hover:underline hover:opacity-60">
            NIKHIL
            <motion.div className="grid grid-template-rows" transition={{ ease: "easeIn", duration: 10 }}>
              {ishovered ? navdrop_content : null}
            </motion.div>
          </h1>

          <motion.div className="pr-5 flex flex-row gap-2 cursor-pointer">
            <div>
              <i
              ref={header_chosen}
              
                className="h-8 w-15 hover:opacity-60 hover:underline"
                onMouseEnter={()=>{ref_manage('products')}}
                whileHover={{ scale: 1.1 }}
                onMouseLeave={handlehoverleave}
              >
                products
              </i>
              <div></div>
            </div>

            <i
              className="cursor-pointer h-8 w-15 hover:opacity-60 hover:underline"
              ref={header_chosen}
             
              onMouseEnter={()=>{ref_manage('resume')}}
              whileHover={{ scale: 1.1 }}
              onMouseLeave={handlehoverleave}
            >
              resume
            </i>
            <i
              className="cursor-pointer h-8 w-15 hover:opacity-60 hover:underline"
              ref={header_chosen}
              
              onMouseEnter={()=>{ref_manage('ipcoming')}}
              whileHover={{ scale: 1.1 }}
              onMouseLeave={handlehoverleave}
            >
              upcoming
            </i>
            <i
              className="cursor-pointer h-8 w-11 hover:underline hover:opacity-60"
              ref={header_chosen}
             
              onMouseEnter={()=>{ref_manage('about')}}
              whileHover={{ scale: 1.1 }}
              onMouseLeave={handlehoverleave}
            >
              about
            </i>
            <i
              className="cursor-pointer h-8 w-20 hover:underline hover:opacity-60"
              ref={header_chosen}
             
              onMouseEnter={()=>{ref_manage('technologies')}}
              onMouseLeave={handlehoverleave}
              whileHover={{ scale: 1.1 }}
            >
              technologies
            </i>
          </motion.div>
          <div></div>
        </motion.div>
      )}
    </>
  );
}

export default Beforedropnav;
