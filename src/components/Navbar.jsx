import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-background text-basic'>
        <div>
             {/** <img src={Logo} alt="Logo Image" style={{width: '50px'}}></img>*/}
             <p className='text-2xl font-bold'>DAVID CERDEIRA</p>
        </div>
        
        {/* menu */}
        <ul className='hidden md:flex text-basic'>
            <li>
                <Link to="home" spy={true} smooth={true} duration={500}>Home</Link>
            </li>
            <li>
                <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
            </li>
            <li>
                <Link to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
            </li>
            <li>
                <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-background flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-linkedin'>
                    <a className='flex justify-between items-center w-full text-white' href="/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-github'>
                    <a className='flex justify-between items-center w-full text-white' href="/">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-email'>
                    <a className='flex justify-between items-center w-full text-white' href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-resume'>
                    <a className='flex justify-between items-center w-full text-white' href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
