import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Hnav from "./Hnav";
import image1 from "./w.jpg";
import image3 from "./ss.jpg";
import image4 from "./wp2.jpg";

const navarray = [
  { num: 1, title: "resume", img: image1, datas: "resume" },
  { num: 3, title: "about", img: image3, datas: "about" },
  { num: 4, title: "technologies", img: image4, datas: "technologies" },
  { num: 5, title: "products", img: image4, datas: "products" },
  { num: 6, title: "upcoming", img: image4, datas: "upcoming" }
];

// Main function
function Beforedropnav() {
  const [ishovered, sethovered] = useState(false);
  const [selectedNav, setSelectedNav] = useState(null);
  const [show, setShow] = useState(true);

  // Filtering based on selection
  const filteredContent = navarray.filter((item) => item.title === selectedNav);

  const navdrop_content = filteredContent.length > 0 ? (
    filteredContent.map((item, index) => (
      <div key={index} className="grid grid-template-rows align-middle justify-center w-10 h-10 p-5">
        <div style={{ backgroundImage: `url(${item.img})` }}>
          <p>{item.datas}</p>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-400 text-center">No content available</p>
  );

  // Manage navbar visibility on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShow(window.scrollY <= lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manage selection
  const ref_manage = (params) => {
    setSelectedNav(params);
    sethovered(true);
  };

  // Handle hover leave
  const handlehoverleave = () => {
    sethovered(false);
  };

  return (
    <>
      {!ishovered ? (
        <Hnav ishovered={ishovered} sethovered={sethovered} selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      ) : (
        <motion.div
          initial={{ height: 0, opacity: 0,position:'relative' }}
          animate={ishovered ? { opacity: 1, height: "12rem",position:'absolute' } : { opacity: 0, height: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          exit={{ height: 0, opacity: 0,position:'relative' }}
          className={`bg-black h-48 flex flex-row text-white top-0 w-full justify-between align-top py-8`}
          onMouseLeave={handlehoverleave}
        >
          <h1 className="ml-4 mr-4 hover:underline hover:opacity-60">
            NIKHIL
            <motion.div className="grid grid-template-rows" transition={{ ease: "easeInOut", duration: 0.5 }}>
              {ishovered ? navdrop_content : null}
            </motion.div>
          </h1>

          <motion.div className="pr-5 flex flex-row gap-2 cursor-pointer">
            {["products", "resume", "upcoming", "about", "technologies"].map((item) => (
              <motion.i
                key={item}
                className="cursor-pointer h-8 w-auto hover:underline hover:opacity-60"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => ref_manage(item)}
                onMouseLeave={handlehoverleave}
              >
                {item}
              </motion.i>
            ))}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Beforedropnav;
