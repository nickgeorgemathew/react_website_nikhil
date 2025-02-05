import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from './w.jpg';
import image3 from './ss.jpg';
import image4 from './wp2.jpg';

const bgarray = [
  { num: 1, title: "one", img: image1, datas: "sdasdasdsadasda" },
  { num: 3, title: "two", img: image3, datas: "sdasdasdsadasda" },
  { num: 4, title: "two", img: image4, datas: "sdasdasdsadasda" }
];

const Hnav = ({ selectedNav, setSelectedNav, ishovered, sethovered }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShow(window.scrollY < lastScrollY);
        lastScrollY = window.scrollY;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlehover = () => sethovered(true);
  const handlehoverleave = () => sethovered(false);
  const ref_manage = (params) => setSelectedNav(params);

  return (
    <div
      className={`fixed top-0 w-full flex justify-between py-8 h-24 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-48'
      }`}
      onMouseLeave={handlehoverleave}
    >
      <h1 className="ml-4 hover:underline hover:opacity-60">NIKHIL</h1>

      <div className="pr-5 flex gap-4 cursor-pointer">
        {["products", "resume", "upcoming", "about", "technologies"].map((item) => (
          <motion.i
            key={item}
            className="h-8 w-auto hover:underline hover:opacity-60"
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => { handlehover(); ref_manage(item); }}
            onMouseLeave={handlehoverleave}
          >
            {item}
          </motion.i>
        ))}
      </div>
    </div>
  );
};

export default Hnav;
