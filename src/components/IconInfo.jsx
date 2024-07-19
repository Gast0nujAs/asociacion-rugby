import React from 'react'

const IconInfo = ({text, icon}) => {
  return (
    <div className='text-center mx-auto'>
        {icon}
        <h6 className='font-medium '>{text}</h6>
    </div>
  )
}

export default IconInfo