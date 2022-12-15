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
export const ClassPage = () => {

  const text ="Google Classroom es la herramienta de Google para la educación. Es una plataforma que permite gestionar lo que sucede en el aula de forma online, de manera colaborativa. Comenzó el año 2014, y su uso ha tenido un aumento exponencial entre los docentes de diferentes partes del mundo.";
  const title = 'Google Classroom';
  const type = 'Aplicaciones de software para la educación';
  const propositoText = 'Su principal propósito es optimizar la gestión de tareas y para mejorar la colaboración y la comunicación.';
  const image = "https://logos-world.net/wp-content/uploads/2021/08/Google-Classroom-Logo-2014-2016.png";
  const urlImage = "https://additioapp.com/wp-content/uploads/2022/08/google-classroom-2-1024x943.png";
  
  
  const [displayInternet, setDisplayInternet] = useState(false);
  const [displayBocinas, setDisplayBocinas] = useState(false);
  const [displayCamara, setDisplayCamara] = useState(false);
  const [displayCuenta, setDisplayCuenta] = useState(false);
  const [displaySistema, setDisplaySistema] = useState(false);
  const [displayNavegador, setDisplayNavegador] = useState(false);

  const images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Windows_logo_-_2012.png/800px-Windows_logo_-_2012.png',
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/MacOS_logo_%282017%29.svg/2060px-MacOS_logo_%282017%29.svg.png',
                  'https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png',
                  'https://cdn-icons-png.flaticon.com/512/226/226770.png'];

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
        <Image
          src={images[2]}
          alt="Image"
          width="150"
        />
        <Image
          src={images[3]}
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
            
          </div>  
        </div>

          <p className=" pt-4 pl-2 text-3xl font-semibold">Funcionalidades</p>
        <div className=" p-2 flex align-items-center">
          <div className="w-5 mr-7">
            <ol>
              <li className="text-xl">Iniciar videollamadas</li>
              <br />
              <li className="text-xl">Crear y gestionar tareas, actividades y calificarlas.</li>
              <br />
              <li className="text-xl">Añadir material o documentos informativos.</li>
              <br />
              <li className="text-xl">Interactuar con el equipo o salón de clase de manera grupal o individual.</li>
              <br />
              <li className="text-xl">Consultar anuncios o actividades nuevas </li>
              <br />
              <li className="text-xl">Proteger la infromación y definir permisos personalizados</li>
              <br />
              <li className="text-xl">Añadir o eliminar profesores y/o alumnos al salón de clases</li>
            </ol>
          </div>
          <VideoExample url="https://www.youtube.com/watch?v=TBmW2hdVVIM" />
        </div>

        <div className=" p-7 flex justify-content-center">
          <div className="">
            <p className="text-4xl">¿Quien lo puede usar?</p>
            <ul>
              <li className="text-xl">Centros Educativos</li>
              <br />
              <li className="text-xl">Profesores</li>
              <br />
              <li className="text-xl">Alumnos</li>
              <br />
              <li className="text-xl">Padres o Tutores</li>
              <br />
              <li className="text-xl">Administradores</li>
            </ul>
          </div>
        </div>

        <div className=" flex  justify-content-center ">
          <div className=" border-2 border-white w-8 border-round">
            <p className="text-center pb-4 text-4xl font-semibold">Te dejamos un pequeño tutorial para conocer su funcionamiento</p>
            <div className="pt-2 flex justify-content-center pb-6">
              <VideoExample url="https://www.youtube.com/watch?v=PQGVNlynKXg" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
