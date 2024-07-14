import React, { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { git, linkedin } from "../constants"; // Assuming you have the icon images in your assets folder

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
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold flex">
            Ian Robinett &nbsp;
            <span className="sm:block hidden">| Software Engineer</span>
          </p>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavLinkClick(nav.id)}
            >
              <a href={`#${nav.id}`} className="block">
                {nav.title}
              </a>
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
            <img src={linkedin} alt="LinkedIn" className="h-4 w-4 sm:h-10 sm:w-10" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
      </div>
    </nav>
  );
};

export default Navbar;