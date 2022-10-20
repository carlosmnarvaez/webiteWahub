import React from 'react';
import { useForm } from './useForm';

export const Formulario = () => {

    const [formValues, handleInputChange] = useForm({
        nombre: "",
        correo: "",
        nombreEmpresa: "",
        phone: ""
    })

    const {nombre, correo, nombreEmpresa, phone} = formValues

    const event = (e) => {
        e.preventDefault()
        let numero = 573025674802;
        window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20%2A${nombre}%2A%0D%0A%0D%0A%2ADatos+de+contacto%2A%0A%0D%0A%0D%2ACorreo:%2A%20${correo}%0A%0D%2ANombre+de+mi+negocio:*%20${nombreEmpresa}%0A%0D%2ANumero+de+contacto:*%20${phone}%0A%0D%2AAsunto:%2A%20Quiero%20probar%20Wahub%20por%2015%20días`,'_blank');
        console.log(formValues);
    }

    return (
        
        <>
            <form onSubmit={event} className='formulario'>
                <div className='box'>
                    <h2>Solicite su prueba <span>gratis de 15 días</span></h2>
                </div>
                <div className="box">
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Nombre Completo"
                        value={nombre}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                
                <div className="box">
                    <input
                        type="text"
                        name="nombreEmpresa"
                        id="nombreEmpresa"
                        placeholder="Nombre de tu negocio"
                        value={nombreEmpresa}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="box">
                    {/* <label htmlFor='correo'>Correo</label> */}
                    <input
                        type="email"
                        name="correo"
                        id="correo"
                        placeholder="Email"
                        value={correo}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="box">
                   {/*  <label htmlFor='mensaje'>mensaje</label> */}
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Teléfono"
                        value={phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='box'>
                    <input
                        id='check'
                        type="checkbox"
                        required
                    />
                    <p>Acepto <a href='./terminos-y-condiciones'>terminos y Condiciones</a>, oferta de prueba gratis unicamente para nuevos usuarios.</p>
                </div>
                <div className="box">
                    <button className="wa-btn-submit" type='submit'>Enviar</button>
                </div>
            </form>
        </>
    );
}

//export default Formulario;
