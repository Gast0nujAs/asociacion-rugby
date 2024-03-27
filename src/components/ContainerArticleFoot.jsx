import React from 'react'
import { ArticleFoot } from './ArticleFoot'
import im1 from "../assets/img/22a.jpg"
import im2 from "../assets/img/coaching.jpg"
import im3 from "../assets/img/poder3.jpg"

export const ContainerArticleFoot = () => {
  return (
    <section className='mt-10 sm:flex sm:gap-5 '>
        <ArticleFoot
            image={im2}
            title="Coaching"
            text="Ofrecer un acompañamiento integral, no solo en términos de habilidades deportivas, 
            sino también hacia la adopción y el fortalecimiento de valores y competencias esenciales"
        />
        <ArticleFoot 
            image={im1}
            title="Progresos"
            text="Buscamos garantizar que cada acción individual y colectiva tanto de los deportistas 
            como las instituciones afiliadas, esté alineada con objetivos netamente deportivos."
        />
        <ArticleFoot 
            image={im3}
            title="Empoderamiento"
            text="Brindar herramientas y oportunidades que permitan a los participantes tomar el control de su crecimiento. 
            Más que un simple apoyo, se trata de capacitar a los involucrados"
        />
    </section>
    
  )
}

