import React, { useState } from "react";
import "./project.css";
import { AiFillYoutube } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import img from "../../Assets/web_4.png";
import img2 from "../../Assets/web_5.png";
import img3 from "../../Assets/web_6.png";
import img6 from "../../Assets/web_1.png";
import img8 from "../../Assets/web_3.png";
import img9 from "../../Assets/web_2.png";

const data = [
  {
    id: 1,
    image: img6,
    liveLink: "https://grand-tulumba-f60a0c.netlify.app",
    github: "https://github.com/DanielSenacus",
    title: "Milkshake",
    desc: "This is an mockup for a shakes company. ",
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript",
  },

  {
    id: 2,
    image: img9,
    liveLink: "https://playful-taiyaki-2d785b.netlify.app",
    github: "https://github.com/DanielSenacus",
    title: "Cartagena Travel App",
    desc: "Frontend application that helps the user to book the dream vacation thought south america.",
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 3,
    image: img8,
    liveLink: "https://gilded-jelly-853ff7.netlify.app/",
    github: "https://github.com/DanielSenacus",
    title: "Tasty App",
    desc: "A restaurant landing page where it showcase all his app features",
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript (DOM)",
  },
  {
    id: 4,
    image: img,
    liveLink: "https://silver-paletas-edf982.netlify.app/",
    github: "https://github.com/DanielSenacus",
    title: "Joyas Maggia Shop",
    desc: "This is a client frontend project showcasing an former company of mine.",
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 5,
    image: img2,
    liveLink: "https://starlit-daffodil-936aee.netlify.app/",
    github: "https://github.com/DanielSenacus",
    title: "Dashboard mockup",
    desc: "A personal project for get a fast dashboard template as a handly template.",
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 6,
    image: img3,
    liveLink: "https://app.netlify.com/sites/hopeful-hermann-abdc17/overview",
    github: "https://github.com/DanielSenacus",
    title: "Marvel API Dashboard",
    desc: "A personal project to fecth the Marvel Developer API with custom query search.",
    tech1: "Html",
    tech2: "PHP",
    tech3: "JavaScript",
  },
  // {
  //   id: 7,
  //   image: img4,
  //   liveLink: "https://israeldeliverywebsite.netlify.app",
  //   github: "https://github.com/IsraelAbaho/respnsive-delivery-website",
  //   title: "Online Delivery Website",
  //   desc: "A frontend freelance project for a local business in Dubai. This website majorly displays business services and contact information.",
  //   tech1: "Html",
  //   tech2: "CSS",
  //   tech3: "JavaScript",
  // },
  // {
  //   id: 8,
  //   image: img5,
  //   github: "",
  //   title: "Restaurant Menu (Web App)",
  //   desc: "This is a freelance full stack project. Users are able to order and receive services based off their orders through the application.",
  //   tech1: "Html",
  //   tech2: "CSS",
  //   tech3: "JavaScript",
  //   tech4: "PHP",
  // },

  // {
  //   id: 9,
  //   image: img7,
  //   liveLink: "https://soccerleaguewebs.netlify.app/",
  //   github: "https://github.com/IsraelAbaho/Soccer-League-Website",
  //   title: "Soccer Management System",
  //   desc: "Multi-page Soccer League Management System that stores and displays all the league data and ongoing season record tracking.",
  //   tech1: "Html",
  //   tech2: "CSS",
  //   tech3: "JavaScript",
  // },
];

const Project = () => {
  return (
    <section id='projects' className='projects container section'>
      <div class='sectionTitle'>
        <span class='titleNumber'>03 . </span>
        <h5 class='titleText'>
          Projects{" "}
          <div class='underline'>
            <span></span>
          </div>
        </h5>
      </div>

      <div className='projectContainer grid'>
        {data.map(
          ({
            id,
            github,
            image,
            liveLink,
            desc,
            title,
            tech1,
            tech2,
            tech3,
            tech4,
          }) => {
            return (
              <div key={id} className='singleProject'>
                <div className='externalLinks flex'>
                  <div className='githubIcon'>
                    <a href={github} target='_blank'>
                      <FiGithub className='icon' />
                    </a>
                  </div>
                </div>

                <div className='imgDiv'>
                  <a href={liveLink} target='_blank'>
                    <img src={image} alt={title} />
                  </a>
                </div>
                <div className='projectTitle'>
                  <h3>{title}</h3>
                </div>
                <div className='desc'>{desc}</div>
                <div className='technologies flex'>
                  <small> {tech1} </small>
                  <small> {tech2} </small>
                  <small> {tech3} </small>
                  <small> {tech4} </small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Project;
