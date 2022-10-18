import React from 'react';

import { FieldValues, useForm } from 'react-hook-form';

import { emailApi } from '../../api';
import { EmailResponse, Message } from '../../interfaces';


const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Send email on submit calling the backend API
  const onSubmit = async(values: FieldValues) => {
    const { username, email, text} = values as Message;
    
    const { data } = await emailApi.post<EmailResponse>('/sendEmail', {
      username,
      email,
      text,
    });

    console.log(data);
  }

  return (
    <div className='grid grid-cols-2 bg-sizzling-red h-screen p-8'> {/* Presentation <Div> */}
        
      {/* Message and presentation card */}
      <div className='grid grid-row columns-1 p-5 space-y-10'> 
        
        {/* Entry Message */}
        <div className='flex items-center justify-center'>
          <p className='text-5xl text-center text-white'>
            <span className='text-8xl text-cerulean-blue inline-block align-baseline'>Contact </span> Me
          </p>
        </div>
        
      </div>

      <div className='grid columns-1 p-5 flex items-center'>

        {/* TODO: Contact form */}
        <form onSubmit={ handleSubmit(onSubmit) } id='contact-form' className='flex grid justify-items-center'>
          <div className='w-full my-4'>
            <label className='text-white pl-2'>Full name</label>
            <input
              {...register("username")}
              type='text'
              placeholder='Full Name'  
              className='rounded-xl px-5 py-2 w-full h-fit bg-grey-coal text-white'
            />
          </div>
          
          <div className='w-full my-4'>
            <label className='text-white pl-2'>Email</label>
            <input
              {...register("email")}
              type='text'
              placeholder='Email'  
              className='rounded-xl px-5 py-2 w-full bg-grey-coal text-white'
            />
          </div>
          
          <div className='w-full my-4'>
            <label className='text-white pl-2'>Message</label>
            <textarea
              {...register("message")}
              cols={10}
              rows={10}
              className='rounded-xl px-5 py-2 w-full h-fit border-cerulean-blue bg-grey-coal text-white'
              placeholder='Write a message here to send...'
            />
          </div>
        
          <button type='submit' className="px-5 py-1 text-lg h-fit w-fit text-cerulean-blue font-semibold rounded-full border hover:text-white hover:bg-cerulean-blue hover:border-black mt-2 duration-300 focus:outline-none focus:ring focus:ring-white">Send Message</button>
        </form>


      </div>
    </div>
  );
}

export default ContactPage;
