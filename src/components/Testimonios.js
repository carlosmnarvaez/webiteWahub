import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
//import ReactPlayer from "react-player";
import { video1, video2 } from "../assets";

function Testimonios() {

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

        <div className="container section3">
                <div className="row">

                
                    <div className="col-lg-12 wa-title-section3">
                        <h6>HAZ QUE TU EMPRESA COBRE VIDA</h6>
                        <h2>Escucha emprendedores que <b>confiaron en Wahub</b></h2>
                        <Link className="btn wa-btnLeft-banner"
                            activeClass="active"
                            to="formulario"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Obten una prueba <b>gratis</b> por 7 días
                        </Link>
                    </div>

                    <div className="col-lg-4 text-white">

                        <video className="wa-content-video"
                            width="100%"
                            ref={videoRef}
                            pause={false}
                            controls
                            poster={video1}
                            src={require("./../assets/videos/video1.mp4")}
                        ></video>

                    </div>

                    <div className="col-lg-4 text-white">
                        <video className="wa-content-video"
                            width="100%"
                            ref={videoRef}
                            pause={false}
                            controls
                            poster={video2}
                            src={require("./../assets/videos/video2.mp4")}
                        ></video>

                    </div>

                    {/* <div className="col-lg-4 text-white">
                        
                        <ReactPlayer className="wa-content-video"
                            url={require("./../assets/videos/video1.mp4")}
                            width="100%"
                            height="600px"
                            controls
                            light = {video3}
                            config={{ file: { attributes: {
                                autoPlay: true,
                                muted: false
                                }}}}
                        />

                    </div> */}
                    

                </div>
        </div>

    

  )
}

export default Testimonios
