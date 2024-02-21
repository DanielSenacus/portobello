import React from "react";
import "./home.css";
import { TbArrowBigRightLines } from "react-icons/tb";
import { TbChevronsDown } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { AiFillLinkedin } from "react-icons/ai";

const Home = () => {
  return (
    <section id='home' className='home section'>
      <div className='leftIcons'>
        <div className='socials grid'>
          <a href='https://github.com/DanielSenacus' target='_blank'>
            <AiFillGithub className='icon' />
          </a>
          <a href='https://twitter.com/DSenacus' target='_blank'>
            <TbBrandTwitter className='icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/daniel-senacus-33722320a/'
            target='_blank'
          >
            {" "}
            <AiFillLinkedin className='icon' />
          </a>
          <div className='line'></div>
        </div>
      </div>

      <div className='container homeContent'>
        <span className='introText'>Hello there 👋 I´m,</span>
        <h1 className='title'>Daniel Senacus</h1>
        <span className='introText'>
          I Know That Good Design Means Good Business
        </span>
        <p className='homeParagraph'>Web Developer</p>

        <br />

        <div className='lowerHomeSection'>
          <button className='contactBtn '>
            <a className='flex' href='#contact'>
              Contact Me <TbArrowBigRightLines className='icon' />
            </a>
          </button>

          <div class='scrollDiv'>
            <a href='#about' className='flex'>
              {" "}
              <h6 class='scroll'>
                Scroll Down <TbChevronsDown className='icon' />
              </h6>
            </a>
          </div>
        </div>
      </div>

      <div className='rightEmail'>
        <div>
          <div className='emailAddress'>
            <a href='mailto:business@danielsenacus.com?subject=Job%20Inquiry'>
              business@danielsenacus.com
            </a>
          </div>
          <div className='line'></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
