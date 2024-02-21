import React, { useState } from "react";
import "./navbar.css";
import { TbGridDots } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";
import Logo from "../../Assets/SVG/Logo";
import pdf from "../../Assets/files/Daniel_Sanchez._enpdf.pdf";
// import cv from '../../../public/cv/FRONTEND DEVELOPER.pdf'

const Navbar = () => {
  // code to toggle on and off the navbar at small width.
  const [active, setActive] = useState("navBar");

  //this will bring in the navbar from the top
  const showNavbar = () => {
    setActive("navBar activeNavbar");
  };

  //this function will remove the navbar.
  const removeNavbar = () => {
    setActive("navBar");
  };

  //code statement to add a background color to the header.
  const [activeHeader, setActiveHeader] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <header className={activeHeader}>
      <div id='logoDiv'>
        <a href='#home'>
          <Logo color='#DADADA'></Logo>
        </a>
      </div>
      <div className={active}>
        <ul onClick={removeNavbar} className='navLists'>
          <li className='navItem'>
            <a href='#about' className='navLink'>
              <span className='headerNumber'>1.</span>About
            </a>
          </li>
          <li className='navItem'>
            <a href='#skills' className='navLink'>
              <span className='headerNumber'>2.</span>Skills
            </a>
          </li>
          <li className='navItem'>
            <a href='#projects' className='navLink'>
              <span className='headerNumber'>3.</span>Projects
            </a>
          </li>
          <li className='navItem'>
            <a href='#contact' className='navLink'>
              <span className='headerNumber'>4.</span>Contact
            </a>
          </li>
          <button className='btn'>
            <a href={pdf} download='Daniel Resume'>
              Resume
            </a>
          </button>
        </ul>

        <div onClick={removeNavbar} className='closeNavbar'>
          <AiFillCloseCircle className='icon' />
        </div>
      </div>
      <div onClick={showNavbar} className='toggleNavbar'>
        <TbGridDots className='icon' />
      </div>
    </header>
  );
};

export default Navbar;
