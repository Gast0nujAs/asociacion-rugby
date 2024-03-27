import React from 'react'
import nosotrosLogo from "../assets/logo-arpro/arpro-Logo5.jpeg"
import { NosotrosComponent } from '../components/NosotrosComponent'
import { CarouselAsos } from '../components/CarouselAsos';
export const Nosotros = () => {
  return (

    <div>
      <div className='text-center text-[30px] font-bold sm:text-[60px] sm:mb-7 font-sans cursor-pointer text-Oro'>
        <h1>Acerca de ARPRO (Asociacion de Rugby Profesional)</h1>
      </div>

      <div className='flex'>



        <div className='px-4 mt-10'>
          <h2 className='text-[20px] font-bold '>La Asociación de Rugby Profesional (A.R.Pro.)</h2>
          <text className=' text-[14px] text-VeryDarkBlue sm:text-[18px] font-sans font-bold '>


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
          <img src={nosotrosLogo} alt="image article" className='w-[1900px] h-[600px]  mb-6 p-2' />
        </picture>
       
      </div>
      <div>
        <h1 className='text-[30px] font-bold mb-5 text-center bg-VeryDarkBlue text-white rounded-3xl 
            cursor-pointer py-2 '>Estructura General del Programa</h1>
      </div>
      
      <div className='bg-back-image bg-cover bg-center rounded-3xl border-2'>
      <cards className='flex  justify-center space-x-40  py-10  px-10'>
        <NosotrosComponent
          title="Área de Capacitación Institucional"
          text="ARPro. busca asegurar que las instituciones deportivas afiliadas cumplan con los requisitos legales y administrativos 
        necesarios para un funcionamiento adecuado. En este caso, ARPro y la institución afiliada, 
        a pedido de esta, se enfocará en proporcionar apoyo profesional en temas legales, contables y 
        administrativos para lograr la consolidación y correcta administración, de ser necesario."
        />
        <NosotrosComponent
          title="Área de Capacitación Deportiva"
          text="El enfoque en esta área es fundamental para el desarrollo integral de los deportistas. 
        El objetivo principal es garantizar que las instituciones afiliadas cuenten con la capacitación
         necesaria para establecer un Área de Alto Rendimiento destinada a sus deportistas.
          ARPro brindará asesoramiento, acompañamiento y herramientas estratégicas para obtener recursos, 
          establecer metas claras y estructurar un entorno propicio para el alto rendimiento deportivo"
        />
        <NosotrosComponent
          title="Área de Capacitación Comercial"
          text="Esta área se enfoca en el diseño y ejecución de estrategias destinadas a atraer inversiones y 
        recursos que respalden el crecimiento y sostenibilidad de cada institución que requiera este tipo
        de asesoramiento. ARPro dentro de sus objetivos, es optimizar la capacidad del
        Proyecto Club Alto Rendimiento, para asegurar que los clubes o instituciones deportivas 
        que lo requieran, logren tener herramientas de gestión para el financiamiento y apoyo, 
        tanto a corto como a largo plazo, a través de prácticas comerciales efectivas."
        />
        <NosotrosComponent
          title="Área de Capacitación Profesional"
          text="Se dirige a proporcionar a los deportistas un desarrollo integral que abarque no solo su preparación física 
        y habilidades deportivas, sino también su crecimiento intelectual y social.
        Esto involucra programas educativos que pueden incluir talleres sobre gestión emocional, liderazgo, habilidades de comunicación, 
        así como la promoción de la educación continua. Se busca crear un entorno que fomente un equilibrio entre 
        la preparación física para el deporte y el desarrollo intelectual para enfrentar desafíos tanto dentro como fuera del campo de juego."
        />
        </cards> 
        
        <CarouselAsos/>
        
      </div>
     

        
          
      
      
    </div>
  )
}

