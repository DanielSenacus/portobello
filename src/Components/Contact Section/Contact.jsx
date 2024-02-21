import React, { useRef } from "react";
import "./contact.css";
import { BsInstagram } from "react-icons/bs";
import { TbArrowBigRightLine } from "react-icons/tb";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
// import {RiMessengerLine} from 'react-icons/ri'
import emailjs from "emailjs-com";

// form.current,
//       "2FDb7VyuxniZlBgCg"

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm("service_u7g7u8r", "template_8uaxfhj", this);
    e.target.reset();
  };

  return (
    <section id='contact' className='contact container section'>
      <div class='sectionTitle'>
        <span class='titleNumber'>04 . </span>
        <h5 class='titleText'>
          Contact{" "}
          <div class='underline'>
            <span></span>
          </div>
        </h5>
      </div>

      <div className='contactContainer grid'>
        <div className='socialContacts grid'>
          <h3>Talk to me</h3>

          <div className='cards grid'>
            <div className='card'>
              <div>
                <BsInstagram className='icon instaIcon' />
              </div>
              <h4>Instagram</h4>
              <span className='userName'>@im_daniels69</span>

              <div>
                <a
                  className='flex'
                  href='https://www.instagram.com/im_daniels69/'
                  target='_blank'
                >
                  Send Message <TbArrowBigRightLine className='icon' />
                </a>
              </div>
            </div>

            <div className='card'>
              <div>
                <AiFillLinkedin className='icon instaIcon' />
              </div>
              <h4>LinkedIn</h4>
              <span className='userName'>@Daniel_Senacus</span>

              <div>
                <a
                  className='flex'
                  href='https://www.linkedin.com/in/daniel-senacus-33722320a/'
                  target='_blank'
                >
                  Send Message <TbArrowBigRightLine className='icon' />
                </a>
              </div>
            </div>
            <div className='card'>
              <div>
                <AiOutlineTwitter className='icon instaIcon' />
              </div>
              <h4>Twitter</h4>
              <span className='userName'>@DSenacus</span>

              <div>
                <a
                  className='flex'
                  href='https://twitter.com/DSenacus'
                  target='_blank'
                >
                  Send Message <TbArrowBigRightLine className='icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='form grid'>
          <h3>Send me an email</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type='text'
              placeholder='Enter your Name'
              name='name'
              required
            />
            <input
              type='email'
              placeholder='Enter Your Email'
              name='email'
              required
            />
            <textarea
              name='message'
              placeholder='Enter your message'
            ></textarea>
            <button className='formBtn' type='submit' name='submit'>
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
