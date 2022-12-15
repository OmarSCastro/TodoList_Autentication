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

          <div className='flex justify-content-around pt-4'>
            <div className=''>
              <Image src='https://github.com/OmarSCastro/CAPU_V2/blob/master/assets/Ivan.jpeg?raw=true' alt="Image"  width="320"  />
              <p className='text-center text-xl'>Herrera Rivera Ivan </p>
              <p className='text-center text-xl'>2019601766</p>
            </div>

            <div>
              <Image src='https://github.com/OmarSCastro/CAPU_V2/blob/master/assets/Arturo.jpeg?raw=true' alt="Image"  width="275"/>
              <p className='text-center text-xl'>Hernández Moreno Arturo </p>
              <p className='text-center text-xl'>2019601953</p>
            </div>

            <div>
              <Image src='https://github.com/OmarSCastro/CAPU_V2/blob/master/assets/Luis.jpeg?raw=true' alt="Image"  width="300"  />
              <p className='text-center text-xl'>Flores Gervacio Luis Andres  </p>
              <p className='text-center text-xl'>2015140232</p>
            </div>

            <div>
              <Image src='https://github.com/OmarSCastro/CAPU_V2/blob/master/assets/Omar%20-%20copia.jpg?raw=true' alt="Image"  width="410"  />
              <p className='text-center text-xl'>Sánchez Castro Omar </p>
              <p className='text-center text-xl'>2013140474</p>
            </div>


          </div>

          <p className='border-white border-2 text-center text-3xl font-semibold mt-8'>Informacrón de asignatura</p>
         <div className='justify-content-center flex'>
          <div>

          <p className='text-xl '> <span className='underline text-3xl text-semibold mr-2'>Materia:</span> Aplicación de Redes</p>
          <p className='text-xl '> <span className='underline text-3xl text-semibold mr-2'>Secuencia:</span> 4NV81</p>
          <p className='text-xl '> <span className='underline text-3xl text-semibold mr-2'>Secuencia:</span> Ing. Raymundo Meneses González</p>
          <p className='text-xl '> <span className='underline text-3xl text-semibold mr-2'>Proyecto:</span>  Aplicativo propuesto para segundo parcial</p>

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
