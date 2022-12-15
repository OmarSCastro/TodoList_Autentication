import React from 'react'

export const PropositoComponent = ({propositoText}) => {
  return (
    <div  className='border-2 border-white aflex align-items-center border-round w-6l w-30rem'>
        <p className='text-3xl pl-3'>Propósito</p>
        <p className='text-xl pl-3 pb-2'>
            {propositoText}
        </p>
    </div>
  )
}
