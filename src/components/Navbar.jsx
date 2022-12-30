import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { t } = useTranslation();

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const onButtonClick = () => {
    fetch("DavidCerdeiraResume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "DavidCerdeiraResume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-background text-basic'>
      <div>
        {/** <img src={Logo} alt="Logo Image" style={{width: '50px'}}></img>*/}
        <p className='text-2xl font-bold'>DAVID CERDEIRA</p>
      </div>

      {/* menu */}
      <ul className='hidden md:flex text-basic'>
        <li>
          <Link to='home' spy={true} smooth={true} duration={500}>
            {t("NavBar.menuOption1")}
          </Link>
        </li>
        <li>
          <Link to='about' spy={true} smooth={true} duration={500}>
            {t("NavBar.menuOption2")}
          </Link>
        </li>
        <li>
          <Link to='projects' spy={true} smooth={true} duration={500}>
            {t("NavBar.menuOption3")}
          </Link>
        </li>
        <li>
          <Link to='contact' spy={true} smooth={true} duration={500}>
            {t("NavBar.menuOption4")}
          </Link>
        </li>
        <Dropdown />
      </ul>

      {/* hamburger */}
      <div className='md:hidden z-10'>
        <div className='absolute top-7 right-10'>
          {!nav ? <Dropdown nav={!nav} /> : ''}
        </div>
        <div onClick={handleClick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-background flex flex-col justify-center items-center"
        }
      >
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to='home'
            spy={true}
            smooth={true}
            duration={500}
          >
            {t("NavBar.menuOption1")}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to='about'
            spy={true}
            smooth={true}
            duration={500}
          >
            {t("NavBar.menuOption2")}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to='projects'
            spy={true}
            smooth={true}
            duration={500}
          >
            {t("NavBar.menuOption3")}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
          >
            {t("NavBar.menuOption4")}
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-github'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://github.com/realhackerdavid'
              target='_blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-email'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='mailto:davidrocerdeira@gmail.com'
            >
              {t("Social.email")} <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-resume'>
            <a
              className='flex justify-between items-center w-full text-white'
              onClick={onButtonClick}
            >
              {t("Social.resume")} <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://www.linkedin.com/in/david-cerdeira/'
              target='_blank'
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
