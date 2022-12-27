import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen  bg-background'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-highlight font-bold text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-primary'>David Cerdeira</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-highlight'>I'm a Frontend Developer</h2>
        <p className='text-tertiary py-4 max-w-[700px]'>My name is David, I'm a frontend developer based in Lisbon, Portugal. I have a passion for all things technology and design, from software engineering to UI/UX.</p>
        <div className='flex flex-row space-x-4'>
          {/* Button: Latest Projects */}
          <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
            <button className='text-white border-basic bg-basic group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-basic hover:text-basic'>Latest Projects </button>
          </Link>

          {/* Button: More About Me */}
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <button className='text-white border-highlight bg-highlight group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-highlight hover:text-highlight'>More About Me</button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Home
