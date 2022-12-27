import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-background text-basic'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-email'>About</p>
                </div>
                <div>
                </div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm David, nice to meet you. Take a look around.</p>
                </div>
                <div>
                    <p className='mb-2'>I'm a front-end developer and I enjoy building beautiful, simple and aesthetic designs. I'm also very interested in video games and mobile apps.</p>
                    <p>If I'm not coding, you will find me learning languages, playing piano, working out or travelling around the world.</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default About
