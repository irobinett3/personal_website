import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { git } from "../constants"; // Assuming you have the icon images in your assets folder
import { chatbot } from "../constants"; // Adjust the paths as per your file structure

const Navbar = () => {
  const [active, setActive] = useState("");

  const handleNavLinkClick = (navTitle) => {
    setActive(navTitle);
    const element = document.getElementById(navTitle);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ian Robinett &nbsp;
            <span className="sm:block hidden">| Software Engineer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavLinkClick(nav.id)}
            >
              <Link to={`#${nav.id.toLowerCase()}`} className="block">
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* LinkedIn and GitHub Links */}
        <div className="flex gap-4 sm:gap-8">
          <a
            href="https://github.com/irobinett3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary"
          >
            <img src={git} alt="GitHub" className="h-4 w-4 sm:h-10 sm:w-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/ian-robinett-03507a25a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary"
          >
            <img src={chatbot} alt="LinkedIn" className="h-4 w-4 sm:h-10 sm:w-10" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
      </div>
    </nav>
  );
};

export default Navbar;