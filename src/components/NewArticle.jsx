import React from 'react'

export const NewArticle = ( {title , text }) => {
  return (
    <article className='w-[230px] h-[240px] border-b-2 border-GrayishBlue py-7 last:border-0 '>
        <h2 className='cursor-pointer hover:text-SoftOrange text-[20px] mb-3
        font-bold '>{title}</h2>
        <p className='text-[14px] '>{text}</p>
    </article>
  )
}

