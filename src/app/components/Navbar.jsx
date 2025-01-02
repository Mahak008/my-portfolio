"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Education",
    path: "#education",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-50 bg-black">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4 py-2 md:py-8">
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button 
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
            >
              <HiMenuAlt2 className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
            >
              <RxCross2 className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center text-white text-xl flex-grow italianno-regular">
          Mahak Garg
        </div>

        <nav className="flex items-center justify-center flex-wrap">
          <a
            href="mailto:garg02mahak@gmail.com"
            target="_blank"
            className="relative w-3 mr-2 md:w-6 md:mr-3"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.github.com/Mahak008"
            target="_blank"
            className="relative w-3 mr-2 md:w-6 md:mr-3"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/mahak_garg/"
            target="_blank"
            className="relative w-3 mr-2 md:w-6 md:mr-3"
          >
            <SiGeeksforgeeks />
          </a>
          <a
            href="https://leetcode.com/u/Mahak80/"
            target="_blank"
            className="relative w-3 mr-2 md:w-6 md:mr-3"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.linkedin.com/in/mahakgarg"
            target="_blank"
            className="relative w-3 mr-2 md:w-6 md:mr-3"
          >
            <FaLinkedin />
          </a>
        </nav>
      </div>

      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
