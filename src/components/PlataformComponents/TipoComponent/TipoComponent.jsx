import React from 'react'

export const TipoComponent = ({type}) => {
  return (
    <div className='border-2 border-white flex align-items-center justify-content-evenly border-round w-30rem'>
        <p className='text-3xl '>Tipo</p>
        <p className='text-xl '>{type}</p>
    </div>
  )
}