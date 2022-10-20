import React from "react";
import { logoBlanco } from "../assets";

function Footer() {

  return (


    <div>
        <footer className="py-5 bg-dark d-flex flex-wrap justify-content-between align-items-center">
            <p className="col-md-4 mb-0">© 2022 Wahub for business</p>
            <a href="./" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                 <img className='logo-footer' src={logoBlanco} alt=""/>
            </a>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="./terminos-y-condiciones" className="nav-link px-2">Preguntas frecuentes</a></li>
                <li className="nav-item"><a href="./terminos-y-condiciones" className="nav-link px-2">Terminos y condiciones</a></li>
            </ul>
        </footer>
    </div>
    

  )
}

export default Footer
