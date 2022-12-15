import React from "react";
import { Container } from "../../components/Container/Container";
import { Image } from 'primereact/image';
import { Link } from "react-router-dom";


export const Home = () => {

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

        </div>
    </Container>
      );
};