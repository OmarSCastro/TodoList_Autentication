import React from "react";
import { 
  TipoComponent,
  CompatibilidadComponent,
  PlataformTitle,
  PropositoComponent,
  QueEsComponent,
  VideoExample
} from "../../components";
import { Container } from "../../components/Container/Container";

export const MeetPage = () => {
  const text =
    "Google Meet es la aplicación de videoconferencias de Google, para navegadores web y dispositivos móviles, enfocada al entorno laboral y que sustituye a Google Hangouts, dentro de G-Suite, el pack de aplicaciones de Google para profesionales.";
  const title = "Google Meet";
  const type = "Aplicaciones de software de videoconferencia.";
  const propositoText =
    "Reúnete con quien quieras en Google Meet, ya sea para presentar una propuesta empresarial, para hacer un trabajo de química en grupo o, simplemente, para ponerte al día con tus amigos. Las empresas, centros educativos y demás organizaciones pueden emitir reuniones en directo a un público de hasta 100.000 espectadores de su dominio.";
  const systems = "MacOS, Linux, Windows";
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Windows_logo_-_2012.png/800px-Windows_logo_-_2012.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/MacOS_logo_%282017%29.svg/2060px-MacOS_logo_%282017%29.svg.png",
  ];

  return (
    <Container>
      <div className="">
        <div>
          <PlataformTitle title={title} />
        </div>

        <div>
          <QueEsComponent texto={text} />
        </div>

        <div>
          <TipoComponent type={type} />
        </div>

        <div>
          <PropositoComponent propositoText={propositoText} />
        </div>

        <div>
          <CompatibilidadComponent images={images} />
        </div>

        <div>
          <p>Requisitos del Sistema</p>
          <ul>
            <li>
              Conexión a Internet: banda ancha con cable o inalámbrica (3G o
              4G/LTE)
            </li>
            <li>
              Altavoces y un micrófono: integrados, con complemento USB o
              Bluetooth inalámbricos
            </li>
            <li>
              Cámara web o cámara web HD: integrada, con complemento USB o:
            </li>
            <ul>
              <li>
                Una cámara HD o videocámara HD con tarjeta de captura de vídeo
              </li>
              <li>
                Software de cámara virtual para su uso con software de
                transmisión como cámaras OBS o IP
              </li>
            </ul>
          </ul>
        </div>

        <div>
          <p>Funcionalidades</p>
          <ol>
            <li>
              Reuniones individuales: Organiza reuniones individuales ilimitadas
              incluso con el plan gratuito.
            </li>
            <li>
              Videoconferencias de grupo: Organiza hasta 500 participantes (si
              adquieres el complemento "reunión grande"). El plan gratuito, sin
              embargo, te permite organizar videoconferencias de hasta 40
              minutos y hasta 100 participantes.
            </li>
            <li>
              Pantalla compartida: Reúnete uno a uno o con grupos grandes y
              comparte tu pantalla con ellos para que puedan ver lo que tú ves.
            </li>
            <li>Grabación: También puedes grabar tus reuniones o eventos.</li>
          </ol>
        </div>

        <div>
          <p>¿Quien lo puede usar?</p>
          <ul>
            <li>Personas para sus reuniones personales</li>
            <li>Estudiantes</li>
            <li>Docentes</li>
            <li>Pequeñas, medianas y grandes empresas</li>
            <li>Equipos de trabajo</li>
            <li>Cualquier persona que quiera una videollamada en grupo</li>
          </ul>
        </div>

        <div className="flex justify-content-center">
          <VideoExample url="https://www.youtube.com/watch?v=eXYOk2O3vRA" />
        </div>
      </div>
    </Container>
  );
};
