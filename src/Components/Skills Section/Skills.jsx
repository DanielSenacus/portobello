import React from "react";
import "./skill.css";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { SiAdobephotoshop } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";
import {
  SiMysql,
  SiCsharp,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiAdobeillustrator,
  SiBlender,
  SiPython,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id='skills' className='skills container section'>
      <div class='sectionTitle'>
        <span class='titleNumber'>02 . </span>
        <h5 class='titleText'>
          Skills{" "}
          <div class='underline'>
            <span></span>
          </div>
        </h5>
      </div>

      {/* skillContainer */}
      <div className='skillsContainer grid'>
        {/* single Group of skills */}
        <div className='skillGroup'>
          <div className='groupTitle'>
            <h2 className='title'>Web Development</h2>
            <span className='subTitle'>3 Years Experience</span>
          </div>
          <div className='generalSkills'>
            {/* Single skill div */}
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <TbBrandReactNative className='icon' />
              </div>
              <span className='skillName'>React</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <IoLogoJavascript className='icon' />
              </div>
              <span className='skillName'>JavaScript</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <IoLogoSass className='icon' />
              </div>
              <span className='skillName'>Sass</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <SiCss3 className='icon' />
              </div>
              <span className='skillName'>CSS</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <FaHtml5 className='icon' />
              </div>
              <span className='skillName'>HTML</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <SiPython className='icon' />
              </div>
              <span className='skillName'>Python</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <SiCsharp className='icon' />
              </div>
              <span className='skillName'>C#</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <SiNodedotjs className='icon' />
              </div>
              <span className='skillName'>Node JS</span>
            </div>
          </div>
        </div>

        {/* single Group of skills */}
        <div className='skillGroup'>
          <div className='groupTitle'>
            <h2 className='title'>UI/UX Design</h2>
            <span className='subTitle'>2 Years Experience</span>
          </div>
          <div className='generalSkills'>
            {/* Single skill div */}
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <CgFigma className='icon' />
              </div>
              <span className='skillName'>Figma</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <SiAdobeillustrator className='icon' />
              </div>
              <span className='skillName'>Ilustrator</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <SiAdobephotoshop className='icon' />
              </div>
              <span className='skillName'>Photoshop</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <SiBlender className='icon' />
              </div>
              <span className='skillName'>Blender</span>
            </div>
          </div>
        </div>

        {/* single Group of skills */}
        <div className='skillGroup'>
          <div className='groupTitle'>
            <h2 className='title'>Other Skills</h2>
            <span className='subTitle'>2 Years Experience</span>
          </div>
          <div className='generalSkills'>
            {/* Single skill div */}
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <FaGitSquare className='icon' />
              </div>
              <span className='skillName'>Git</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <AiOutlineGithub className='icon' />
              </div>
              <span className='skillName'>Github</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <BsWordpress className='icon' />
              </div>
              <span className='skillName'>Wordpress</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <SiMysql className='icon' />
              </div>
              <span className='skillName'>MySQL</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <SiPostgresql className='icon' />
              </div>
              <span className='skillName'>Postgres</span>
            </div>
            <div className='singleSkill'>
              <div className='iconBox flex'>
                <SiDocker className='icon' />
              </div>
              <span className='skillName'>Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
