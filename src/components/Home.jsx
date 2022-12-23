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
        <p className='text-tertiary py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum </p>
        <div className='flex flex-row space-x-4'>
          <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
            <button className='text-basic group border-2 px-6 py-3 my-2 flex items-center hover:bg-highlight hover:border-highlight'>Latest Projects 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/> 
                </span>
            </button>
            </Link>

            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <button className='text-basic group border-2 px-6 py-3 my-2 flex items-center hover:bg-highlight hover:border-highlight'>More About Me
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/> 
                </span>
            </button>
            </Link>
        </div>

      </div>

    </div>
  )
}

export default Home
