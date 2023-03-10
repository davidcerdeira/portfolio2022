import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import RealEstate from '../assets/projects/realestate.jpg'
import NetflixImg from '../assets/projects/netflix.png'

import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

  return (
    <div name='projects' className='w-full md:h-screen text-basic bg-background'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-basic border-resume'>{t('Projects.title')}</p>
            <p className='py-6'>{t('Projects.subtitle')}</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* grid item */}
            <div 
               style={{backgroundImage: `url(${WorkImg})`}} 
               className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="home">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="home">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* grid item */}
            <div 
               style={{backgroundImage: `url(${RealEstate})`}} 
               className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    It's Free Real Estate
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="home">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="home">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* grid item */}
            <div 
               style={{backgroundImage: `url(${NetflixImg})`}} 
               className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    Netflix Clone
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="home">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="home">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Projects
