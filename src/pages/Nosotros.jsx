import React from 'react'
import nosotrosLogo from "../assets/logo-arpro/arpro-Logo5.jpeg"
import { NosotrosComponent } from '../components/NosotrosComponent'
import { CarouselAsos } from '../components/CarouselAsos';
export const Nosotros = () => {
  return (

    <div>
      <div className='text-center text-[18px] font-bold sm:text-[50px] sm:mb-7 font-sans cursor-pointer text-Oro'>
        <h1>Acerca de ARPRO (Asociacion de Rugby Profesional)</h1>
      </div>

      <div className='flex'>



        <div className='px-4 mt-10'>
          <h2 className='text-[14px] sm:text-[20px] font-bold '>La Asociación de Rugby Profesional (A.R.Pro.)</h2>
          <text className=' text-[11px] text-VeryDarkBlue sm:text-[18px] font-sans font-bold '>


            <p className=''>
              Con Registro de Inscripción Aprobado en IPJ Córdoba desde 30 de Marzo de 2023 como institución deportiva autárquica,
              ha concebido el Programa Club Alto Rendimiento. Esta iniciativa se posiciona como un modelo de
              avanzada estratégica y de excelencia dedicado al desarrollo integral de deportistas a través del
              rugby, fusionando de manera sinérgica lo deportivo con lo académico y
              respaldado por profesionales especializados en cada área.

            </p>
            <p className='mt-4 '>

              Para ello, a través del sistema de Franquicia, trabajaremos con las instituciones y/o clubes deportivos,
              que necesiten desarrollar el Proyecto en sus estructuras, conviniendo un trabajo coordinad
              o entre los participantes y la ARPro.
            </p>
            <p className='mt-4 '>

              Colaboraremos estrechamente con instituciones deportivas de todos los niveles,
              brindando asesoramiento para fortalecer su estructura deportiva y social.
              Buscamos ser un espacio donde cada deportista, independientemente de su origen o nivel,
              encuentre los pilares fundamentales para su desarrollo profesional.

            </p>
            <p className='mt-4'>
              Cada club que se una al Programa Club Alto Rendimiento debe estar comprometido a ofrecer
              todas las herramientas esenciales,
              garantizando a sus miembros, deportistas y la comunidad en general,
              un entorno de derecho que fomente su formación y desarrollo
              deportivo.
            </p>
            <p className='mt-4'>
              Nuestra visión en A.R.Pro. es ser la fuerza motriz que impulse el desarrollo del rugby profesional
              en Latinoamérica. Trabajaremos en estrecha colaboración con los clubes, asociaciones, uniones y
              federaciones de rugby que, por su propia elección, se afilien a este movimiento.
            </p>
            <p className='mt-4'>

            </p>
            <p className='mt-4'>

            </p>
          </text>


        </div>
        <picture>
          <img src={nosotrosLogo} alt="image article" className='hidden sm:block sm:w-[1900px] sm:h-[600px]  mb-6 p-2' />
        </picture>
       
      </div>
      <div>
        <h1 className='text-[18px] sm:text-[30px] font-bold mb-5 text-center bg-VeryDarkBlue text-white rounded-3xl 
            cursor-pointer py-2 '>Estructura General del Programa</h1>
      </div>
      
      <div className='bg-back-image bg-cover bg-center rounded-3xl border-2'>
      <cards className='sm:flex sm:justify-center sm:space-x-40  sm:py-10  sm:px-10'>
        <NosotrosComponent
          title="Área de Capacitación Institucional"
          text="ARPro. busca asegurar que las instituciones deportivas afiliadas cumplan con los requisitos legales y administrativos 
        necesarios para un funcionamiento adecuado."
        />
        <NosotrosComponent
          title="Área de Capacitación Deportiva"
          text="El enfoque en esta área es fundamental para el desarrollo integral de los deportistas. 
        El objetivo principal es garantizar que las instituciones afiliadas cuenten con la capacitación
         necesaria para establecer un Área de Alto Rendimiento destinada a sus deportistas.
          "
        />
        <NosotrosComponent
          title="Área de Capacitación Comercial"
          text="Esta área se enfoca en el diseño y ejecución de estrategias destinadas a atraer inversiones y 
        recursos que respalden el crecimiento y sostenibilidad de cada institución que requiera este tipo
        de asesoramiento. "
        />
        <NosotrosComponent
          title="Área de Capacitación Profesional"
          text="Se dirige a proporcionar a los deportistas un desarrollo integral que abarque no solo su preparación física 
        y habilidades deportivas, sino también su crecimiento intelectual y social.
        "
        />
        </cards> 
        
        <CarouselAsos/>
        
      </div>
     

        
          
      
      
    </div>
  )
}

