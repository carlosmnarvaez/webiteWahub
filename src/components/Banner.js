import React from "react";
import { Link as LinkScroll } from 'react-scroll';

import {Formulario} from "./Formulario";


function Banner() {

  return (
    <div className="container">
        <div className="row">
            <div className="wa-content">
                <div className="container">
                    <div className="row gx-5 justify-content-center">

                        <div className="col-lg-6 columna-01">
                            <div className="wa-contentLeft-banner my-5">
                                <h1 className="wa-title-h1">Vende en línea con tu propio <span>asesor comercial digital</span></h1>
                                <p className="wa-texto-p">Aumenta tu capacidad de respuesta y crece en ventas como siempres haz esperado</p>
                                <div className="d-grid gap-3 d-sm-flex">
    
                                    <LinkScroll className="btn wa-btnLeft-banner"
                                        activeClass="active"
                                        to="wa-title-left-rigth"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        ¿Que es Wahub?
                                    </LinkScroll>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 columna-02 my-5">
                            <div className="wa-content-form">
                                <Formulario/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Banner
