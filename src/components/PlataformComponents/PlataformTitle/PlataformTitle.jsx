import React from 'react'

export const PlataformTitle = ({title}) => {
  return (

    <div className='flex align-items-center  justify-content-center'>
        <p className='text-5xl font-bold pr-5'>Plataforma: </p>
          <p className='text-3xl underline'>
            {title}
          </p>
    </div>
  )
}
