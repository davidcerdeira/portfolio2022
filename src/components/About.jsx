import React, {useEffect, useState} from 'react'

import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

  return (
    <div name='about' className='w-full h-screen bg-background text-basic'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-email'>{t('About.title')}</p>
                </div>
                <div>
                </div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>{t('About.greeting')}</p>
                </div>
                <div>
                    <p className='mb-4'>{t('About.contentTop')}</p>
                    <p>{t('About.contentBot')}</p>
                    <div className='flex flex-row space-x-4 mt-4'>
                        <p className='font-bold'>Skills:</p>
                        <p className='bg-gray-200 px-1 rounded'>React</p>
                        <p className='bg-gray-200 px-1 rounded'>JavaScript</p>
                        <p className='bg-gray-200 px-1 rounded'>GraphQl</p>
                        {windowSize.innerWidth >= 731  ? <p className='bg-gray-200 px-1 rounded'>C#</p> : ''}
                        {windowSize.innerWidth >= 841 ? <p className='bg-gray-200 px-1 rounded'>Java</p> : ''}
                    </div>
                    <div className='flex flex-row space-x-4 mt-2'>
                    {windowSize.innerWidth <= 731 ? <p className='bg-gray-200 px-1 rounded'>C#</p> : ''}
                    {windowSize.innerWidth <= 841 ? <p className='bg-gray-200 px-1 rounded'>Java</p> : ''}
                        <p className='bg-gray-200 px-1 rounded'>CSS</p>
                        <p className='bg-gray-200 px-1 rounded'>HTML</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export default About
