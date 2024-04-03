import React from 'react'
import ReactDOM from 'react-dom/client';
import image1 from "../assets/img/imagerugby.jpg"
import image2 from "../assets/img/pexels-w-rugby-6373836.jpg"
import { Contacto } from '../pages/Contacto'
import { Link } from 'react-feather';
import { Navigate, useNavigate } from 'react-router-dom';


export const MainArticle = () => {

  const navigate = useNavigate();
  
  return (
    <section>
      <picture>
        <source srcSet={image1} media="(max-width: 640px)" />
        <source srcSet={image1} media="(min-width: 641px)" />
        <img src={image1} alt="image article" className='w-[300px] h-[150px] sm:w-[640px] sm:h-[500px] lg:w-[3200px] lg:h-[600px]' />
      </picture>
      <div className='sm:flex'>
        <div className='flex-1 py-5'>
          <h2 className='text-[20px] font-bold sm:text-[60px] leading-none'>Asociación de Rugby Profesional (A.R.Pro.) </h2>
        </div>
        <div className='flex-1 pt-5 mb-5'>
          <p className='text-[11px] mb-10 sm:text-[18px]'>El rugby, un deporte donde la diversidad es su esencia, abre sus puertas a todos los niños y jóvenes, sin distinción de género. 
          En cada posición del juego, las diferentes características físicas encuentran su lugar, 
          incluso permitiendo la versatilidad y adaptación de roles. Enfocados en la RECREACIÓN, el PASATIEMPO y la DIVERSIÓN, especialmente en los más jóvenes, 
          el rugby no solo busca entretener, sino también inculcar valores y metas concretas.

</p>
          <button onClick={()=> navigate('/contacto')} className='bg-SoftOrange w-[120px] h-[50px] sm:w-[180px] sm:h-[48px]  text-white 
          hover:bg-VeryDarkBlue rounded-full'>Contactanos</button>
        </div>
      </div>
    </section>
  )
}

