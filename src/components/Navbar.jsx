import React from 'react'
import menuBurguer from '../assets/img/menuBurguer.png'
const Navbar = () => {
    return (

        <>
            <ul className='hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-4
     sm:items-center '>
                <li>
                    <a href="/" className='hover:text-SoftOrange sm:hover:text-[20px] hover:transition:100 inline-block'>Home</a>
                </li>
               
                <li>
                    <a href="/sobre-nosotros" className='hover:text-SoftOrange sm:hover:text-[20px] hover:transition:100 inline-block'>Nosotros</a>
                </li>
                <li>
                    <a href="/contacto" className='hover:text-SoftOrange sm:hover:text-[20px] hover:transition:100 inline-block'>Contacto</a>
                </li>
            </ul>
            <img className='w-10 h-4 sm:hidden cursor-pointer' src={menuBurguer} alt='menu'/>

        </>

    )
}

export default Navbar;