import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../Constants";
import { logo, menu, close } from "../assets";
import Dinesh from "../assets/Dlogo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div>
        <nav
          className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-primary`}
        >
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={Dinesh}
                alt="logo"
                className="h-20 w-20 object-contain"
              />
              <p className="text-white font-bold cursor-pointer text-[18px] flex">
                Dinesh &nbsp;
                <span className="sm:block hidden">Web-Developer</span>
              </p>
            </Link>
            {/* For noraml website menu  */}
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[17px] font-medium cursor-pointer hover:underline`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`} className=" ">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] my-2 z-10 rounded-xl`}
              >
                {/* For toogle menu  */}
                <ul className="list-none flex flex-col gap-4 items-start justify-end">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`} className=" ">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
