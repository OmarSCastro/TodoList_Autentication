import React, {useState} from "react";
import { Container } from "../../components/Container/Container";
import { Image } from 'primereact/image';
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import  '../../index.css';


export const Home = () => {

    const [plataforma, setPlataforma] = useState('');
    const [imagen, setImagen] = useState('');
    const [displayPregunta1, setDisplayPregunta1] = useState('');
    const [displayPregunta2, setDisplayPregunta2] = useState('');
    const [displayPregunta3, setDisplayPregunta3] = useState('');
    const [displayPlataforma, setDisplayPlataforma] = useState('');

    const askOne = ( name )=> {
        setDisplayPregunta1(false);
        switch (name) {
            case 'si':
                setDisplayPregunta2(true);
                break;
                case 'no':
                setDisplayPregunta3(true);
                break;
        
            default:
                break;
        }
    }
    const askTwo = ( name )=> {
        switch (name) {
            case 'si':
                setPlataforma('Microsoft Teams')
                setImagen('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png');
                setDisplayPregunta2(false)
                setDisplayPlataforma(true);
                break;
                
            case 'no':
                setPlataforma('Google Classroom');
                setImagen('https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png');
                setDisplayPregunta2(false)
                setDisplayPlataforma(true);
                break;
                    
            default:
                break;
        }
        
    }
    const askThree = ( name )=> {
        switch (name) {
            case 'pw':
                setPlataforma('Google Meet')
                setImagen('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/768px-Google_Meet_icon_%282020%29.svg.png');
                setDisplayPregunta3(false);
                setDisplayPlataforma(true);
                break;
                
            case 'pi':
                setPlataforma('Zoom')
                setImagen('https://zeevector.com/wp-content/uploads/2021/03/Zoom-Logo-white.png');
                setDisplayPregunta3(false);
                setDisplayPlataforma(true);
                break;
        
            default:
                break;
        }
    }

    const onHide = (name) => {
        switch (name) {
          case '1':
            setDisplayPregunta1(false)
            break;
          case '2':
            setDisplayPregunta2(false)
            break;
          case '3':
            setDisplayPregunta3(false)
            break;
          case 'plataforma':
            setDisplayPlataforma(false)
            break;
          default:
            break;
        }
      }


    const onClick = () => {
        setDisplayPregunta1(true)
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
        <div className="grid pb-6">
            <div className=" col-12 md:col-6 lg:col-3">
                <Link to="/teams">
                    <div className="h-20rem surface-0  shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex  justify-content-center mb-3">
                            <div className="">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" alt="Image" width="250" />
                            </div>
                        </div>
                        <label className="mt-5 flex justify-content-center" htmlFor="">Microsoft Teams</label>
                    </div>
                </Link>
            </div>
            <div className=" col-12 md:col-6 lg:col-3">
                <Link to="/meet">
                    <div className="h-20rem surface-0 hoover:bg-red-300  shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex  justify-content-center mb-7">
                                <div className="">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/768px-Google_Meet_icon_%282020%29.svg.png" alt="Image" width="250" />
                                </div>
                            </div>
                            <label className="flex justify-content-center" htmlFor="">Google Meet</label>
                    </div>
                </Link>
            </div>
            <div className=" col-12 md:col-6 lg:col-3">
                <Link to="/classroom">
                    <div className="h-20rem surface-0  shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex  justify-content-center mb-3">
                            <div className="">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png" alt="Image" width="250" />
                            </div>
                        </div>
                        <label className="mt-6 flex justify-content-center" htmlFor="">Google Classroom</label>
                    </div>
                </Link>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <Link to="/zoom">
                    <div className="h-20rem surface-0  shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex  justify-content-center mb-3">
                            <div className="">
                            <Image src="https://zeevector.com/wp-content/uploads/2021/03/Zoom-Logo-white.png" alt="Image" width="250" />
                            </div>
                        </div>
                        <label className="flex justify-content-center" htmlFor="">Microsoft Teams</label>
                    </div>
                </Link>
            </div>
        </div>  
        <div className="h-17rem">
            <div className="flex justify-content-center mt-6 .circle.wobble ">
                <Button onClick={onClick} className=" p-button-warning p-0 w-24rem flex justify-content-center h-8rem" >
                                <p className="px-3 text-bold text-xl">Conoce tu <br />Plataforma ideal</p>
                </Button>
            </div>
        </div>

        <Dialog header="Pregunta 1" visible={displayPregunta1} style={{ width: '50vw' }}  onHide={()=> onHide('1')}>
                      <p>¿ Necesitas distribuir información con tu equipo ?</p>
                      <div className="flex pt-4 justify-content-evenly">
                        <Button label="Si" onClick={()=> askOne('si')}/>
                        <Button label="No" onClick={()=> askOne('no')}/>
                      </div>
        </Dialog>


        <Dialog header="Pregunta 2" visible={displayPregunta2} style={{ width: '50vw' }} onHide={()=> onHide('2')}>
                      <p>¿ Que tan necesarias son las videoconferencias en tu equipo ?</p>
                      <div className="flex pt-4 justify-content-evenly">
                        <Button label="Son necesarias" onClick={()=> askTwo('si')}/>
                        <Button label="No son necesarias" onClick={()=> askTwo('no')} />
                      </div>
        </Dialog>


        <Dialog header="Pregunta 3" visible={displayPregunta3} style={{ width: '50vw' }} onHide={()=> onHide('3')}>
                      <p>¿ Prefieres utilizar navegadores web o programas independientes ?</p>
                      <div className="flex pt-4 justify-content-evenly">
                        <Button label="Navegador web" onClick={()=> askThree('pw')}/>
                        <Button label="Programa Independiente" onClick={()=> askThree('pi')}/>
                      </div>
        </Dialog>

        <Dialog header="Plataforma" visible={displayPlataforma} style={{ width: '30vw' }} onHide={()=> onHide('plataforma')}>
                        <div className="flex justify-content-center">
                            <div>
                                <p>La plataforma que te recomendamos es: {plataforma}  </p>
                                <div className="flex justify-content-center">
                                <Image src={imagen} alt="Image" width="200" />
                                </div>
                            </div>
                        </div>
                      <div className="flex pt-4 justify-content-evenly">
                        <Button label="Salir" onClick={()=> setDisplayPlataforma(false)}/>
                      </div>
        </Dialog>


    </Container>
      );
};