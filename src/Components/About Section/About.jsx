import React from "react";
import "./about.css";
import img from "../../Assets/profile.png";
import { VscCloudDownload } from "react-icons/vsc";
// import cvv from '../../Assets/FRONTEND DEVELOPER.pdf'

const About = () => {
  return (
    <section id='about' className='about section container'>
      <div class='sectionTitle'>
        <span class='titleNumber'>01 . </span>
        <h5 class='titleText'>
          About Me{" "}
          <div class='underline'>
            <span></span>
          </div>
        </h5>
      </div>

      <div className='sectionContent grid'>
        <div className='textSection'>
          <h4>
            I'm a professional front-end developer with 3 years of experience
            building fantastic UX experiences with good design core
            fundamentals.
            <br />
            My focus is to combine creative thinking and design with an
            analytical approach to solve problems at the intersection of
            business and technology.
            <br />I work great in teams and can be counted on to consistently
            deliver products above expectations.
          </h4>

          {/* <div className='aboutBtn'>
            <a className='flex' href='Dimas UML.docx' download='Dimas UML.docx'>
              Download CV <VscCloudDownload />
            </a>
          </div> */}
        </div>
        <div className='aboutImgDiv'>
          <img className='aboutImg' src={img} alt='Israel Image' />
        </div>
      </div>
    </section>
  );
};

export default About;
