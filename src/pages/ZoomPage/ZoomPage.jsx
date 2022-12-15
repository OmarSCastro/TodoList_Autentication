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
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export const ZoomPage = () => {
  const text ="Zoom es un servicio de videoconferencia basado en la nube que se puede utilizar para reunirse virtualmente con otras personas, ya sea por vídeo o solo por audio, o ambos, todo ello mientras se realizan chats en directo, y permite grabar esas sesiones para verlas más tarde";
  const title = 'Zoom';
  const type = 'Aplicación de software de videoconferencia.';
  const propositoText = 'Permite interactuar virtualmente con los compañeros de trabajo cuando no es posible celebrar reuniones en persona, y también ha tenido un gran éxito en los eventos sociales.';
  const images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Windows_logo_-_2012.png/800px-Windows_logo_-_2012.png',
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/MacOS_logo_%282017%29.svg/2060px-MacOS_logo_%282017%29.svg.png',
                  'https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png']
  const image = "https://www.unav.edu/documents/5502999/0/Zoom-Logo.png/c0dcc00b-5751-63d0-4902-350d26c4fbb7";
  
  
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
          <QueEsComponent texto={text} image={image} />
          
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
          <div className="flex justify-content-around pt-3">
            <div className=" col-12 md:col-6 lg:col-3 border-2 border-white border-round">
                    <div className="h-20rem surface-0 hoover:bg-red-300  shadow-2  border-1 border-50 border-round">
                            <div className="flex  justify-content-center ">
                                <div className="">
                                <Image src="https://purepng.com/public/uploads/large/purepng.com-wifi-icon-whitewifi-iconwifiiconwireless-connection-1701528436347fqglg.png" alt="Image" width="400" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Conexión a Internet</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('internet')} />
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
            <div className=" col-12 md:col-6 lg:col-3 border-2 border-white border-round">
                    <div className="h-20rem surface-0 hoover:bg-red-300  shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex  justify-content-center mb-3">
                                <div className="">
                                <Image src="https://toppng.com/public/uploads/thumbnail/speaker-icon-sound-icon-white-11562939842d53ivrhitk.png" alt="Image" width="250" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Altavoces y Microfono</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('bocinas')} />
                            </div>
                    </div>
                    <Dialog header="Altavoces y Microfono" visible={displayBocinas} style={{ width: '50vw' }} footer={renderFooter('bocinas')} onHide={()=> onHide('bocinas')}>
                      <p>Un requisito escencial para esta plataforma es el contar con bocinas y micrófono
                        Con el correcto funcionamiento de estas herramientas podremos disfrutar de una 
                        videollamada de la mejor calidad
                      </p>
                      <p className="text-center">¿Quieres verificar el correcto funcionamiento de tu microfonot?</p>
                      <p className="text-center">Mira el siguiente video</p>
                      <div className="flex justify-content-center pt-3">
                      <VideoExample url="https://www.youtube.com/watch?v=1tnrEhqWXJs" />
                      </div>
                    </Dialog>
            </div>  
            <div className=" col-12 md:col-6 lg:col-3 border-2 border-white border-round">
                    <div className="h-20rem surface-0 hoover:bg-red-300  shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex  justify-content-center mb-3">
                                <div className="">
                                <Image src="https://flaticons.net/icon.php?slug_category=gadgets&slug_icon=webcam" alt="Image" width="190" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Conexión a Internet</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('camara')} />
                            </div>
                    </div>
                    <Dialog header="Camara web" visible={displayCamara} style={{ width: '50vw' }} footer={renderFooter('camara')} onHide={()=> onHide('camara')}>
                      <p>Aunque la aplicación no requiere de una cámara para funcionar es importante contar con una
                        ya que el aplicativo tiene el alcance de poder tomar tu rostro y poderlo mostrar en tiempo real en la llamada
                      </p>
                      <p className="text-center">¿Zoom no detecta tu cámara?</p>
                      <p className="text-center">Mira el siguiente video</p>
                      <div className="flex justify-content-center pt-3">
                      <VideoExample url="https://www.youtube.com/watch?v=-16nRwlpDIM" />
                      </div>
                    </Dialog>
            </div>  
          </div>  
        </div>

          <p className=" pt-4 pl-2 text-3xl font-semibold">Funcionalidades</p>
        <div className=" p-2 flex align-items-center">
          <div className="w-5 mr-7">
            <ol>
              <li className="text-xl">
                Reuniones individuales: Organiza reuniones individuales ilimitadas
                incluso con el plan gratuito.
              </li>
              <br />
              <li className="text-xl">
                Videoconferencias de grupo: Organiza hasta 500 participantes (si
                adquieres el complemento "reunión grande"). El plan gratuito, sin
                embargo, te permite organizar videoconferencias de hasta 40
                minutos y hasta 100 participantes.
              </li>
              <br />
              <li className="text-xl">
                Pantalla compartida: Reúnete uno a uno o con grupos grandes y
                comparte tu pantalla con ellos para que puedan ver lo que tú ves.
              </li>
              <br />
              <li className="text-xl">Grabación: También puedes grabar tus reuniones o eventos.</li>
            </ol>
          </div>
          <VideoExample url="https://www.youtube.com/watch?v=7b9KMPC4R2M" />
        </div>

        <div className=" p-7 flex justify-content-center">
          <div className="">
            <p className="text-4xl">¿Quien lo puede usar?</p>
            <ul>
              <li className="text-xl">Personas para sus reuniones personales</li>
              <br />
              <li className="text-xl">Estudiantes</li>
              <br />
              <li className="text-xl">Docentes</li>
              <br />
              <li className="text-xl">Pequeñas, medianas y grandes empresas</li>
              <br />
              <li className="text-xl">Equipos de trabajo</li>
              <br />  
              <li className="text-xl">Cualquier persona que quiera una videollamada en grupo</li>
            </ul>
          </div>
        </div>

        <div className=" flex pt-6 justify-content-center ">
          <div className=" border-2 border-white w-8 ">
            <p className="text-center pb-4 text-4xl font-semibold">Te dejamos un pequeño tutorial para conocer su funcionamiento</p>
            <div className="pt-2 flex justify-content-center pb-6">
              <VideoExample url="https://www.youtube.com/watch?v=eXYOk2O3vRA" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

