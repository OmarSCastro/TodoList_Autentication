import React, { useContext, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { useNavigate } from 'react-router-dom';

export const LoginPrincipal = () => {


  const navigate = useNavigate();

  const [userValue, setUserValue] = useState(''); //Aqui se almacenará el valor del correo de usuario

  const fetchData = async () => {
      if (userValue.length > 2) {
        localStorage.setItem('nombre', JSON.stringify(userValue));
        navigate('/homepage');
      } else {
        document.getElementById("msj_error").innerText= "Ingresa un nombre válido";
        setUserValue("");
      } 
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    fetchData();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-screen surface-ground px-8 py-8 flex align-content-center flex-wrap justify-content-center">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-4">
            <div className="text-center mb-5">
              <div className="grid -mt-3 -ml-3 -mr-3">
                <div className=" col-12 md:col-12 lg:col-12">
                  <Image src="https://i0.wp.com/www.udual.org/principal/wp-content/uploads/2021/10/unnamed-1.jpg?fit=900%2C900&ssl=1" alt="Image" width="250" />
                </div>
              </div>
              <div className="text-900 text-3xl font-medium mb-3">Bienvenido Profesor</div>
            </div>
              <label htmlFor="username" className="block text-900 font-medium mb-2">Ingresa tu nombre</label>
              <InputText placeholder="Nombre" id="username" className="w-full mb-3" value={userValue} onChange={(e) => setUserValue(e.target.value)}/>
              <Button label="Acceder" icon="pi pi-sign-in" className="w-full" onClick={fetchData} />
              <p id="msj_error" className="text-lg text-red-500"></p>
          </div>
      </div>
    </form>
  );
};