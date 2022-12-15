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
import { Card } from "primereact/card";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


export const TeamsPage = () => {


  const text =<p className="text-xl"> Microsoft Teams es una aplicación de colaboración creada para el trabajo híbrido para que usted y su equipo estén informados, organizados y conectados, todo en un solo lugar. Aplicación de escritorio la cual mediante su cuenta en Mictosoft podra ingresar a diferentes equipos de Trabajo </p>;
  const title = <p className="text-4xl text-center">Microsoft Teams</p>;
  const type = 'Aplicación colaborativa para trabajo hibrido.';
  const propositoText = 'Microsoft Teams  sirve para compartir archivos, documentos, vídeos, audios,  entre todos los miembros de la organización de la manera más fácil.';
  const image = "https://logodownload.org/wp-content/uploads/2021/08/microsoft-teams-logo-1.png";
  const urlImage = "https://support.content.office.net/es-es/media/70d4c053-2a73-4d48-a2b0-c1634fd20f81.png";
  
  
  const [displayInternet, setDisplayInternet] = useState(false);
  const [displayBocinas, setDisplayBocinas] = useState(false);
  const [displayCamara, setDisplayCamara] = useState(false);
  const [displayCuenta, setDisplayCuenta] = useState(false);
  const [displaySistema, setDisplaySistema] = useState(false);
  const [displayNavegador, setDisplayNavegador] = useState(false);

  const images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Windows_logo_-_2012.png/800px-Windows_logo_-_2012.png',
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/MacOS_logo_%282017%29.svg/2060px-MacOS_logo_%282017%29.svg.png',
                  'https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png',
                  'https://cdn-icons-png.flaticon.com/512/226/226770.png',
                  'https://freepngimg.com/thumb/apple/68585-engine-search-smartphone-apple-optimization-iphone-logo.png'];

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

        <div className=" flex justify-content-evenly pt-5">
            <div className="pl-4">
              <Card title={title} style={{ width: "35rem", marginBottom: "2em" }}>
                {text}
              </Card>
            </div>

            <Image
              src={image}
              alt="Image Text"
              width="350"
              />
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
        <Image
          src={images[3]}
          alt="Image"
          width="150"
        />
        <Image
          src={images[4]}
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
                                <div className="pt-3">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/826px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png" alt="Image" width="220" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Cuenta Microsoft</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('cuenta')} />
                            </div>
                    </div>
                    <Dialog header="Cuenta de Microsoft" visible={displayCuenta} style={{ width: '50vw' }} footer={renderFooter('cuenta')} onHide={()=> onHide('cuenta')}>
                      <p>Teams al ser una herramienta propia de Microsoft es necesario contar con una cuenta de esta compañia 
                        para acceder a todas sus funcionalidades que puede ofrecerte
                      </p>
                      <p className="text-center">¿Quieres saber como crear una cuenta en Microsoft?</p>
                      <p className="text-center">Mira el siguiente video</p>
                      <div className="flex justify-content-center pt-3">
                      <VideoExample url="https://www.youtube.com/watch?v=CMIk_yEjTsU" />
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
                      <p>El sistema operativo que se cuente en el dispositivo es importante para la compatibilidad
                        Algunos sistemas operativos compatibles son: 
                      </p>
                      <ul>
                        <li>Windows 11</li>
                        <li>Windows 10</li>
                        <li>Windows 8</li>
                        <li>Windows server</li>
                      </ul>
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
                                <Image src="https://cdn-icons-png.flaticon.com/512/4703/4703650.png" alt="Image" width="190" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Equipo Estable</label>
                            <div className="flex justify-content-center pt-4">
                              <Button label="Ver más" icon="pi pi-check" onClick={() => onClick('navegador')} />
                            </div>
                    </div>
                    <Dialog header="Equipo de recursos estables" visible={displayNavegador} style={{ width: '50vw' }} footer={renderFooter('navegador')} onHide={()=> onHide('navegador')}>
                      <p>Los recursos que ocupa Microsoft Teams de tu ordenador son exigentes, por lo mismo te recomendamos
                        contar con un equipo de recursos estables y optimos<br /><br />   
                        Tu computadora debe de contar con minimo los siguientes puntos: 
                      </p>
                      <ul>
                        <li>4 gb de Memoria RAM</li>
                        <li>Minimo 3 gb libres de espacio en Disco Duto</li>
                      </ul>
                      <p>Quieres saber cuanta memoria RAM tiene tu equipo? Mira el siguiente video</p>
                      <div className="flex justify-content-center pt-3">
                      <VideoExample url="https://www.youtube.com/watch?v=Ki4pDilP_nE" />
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
            
          </div>  
        </div>

          <p className=" pt-4 pl-2 text-3xl font-semibold">Funcionalidades</p>
        <div className=" p-2 flex align-items-center">
          <div className="w-5 mr-7">
            <ol>
              <li className="text-xl">Planificación y creación de tareas</li>
              <br />
              <li className="text-xl">Calendario para agendar reuniones y tareas.</li>
              <br />
              <li className="text-xl">Crea equipos y canales personalizados.</li>
              <br />
              <li className="text-xl">Videoconferencias y uso compartido de pantallas.</li>
              <br />
              <li className="text-xl">Mejora la productividad y trabajo colaborativo </li>
              <br />
              <li className="text-xl">Organización por grupos de trabajo</li>
              <br />
              <li className="text-xl">Comparte documentos y archivos</li>
              <br />
              <li className="text-xl">Conecta con más de 700 aplicaciones externas</li>
              <br />
              <li className="text-xl">Tu calendario personal puede gestionar los procesos en Teams</li>
            </ol>
          </div>
          <VideoExample url="https://www.youtube.com/watch?v=ul7ZUQ1XvmY" />
        </div>

        <div className=" p-7 flex justify-content-center">
          <div className="">
            <p className="text-4xl">¿Quien lo puede usar?</p>
            <ul>
              <li className="text-xl">Docentes</li>
              <br />
              <li className="text-xl">Alumnos</li>
              <br />
              <li className="text-xl">Equipos de trabajo</li>
              <br />
              <li className="text-xl">Compañias</li>
              <br />
              <li className="text-xl">Administradores</li>
            </ul>
          </div>
        </div>

        <div className=" flex  justify-content-center ">
          <div className=" border-2 border-white w-8 border-round">
            <p className="text-center pb-4 text-4xl font-semibold">Te dejamos un pequeño tutorial para conocer su funcionamiento</p>
            <div className="pt-2 flex justify-content-center pb-6">
              <VideoExample url="https://www.youtube.com/watch?v=FEE07Va0QUA" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
