import React from 'react'
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {

  
  const nombre = localStorage.getItem( 'nombre' ).slice(1,-1);

  const navigate = useNavigate();

  const action = () => {
    localStorage.removeItem("nombre");
    localStorage.removeItem("usuarios");
    navigate('/');
  }

    return (
    <>
          <div className='flex'>
              <p className='pr-3'> ! Hola {nombre} !</p>
              <Avatar icon="pi pi-user" className="mr-2" size="large" />
              <Button icon="pi pi-power-off" className="p-button-text p-button-lg" onClick={action}/>
          </div>
    </>
  )
}   








