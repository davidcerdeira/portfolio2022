import React, { useState, useRef } from 'react'

const Contact = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleChangeNameInput = event => {
    setNameInput(event.target.value);
  }

  const handleChangeEmailInput = event => {
    setEmailInput(event.target.value);
  }

  const handleChangeMessageInput = event => {
    setMessageInput(event.target.value);
  }

  const handleSubmit = event => {
    if(nameInput.trim().length !== 0 && emailInput.trim().length !== 0 && messageInput.trim().length !== 0){
      setNameError(false)
      setEmailError(false)
      setMessageError(false)
      nameRef.current.value = '';
      emailRef.current.value = '';
      messageRef.current.value = '';
      return true;
    }

    if (nameInput.trim().length == 0) {
      setNameError(true);
    }

    if (emailInput.trim().length == 0) {
      setEmailError(true);
    }

    if (messageInput.trim().length == 0) {
      setMessageError(true);
    }

    event.preventDefault();
  };

  return (
    <div name='contact' className='w-full h-screen bg-background flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} method='POST' action="https://getform.io/f/0523a94a-e164-4e1b-93b6-cca6ea56c74e"  className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>   
            <p className='text-4xl font-bold inline border-b-4 border-blue text-basic'>Contact</p>
            <p className='text-basic  py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
        </div>
        <input className='bg-blue p-2 placeholder-white' type="text" placeholder='Name' name='name' onChange={handleChangeNameInput} ref={nameRef}/>
        {nameError && nameInput.length<= 0 ? <label className='text-red-600'>Name field can't be empty.</label> : ''}
        <input className='mt-4 p-2 bg-blue placeholder-white' type="email" placeholder='Email' name='email' onChange={handleChangeEmailInput} ref={emailRef}/>
        {emailError && emailInput.length<= 0 ? <label className='text-red-600'>Email field can't be empty.</label> : '' }
        <textarea className='mt-4 bg-blue p-2 placeholder-white' name='message' rows='10' placeholder='Message' onChange={handleChangeMessageInput} ref={messageRef}></textarea>
        {messageError && messageInput.length<= 0 ? <label className='text-red-600'>Message field can't be empty.</label> : '' }
        <button className='text-blue border-blue  border-2 hover:bg-blue hover:border-blue hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
