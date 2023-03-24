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
         <div>

       
          
          <p className='border-white border-2 text-center text-3xl font-semibold mt-8'>Informacrón de asignatura</p>
         <div className='justify-content-center flex'>
          <div>

          <p className='text-xl '> <span className='underline text-3xl text-semibold mr-2'>Materia:</span> Ingeniería de Pruebas</p>
          <p className='text-xl '> <span className='underline text-3xl text-semibold mr-2'>Secuencia:</span> 5NM71</p>
          <p className='text-xl '> <span className='underline text-3xl text-semibold mr-2'>Secuencia:</span> López Ávila Saul</p>
          <p className='text-xl '> <span className='underline text-3xl text-semibold mr-2'>Proyecto:</span>  CAPU</p>
          <p className='text-xl '> <span className='underline text-3xl text-semibold mr-2'>Alumno:</span>  Sánhcez Castro Omar</p>

          </div>
         </div>
         </div>
     </Container>
  )
}

/* Flores Gervacio Luis Andres - 2015140232

Hernández Moreno Arturo - 2019601953

Herrera Rivera Ivan - 2019601766

Sánchez Castro Omar - 2013140474 */
