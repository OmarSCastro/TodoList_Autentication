import React from "react";
import { Card } from "primereact/card";
import { Image } from "primereact/image";

export const QueEsComponent = ({ texto }) => {
  const title = <p className="text-4xl text-center">¿Que es?</p>;
  const text = <p className="text-xl">{texto}</p>;

  return (
    <div className=" flex justify-content-center pt-5">
      <div className="flex justify-content-between ">
        <Card title={title} style={{ width: "35rem", marginBottom: "2em" }}>
          {text}
        </Card>

        <Image
          src="https://www.unav.edu/documents/5502999/0/Zoom-Logo.png/c0dcc00b-5751-63d0-4902-350d26c4fbb7"
          alt="Image Text"
          width="550"
          />
      </div>
    </div>
  );
};
