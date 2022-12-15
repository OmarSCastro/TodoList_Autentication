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

export const MeetPage = () => {
  const text ="Es un aplicativo de videoconferencias de Google, para navegadores web y dispositivos móviles, enfocada al entorno laboral y que sustituye a Google Hangouts, dentro de G-Suite, el pack de aplicaciones de Google para profesionales.";
  const title = 'Google Meet';
  const type = 'Aplicaciones de software de videoconferencia..';
  const propositoText = 'Reúnete con quien quieras en Google Meet, ya sea para presentar una propuesta empresarial, para hacer un trabajo de química en grupo o, simplemente, para ponerte al día con tus amigos.. Las empresas, centros educativos y demás organizaciones pueden emitir reuniones en directo a un público de hasta 100.000 espectadores de su dominio.';
  const images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Windows_logo_-_2012.png/800px-Windows_logo_-_2012.png',
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/MacOS_logo_%282017%29.svg/2060px-MacOS_logo_%282017%29.svg.png']
  const image = "https://1000marcas.net/wp-content/uploads/2022/01/Google-Meet-Logo.png";
  
  const urlImage= 'https://blog.soltekonline.com/content/images/2022/01/How-to-raise-hand-in-Google-meet-lede.png';
  
  const [displayInternet, setDisplayInternet] = useState(false);
  const [displayBocinas, setDisplayBocinas] = useState(false);
  const [displayCamara, setDisplayCamara] = useState(false);
  const [displayCuenta, setDisplayCuenta] = useState(false);
  const [displaySistema, setDisplaySistema] = useState(false);
  const [displayNavegador, setDisplayNavegador] = useState(false);

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
      case 'sistema':
        setDisplaySistema(false)
        break;
      case 'navegador':
        setDisplayNavegador(false)
        break;
      case 'cuenta':
        setDisplayCuenta(false)
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
      case 'sistema':
        setDisplaySistema(true)
        break;
      case 'navegador':
        setDisplayNavegador(true)
        break;
      case 'cuenta':
        setDisplayCuenta(true)
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
        <div>
      <p className="text-4xl text-center font-bold text-800">Compatibilidad</p>
      <div className="border-2 border-white flex justify-content-around surface-0 border-round h-13rem align-items-center">
        <Image
          src={images[0]}
          alt="Image"
          width="150"
        />
        <Image
          src={images[1]}
          alt="Image"
          width="150"
        />
      </div>
    </div>
        </div>

        <div className="pt-5 ">
          <p className="pl-3 text-2xl font-medium">Requisitos del Sistema</p>
          <div className="grid pb-6 pt-3 justify-content-center">
            <div className=" col-12 md:col-6 lg:col-3 border-2 border-white border-round m-3">
                    <div className="h-20rem surface-0 hoover:bg-red-300  shadow-2  border-1 border-50 border-round">
                            <div className="flex  justify-content-center ">
                                <div className="">
                                <Image src="https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png" alt="Image" width="220" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Cuenta Google</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('cuenta')} />
                            </div>
                    </div>
                    <Dialog header="Cuenta de Google" visible={displayCuenta} style={{ width: '50vw' }} footer={renderFooter('cuenta')} onHide={()=> onHide('cuenta')}>
                      <p>Meet es una herramienta propia de Google, al ser asi el único requisito que necesitas es tener una cuenta con ellos
                       . De esta manera google puede identificar tu nombre e información de contacto.
                      </p>
                      <p className="text-center">¿Quieres saber crear una cuenta en Google?</p>
                      <p className="text-center">Mira el siguiente video</p>
                      <div className="flex justify-content-center pt-3">
                      <VideoExample url="https://www.youtube.com/watch?v=1DCZXDNtj40" />
                      </div>
                    </Dialog>
            </div>  
            <div className=" col-12 md:col-6 lg:col-3 border-2 border-white border-round m-3">
                    <div className="h-20rem surface-0 hoover:bg-red-300  shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex  justify-content-center mb-3">
                                <div className="">
                                <Image src="https://cdn-icons-png.flaticon.com/512/689/689358.png" alt="Image" width="190" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Sistema Operativo Compatible</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('sistema')} />
                            </div>
                    </div>
                    <Dialog header="Sistema Operativo" visible={displaySistema} style={{ width: '50vw' }} footer={renderFooter('sistema')} onHide={()=> onHide('sistema')}>
                      <p>El sistema operativo que se cuente en el dispositivo es importante para la compatibilidad.
                        Algunos sistemas operativos compatibles son:  MacOS y Windows
                      </p>
                      <p className="text-center">¿Quieres saber que sistema operativo tienes?</p>
                      <p className="text-center">Mira el siguiente video</p>
                      <div className="flex justify-content-center pt-3">
                      <VideoExample url="https://www.youtube.com/watch?v=KDPDZ84SzZw" />
                      </div>
                    </Dialog>
            </div>  
            <div className=" col-12 md:col-6 lg:col-3 border-2 border-white border-round m-3">
                    <div className="h-20rem surface-0 hoover:bg-red-300  shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex  justify-content-center mb-3">
                                <div className="">
                                <Image src="https://freesvg.org/img/provider_internetsvg.png" alt="Image" width="190" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Navegador Compatible</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('navegador')} />
                            </div>
                    </div>
                    <Dialog header="Navegador web Compatible" visible={displayNavegador} style={{ width: '50vw' }} footer={renderFooter('navegador')} onHide={()=> onHide('navegador')}>
                      <p>Google Meet es una aplicación la cual se abre desde algún navegador web
                        Entonces es importante saber con que navegadores web tenemos acceso a esta herramienta <br /><br />   
                        Algunos ejemplos son: 
                      </p>
                      <ul>
                        <li>Apple Safari</li>
                        <li>Microsoft Edge</li>
                        <li>Google Chrome</li>
                        <li>Mozila Firefox</li>
                      </ul>
                      <div className="flex justify-content-center pt-3">
                      </div>
                    </Dialog>
            </div>  
            <div className=" col-12 md:col-6 lg:col-3 border-2 border-white border-round m-3">
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
            <div className=" col-12 md:col-6 lg:col-3 border-2 border-white border-round m-3">
                    <div className="h-20rem surface-0 hoover:bg-red-300  shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex  justify-content-center mb-3">
                                <div className="">
                                <Image src="https://flaticons.net/icon.php?slug_category=gadgets&slug_icon=webcam" alt="Image" width="190" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Camara web</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('camara')} />
                            </div>
                    </div>
                    <Dialog header="Camara web" visible={displayCamara} style={{ width: '50vw' }} footer={renderFooter('camara')} onHide={()=> onHide('camara')}>
                      <p>Aunque la aplicación no requiere de una cámara para funcionar es importante contar con una
                        ya que el aplicativo tiene el alcance de poder tomar tu rostro y poderlo mostrar en tiempo real en la llamada
                      </p>
                      <p className="text-center">¿Meet no detecta tu cámara?</p>
                      <p className="text-center">Mira el siguiente video</p>
                      <div className="flex justify-content-center pt-3">
                      <VideoExample url="https://www.youtube.com/watch?v=-bX8aGQBkkY" />
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
                Número ilimitado de reuniones.
              </li>
              <br />
              <li className="text-xl">
                Subtítulos automáticos durante las reuniones.
              </li>
              <br />
              <li className="text-xl">
                Compatible con todo tipo de dispositivos.
              </li>
              <br />
              <li className="text-xl">Pantalla de vista previa de la imagen y el sonido.</li>
              <br />
              <li className="text-xl">Diseños ajustables y ajustes de la pantalla </li>
              <br />
              <li className="text-xl">Controles para los anfitriones de las reuniones</li>
              <br />
              <li className="text-xl">Comparte la pantalla con los participantes</li>
              <br />
              <li className="text-xl">Intercambia mensajes con los participantes</li>
            </ol>
          </div>
          <VideoExample url="https://www.youtube.com/watch?v=x8fNKKl2m4E" />
        </div>

        <div className=" p-7 flex justify-content-center">
          <div className="">
            <p className="text-4xl">¿Quien lo puede usar?</p>
            <ul>
              <li className="text-xl">Empresas</li>
              <br />
              <li className="text-xl">Centros Educativos</li>
              <br />
              <li className="text-xl">Organizaciones privadas</li>
              <br />
              <li className="text-xl">Organizaciones públicas</li>
              <br />
              <li className="text-xl">Estudiantes</li>
            </ul>
          </div>
        </div>

        <div className=" flex  justify-content-center ">
          <div className=" border-2 border-white w-8 border-round">
            <p className="text-center pb-4 text-4xl font-semibold">Te dejamos un pequeño tutorial para conocer su funcionamiento</p>
            <div className="pt-2 flex justify-content-center pb-6">
              <VideoExample url="https://www.youtube.com/watch?v=993GyGpakuw&t=12s" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
