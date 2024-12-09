import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cvFile from '../assets/cv.pdf';


import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    // fixed navbar 
    <nav
      className={`${styles.paddingX} w-full flex mx-auto items-center py-5 fixed top-4 z-20 bg-primary backdrop-blur-lg bg-opacity-80 shadow-md rounded-full`}
    >
      <div className="w-full flex justify-between items-center px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className="w-10 h-10 object-contain" /> */}
          <p className="text-white text-lg font-bold cursor-pointer flex">
            Antonio Tach
            <span className="sm:block hidden text-secondary ml-4">Fullstack Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white underline underline-offset-4" : "text-secondary"
                } hover:text-white text-lg font-bold cursor-pointer transition duration-300 ease-in-out`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <a href={cvFile} download="CV_Antonio.pdf" className="ml-4">
          <button className="text-white border-2 border-secondary py-2 px-6 rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out">
            Download CV
          </button>
        </a>

        {/* Show menu in small devices */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-black bg-opacity-90 absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl shadow-lg transition duration-300 ease-in-out`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    } font-medium cursor-pointer text-md hover:text-white transition duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>




  );
};

export default Navbar;
