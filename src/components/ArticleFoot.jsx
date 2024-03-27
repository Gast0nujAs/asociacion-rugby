import React from 'react';
import imgP from "../assets/img/pexels-w-rugby-6373836.jpg"

export const ArticleFoot = ( {image, title, text}) => {
  return (
    <article className='flex h-[162px] items-center mb-5'>
        <div className='w-[450px]'>
            <img src={image} alt='img' className='rounded-[10px] border-b-[5px] border-VeryDarkBlue'/>
        </div>
        <div className='pl-6'>
            <h2 className='text-[20px] font-bold mb-4 hover:text-SoftOrange cursor-pointer'>{title}</h2>
            <p className='text-VeryDarkBlue text-[13px] '>{text}</p>

        </div>
    </article>
  )
}

