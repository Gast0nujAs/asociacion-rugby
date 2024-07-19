import React from 'react'
import menuBurguer from '../assets/img/menuBurguer.png'
import { useNavigate, Navigate } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {

    const [open, setOpen] = useState(false);
    const handleClick = () => {

        setOpen(!open)
    }

    const navigate = useNavigate();

   
    

    return (

        <>
            <ul className= {`${open ? "flex" : "hidden"}  bg-white w-[100%] h-[200px] flex-col items-center place-content-around mx-auto
            
            
                sm:flex sm:flex-row text-black text-[18px] sm:w-[438px] sm:place-content-around sm:text-4
                sm:items-center sm:gap-10 sm:mx-[20px]`}>
                <li>
                    <a href="/" className='hover:text-SoftOrange sm:hover:text-[20px] '>Home</a>
                </li>
               
                <li>
                    <a onClick={() => navigate('/sobre-nosotros')} className='hover:text-SoftOrange sm:hover:text-[20px] hover:cursor-pointer'>Nosotros</a>
                </li>
                <li>
                    <a onClick={() => navigate('/contacto')}  className='hover:text-SoftOrange sm:hover:text-[20px] hover:cursor-pointer'>Contacto</a>
                </li>
            </ul>
            <img className='w-10 h-4 sm:hidden cursor-pointer' src={menuBurguer} alt='menu' onClick={handleClick}/>

        </>

    )
}

export default Navbar;