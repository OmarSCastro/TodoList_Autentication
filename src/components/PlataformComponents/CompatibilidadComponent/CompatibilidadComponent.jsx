import React from "react";
import { Image } from "primereact/image";

export const CompatibilidadComponent = ({ images }) => {
  const image_1=images[0];
  const image_2=images[1];
  const image_3=images[2];
  
  return (
    <div>
      <p className="text-4xl text-center font-bold text-800">Compatibilidad</p>
      <div className="border-2 border-white flex justify-content-around surface-0 border-round h-13rem align-items-center">
        <Image
          src={image_1}
          alt="Image"
          width="150"
        />
        <Image
          src={image_2}
          alt="Image"
          width="150"
        />
        <Image
          src={image_3}
          alt="Image"
          width="150"
        />
      </div>
    </div>
  );
};
