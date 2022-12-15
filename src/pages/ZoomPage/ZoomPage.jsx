import React, {useState} from "react";
import { 
  TipoComponent,
  CompatibilidadComponent,
  PlataformTitle,
  PropositoComponent,
  QueEsComponent,
  VideoExample
} from "../../components";
import { Container } from "../../components/Container/Container";
import { Image } from 'primereact/image';
import { Link } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export const ZoomPage = () => {
  const text ="Zoom es un servicio de videoconferencia basado en la nube que se puede utilizar para reunirse virtualmente con otras personas, ya sea por vídeo o solo por audio, o ambos, todo ello mientras se realizan chats en directo, y permite grabar esas sesiones para verlas más tarde";
  const title = 'Zoom';
  const type = 'Aplicación de software de videoconferencia.';
  const propositoText = 'Permite interactuar virtualmente con los compañeros de trabajo cuando no es posible celebrar reuniones en persona, y también ha tenido un gran éxito en los eventos sociales.';
  const systems = 'MacOS, Linux, Windows';
  const images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Windows_logo_-_2012.png/800px-Windows_logo_-_2012.png',
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/MacOS_logo_%282017%29.svg/2060px-MacOS_logo_%282017%29.svg.png',
                  'https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png']
  
  
  const urlImage= 'https://lifeinbits.net/wp-content/uploads/2022/04/2021-pug-zoom-blog-final-release.jpeg';
  
  const [displayInternet, setDisplayInternet] = useState(false);
  const [displayBocinas, setDisplayBocinas] = useState(false);
  const [displayCamara, setDisplayCamara] = useState(false);

  const onHide = (name) => {
    switch (name) {
      case 'internet':
        setDisplayInternet(false)
        break;
      case 'bocinas':
        setDisplayBocinas(false)
        break;
      case 'camara':
        setDisplayCamara(false)
        break;
      default:
        break;
    }
  }

  const onClick = (name) => {
    switch (name) {
      case 'internet':
        setDisplayInternet(true)
        break;
      case 'bocinas':
        setDisplayBocinas(true)
        break;
      case 'camara':
        setDisplayCamara(true)
        break;
      default:
        break;
    }
    setDisplayInternet(true);
  }

  const renderFooter = (name) => {
    return (
        <div className="flex justify-content-center">
            <Button label="Listo" icon="pi pi-check" onClick={()=>onHide(name)} autoFocus />
        </div>
    );
}


  return (
    <Container>
      <div className="">
        <div>
          <PlataformTitle title={title} />  
        </div>

        <div className="">
          <QueEsComponent texto={text} />
          
        </div>

        <div className=" flex align-items-center justify-content-evenly pt-5">

          <div>
            <Image src={urlImage} alt="Image Text"  width="450" preview/>
          </div>

          <div>

            <div className="pb-5">
              <TipoComponent type={type} />
            </div>

            <div>
              <PropositoComponent propositoText={propositoText} />
            </div>

          </div>

        </div>

        <div className="pt-5">
          <CompatibilidadComponent images={images} />
        </div>

        <div className="pt-5">
          <p className="pl-3 text-2xl font-medium">Requisitos del Sistema</p>
          <div className="flex justify-content-around">
            <div className=" col-12 md:col-6 lg:col-3 ">
                    <div className="h-20rem surface-0 hoover:bg-red-300  shadow-2  border-1 border-50 border-round">
                            <div className="flex  justify-content-center ">
                                <div className="">
                                <Image src="https://purepng.com/public/uploads/large/purepng.com-wifi-icon-whitewifi-iconwifiiconwireless-connection-1701528436347fqglg.png" alt="Image" width="400" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Conexión a Internet</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('displayBasic')} />
                            </div>
                    </div>
                    <Dialog header="Conexión a Internet" visible={displayInternet} style={{ width: '50vw' }} footer={renderFooter('internet')} onHide={()=> onHide('internet')}>
                      <p>La conexión a internet es de suma importancia para poder utilizar la plataforma.
                        Al ser una herramienta en linea es indispensable tener una buena conexión a internet
                      </p>
                      <p className="text-center">¿Quieres saber la velocidad de tu internet?</p>
                      <p className="text-center">Mira el siguiente video</p>
                      <div className="flex justify-content-center pt-3">
                      <VideoExample url="https://www.youtube.com/watch?v=AdqzwvZyj2o" />
                      </div>
                    </Dialog>
            </div>  
            <div className=" col-12 md:col-6 lg:col-3 ">
                    <div className="h-20rem surface-0 hoover:bg-red-300  shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex  justify-content-center mb-3">
                                <div className="">
                                <Image src="https://toppng.com/public/uploads/thumbnail/speaker-icon-sound-icon-white-11562939842d53ivrhitk.png" alt="Image" width="250" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Altavoces y Microfono</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('displayBasic')} />
                            </div>
                    </div>
                    <Dialog header="Altavoces y Microfono" visible={displayInternet} style={{ width: '50vw' }} footer={renderFooter('bocinas')} onHide={()=> onHide('bocinas')}>
                      <p>Un requisito escencial para esta plataforma es el contar con bocinas y micrófono
                        Al ser una herramienta en linea es indispensable tener una buena conexión a internet
                      </p>
                      <p className="text-center">¿Quieres saber la velocidad de tu internet?</p>
                      <p className="text-center">Mira el siguiente video</p>
                      <div className="flex justify-content-center pt-3">
                      <VideoExample url="https://www.youtube.com/watch?v=AdqzwvZyj2o" />
                      </div>
                    </Dialog>
            </div>  
            <div className=" col-12 md:col-6 lg:col-3 ">
                    <div className="h-20rem surface-0 hoover:bg-red-300  shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex  justify-content-center mb-3">
                                <div className="">
                                <Image src="https://static.vecteezy.com/system/resources/previews/009/391/790/original/internet-wifi-icon-clipart-design-illustration-free-png.png" alt="Image" width="250" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Conexión a Internet</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('displayBasic')} />
                            </div>
                    </div>
                    <Dialog header="Conexión a Internet" visible={displayInternet} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={onHide}>
                      <p>La conexión a internet es de suma importancia para poder utilizar la plataforma.
                        Al ser una herramienta en linea es indispensable tener una buena conexión a internet
                      </p>
                      <p className="text-center">¿Quieres saber la velocidad de tu internet?</p>
                      <p className="text-center">Mira el siguiente video</p>
                      <div className="flex justify-content-center pt-3">
                      <VideoExample url="https://www.youtube.com/watch?v=AdqzwvZyj2o" />
                      </div>
                    </Dialog>
            </div>  
          </div>
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

