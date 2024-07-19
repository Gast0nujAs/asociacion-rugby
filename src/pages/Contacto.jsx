import React from 'react'
import IconInfo from '../components/IconInfo'
import { IconMail } from '../assets/icons/IconMail'
import { IconPhone } from '../assets/icons/IconPhone'
import { Controller, useForm } from 'react-hook-form'
import { FormElement } from '../components/FormElement'
import axios from 'axios';
import { useState } from 'react';
export const Contacto = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fromData = {
      name,
      email,
      message
    };
    try {
      const response = await axios.post('https://arugbypro.com/submit.php', fromData, { responseType: 'json' , 
        headers: { 'Content-Type': 'application/json' }
       });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <div className='flex justify-center'
        style={{
          background: 'radial-gradient(circle, rgb(255, 187, 92)0%, rgb(0, 0, 0) 100%)',
          height: '250px',
        }}>

        <h1 className='text-5xl sm:text-7xl font-bold pt-12 text-white '>Contacto</h1>
      </div>
      <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
        <div className='rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6'>
          <div className='grid text-[12px] sm:text-[18px] grid-cols-2 gap-x-6 mb-12 mx-auto'>
            <IconInfo icon={<IconMail />} text="info@arugbypro.com" />
            <IconInfo icon={<IconPhone />} text="11-67698456" />
          </div>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-6 gap-x-4'>
            <div className='grid grid-cols-1 gap-y-6 gap-x-4 '>
              <label>Name:</label>
              <input
                className='h- 14 px-2 border-2'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='grid grid-cols-1 gap-y-6 gap-x-4 '>
              <label>Email:</label>
              <input
                
                type="email"
                className='h-14 px-2 border-2 rounded'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='grid grid-cols-1 gap-y-6 gap-x-4 '>
              <label>Message:</label>
              <textarea
                type="text"
                className='h-32 px-2 border-2 rounded'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
             rounded w-1/6 sm:w-1/4 w-full hover:cursor-pointer hover:opacity-90 hover:transition-120 inline-block'>
                Enviar
                </button>
          </form>

        </div>

      </div>
    </div>
  );

}