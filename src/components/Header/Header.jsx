import React from "react";
import { Avatar } from "primereact/avatar";
import { Menubar } from "primereact/menubar";

import { useNavigate } from "react-router-dom";
import { LogoutButton } from "../LogoutButton/LogoutButton";

export const Header = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      command: () => {
        navigate("/homepage");
      },
    },
    {
      label: "Aplicaciones",
      icon: "pi pi-th-large",
      items: [
        {
          label: "Teams",
          icon: "pi pi-th-large",
          command: () => {
            navigate("/teams");
          },
        },
        {
          label: "Meet",
          icon: "pi pi-th-large",
          command: () => {
            navigate("/meet");
          },
        },
        {
          label: "Classroom",
          icon: "pi pi-th-large",
          command: () => {
            navigate("/classroom");
          },
        },
        {
          label: "Zoom",
          icon: "pi pi-th-large",
          command: () => {
            navigate("/zoom");
          },
        },
      ],
    },
    {
      label: "Información",
      icon: "pi pi-exclamation-circle",
      command: () => {
        navigate("/aboutus");
      },
    },
  ];

  const start = (
    <a href="https://www.upiicsa.ipn.mx/">
      <Avatar
        className="mr-2"
        image="https://www.upiicsa.ipn.mx/assets/files/upiicsa/Inicio/ICON-UPIICSA.png"
        size="large"
      ></Avatar>
    </a>
  );

  const end = <LogoutButton />;

  return (
    <div className="px-3 py-2">
      <Menubar
        className="surface-overlay"
        start={start}
        model={items}
        end={end}
      />
    </div>
  );
};
