import React, { useEffect, useRef } from "react";

import { Link } from "react-scroll";

import { presentacion, decore01 } from "../assets";

import { FaFill } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa";
/* import { FaGooglePlay } from "react-icons/fa"; */
import { FaUserShield } from "react-icons/fa";





function QuienesSomos() {

const videoRef = useRef(null);

    useEffect(() => {
        let options = {
        rootMargin: "0px",
        threshold: [0.25, 0.75]
        };

        let handlePlay = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            videoRef.current.play();
            } else {
            videoRef.current.pause();
            }
        });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
    });

  return (

    <section className="Quienes-somos">
        <img src={decore01} alt=""/>

        <div className="container item-left-rigth">
            <div className="row">

                <div className="col-lg-12">
                    <h6>¿QUE ES WAHUB Y POR QUE OBTENERLO?</h6>
                    <h2 className="wa-title-left-rigth">¿Beneficios de tener un <b>asesor comercial digital?</b></h2>
                </div>

                <div className="col-lg-4">
                    <div className="wa-content-bg section1">
                        <span></span>
                        <b></b>
                        <video className="wa-content-video"
                            width="100%"
                            ref={videoRef}
                            pause={false}
                            controls
                            poster={presentacion}
                            src={require("./../assets/videos/presentacion-wahub.mp4")}
                        ></video>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="col-lg-12 text-white">
                        <div className="feature"><FaFill/></div>
                        <h2>Elige tu propia plantilla</h2>
                        <p>Elige la plantilla que más te guste y establece los colores. ¡Los combinaremos para crear la estética que deseas lograr!.</p>
                    </div>
                    <div className="col-lg-12 text-white">
                        <div className="feature"><FaWhatsapp/></div>
                        <h2>Agiliza tus ventas por whatsapp</h2>
                        <p>Atiende a tus clientes de manera más eficiente automatizando pedidos de productos y servicios.</p>
                    </div>
                    <div className="col-lg-12 text-white">
                        <div className="feature"><FaTags/></div>
                        <h2>Sube productos ilimitados</h2>
                        <p>Crea tu tienda sin pagar mensualidades subiendo productos y servicios ilimitados.</p>
                    </div>

                </div>

                <div className="col-lg-4">
                    
                    {/* <div className="col-lg-12 text-white">
                        <div className="feature"><FaGooglePlay/></div>
                        <h2>Obtén tu propia App movil</h2>
                        <p>Subimos tu asesor comercial digital a Play store </p>
                    </div> */}
                    <div className="col-lg-12 text-white">
                        <div className="feature"><FaVectorSquare/></div>
                        <h2>Escalabilidad</h2>
                        <p>Escala tu tienda a una Ecommerce y genera más ventas mesulaes.</p>
                    </div>
                    <div className="col-lg-12 text-white">
                        <div className="feature"><FaUserShield/></div>
                        <h2>Soporte 24/7</h2>
                        <p>Tendras soporte las 24/7|</p>
                    </div>

                </div>

                

                
            </div>
        </div>

        <div className="container section2">
            <div className="row">

                <div className="col-lg-6">
                    <h2 className="wa-title-solicite">¡Solicite su prueba gratis ahora!</h2>
                </div>
                
                <div className="col-lg-6">
                    <div className="btn-prueba-gratis">
                        <Link className="btn wa-btn-prueba-gratis btn-gratis-dos"
                            activeClass="active"
                            to="formulario"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Obtén prueba gratis de 10 días
                        </Link>
                    </div>


                </div>
            </div>
        </div>

    </section>
    

  )
}

export default QuienesSomos
