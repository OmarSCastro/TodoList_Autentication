import React from 'react'
import { Image } from 'primereact/image';
import { Container } from '../../components/Container/Container'

export const AboutUsPage = () => {
  return (
     <Container>
          <p className='border-white border-2 text-center text-3xl font-semibold' >Información General</p>
         <div className='flex justify-content-center'>
          <div className='flex justify-content-center  justify-content-between align-items-center'>
            <p className='text-xl pl-3'>
              Este proyecto se realiza con la finalidad de poder apoyar al personal docente del
              Instituto Politécnico Nacional en la nueva modalidad de las clases a distancia.
              En donde damos a conocer las mejores tecnologías y/o herramientas más óptimas para
              poder impartir sus clases y gestionar el avance y tareas de sus alumnos
              <br /><br />
              Añadimos videos explicativos para la mejor comprensión del personal y la manera 
              mas interactiva posible de la información del aplicativo y sus diferentes usos y funciones
            </p>
          </div>
            <Image src="https://onceninasyninos.tv/wp-content/uploads/2018/04/Banner-logos-ipn-e1523046221576.png" width="400"  alt="Image Text" />
         </div>

         <p className='border-white border-2 text-center text-3xl font-semibold'>Equipo de Trabajo</p>
         <div>

          <div>
          <Image src="../../assets/Ivan.jpeg" alt="Image" width="250" />


          </div>

         </div>
     </Container>
  )
}

/* Flores Gervacio Luis Andres - 2015140232

Hernández Moreno Arturo - 2019601953

Herrera Rivera Ivan - 2019601766

Sánchez Castro Omar - 2013140474 */
