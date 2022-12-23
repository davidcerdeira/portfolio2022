import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-background flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/0523a94a-e164-4e1b-93b6-cca6ea56c74e" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>   
            <p className='text-4xl font-bold inline border-b-4 border-highlight text-basic'>Contact</p>
            <p className='text-basic  py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
        </div>
        <input className='bg-backgroundContact p-2 placeholder-white' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-backgroundContact placeholder-white' type="email" placeholder='Email' name='email' />
        <textarea className='bg-backgroundContact p-2 placeholder-white' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-basic border-basic  border-2 hover:bg-highlight hover:border-highlight hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
