import React from 'react';

import { FieldValues, useForm } from 'react-hook-form';

import { emailApi } from '../../api';

import { Button, Input, TextArea } from '../../components/common';
import { EmailResponse, Message } from '../../interfaces';


const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Send email on submit calling the backend API
  const onSubmit = async(values: FieldValues) => {
    const { username, email, content } = values as Message;
    
    const { data } = await emailApi.post<EmailResponse>('/sendEmail', {
      username,
      email,
      content,
    });

    console.log(data);
  }

  return (
    <div className='grid sm:grid-cols-2 sm:h-screen h-fit p-8'> {/* Presentation <Div> */}
        
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

          <Input
            type='text'
            placeholder='Full name'
            label='Full name'
            {...register("username")}
          />
          
          <Input
            type='text'
            placeholder='Email'
            label='Email'
            {...register("email")}
          />
          
          <TextArea
            label='Message'
            placeholder='Write your message...'
            cols={10}
            rows={5}
            {...register("content")}
          />
        
          <Button
            type='submit'
          >
            Send Message
          </Button>
        </form>


      </div>
    </div>
  );
}

export default ContactPage;
