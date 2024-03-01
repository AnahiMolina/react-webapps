import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function GenerarContr() {
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';
    const simbolos = '!@#$%^&*()_+~`}{[]:;?><,./-=';
    const numeros = '0123456789';

    const [contrasenia, setContrasenia] = useState('');
    const [longitud, setLongitud] = useState(10);
    const [incluyeLetras, setIncluyeLetras] = useState(true);
    const [incluyeNumeros, setIncluyeNumeros] = useState(true);
    const [incluyeSimbolos, setIncluyeSimbolos] = useState(true);
    const [textoSeguridad, setTextoSeguridad] = useState('')


    let alta = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})')
    let media = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    let baja = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$')

    function calcularFortaleza(contraseña) {
        let seguridad = 0;

        if (alta.test(contraseña)) {
            seguridad = 100;
        } else if (media.test(contraseña)) {
            seguridad = 50;
        } else if (baja.test(contraseña)) {
            seguridad = 25
        } else {
            seguridad = 5
        }
        return seguridad;
    }

    function actualizarBarra(seguridad) {
        const progressBar = document.getElementById('seguridad');
        let barraClass = '';
        let texto = '';

        if (seguridad == 100) {
            barraClass = 'seguridadAlta';
            texto = 'Seguridad Alta'
        } else if (seguridad == 50) {
            barraClass = 'seguridadMedia';
            texto = 'Seguridad Media'
        } else if (seguridad == 50) {
            barraClass = 'seguridadBaja';
            texto = 'Seguridad Baja'
        } else {
            barraClass = ''
            texto = 'Seguridad muy Baja'
        }

        setTextoSeguridad(texto)

        progressBar.className = `progress-bar ${barraClass}`;
        progressBar.style.width = `${seguridad}%`;
        progressBar.setAttribute('aria-valuenow', seguridad);
    }

    function crear(longitud) {
        let caracteres = '';
        let nuevaContrasenia = '';

        if (incluyeLetras) caracteres += letras;
        if (incluyeNumeros) caracteres += numeros;
        if (incluyeSimbolos) caracteres += simbolos;

        if (caracteres !== '') {
            //Crea la contraseña
            for (let i = 0; i < longitud; i++) {
                const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                nuevaContrasenia += caracterAleatorio;
            }
            //Calcular la seguridad
            const fortaleza = calcularFortaleza(nuevaContrasenia);
            actualizarBarra(fortaleza);
            setContrasenia(nuevaContrasenia);
        } else {
            //Mensaje cuando no se escoge un tipo de caracter
            return (
                alert('Selecciona un tipo de caracter'))
        }

    }

    function copiar() {
        navigator.clipboard.writeText(contrasenia)
            .then(() => alert('Contraseña copiada al portapapeles'))
            .catch(() => alert('No se pudo copiar la contraseña.'));
    }


    return (
        <>
            <div id='background' >
                <Navbar />
                <div className='container-fluid-sm'>
                    <div className='text-center titulos'>
                        <h1><i className='bx bx bx-shield bx-tada-hover bx-lg' /> Contraseñas</h1>
                    </div>
                    <div id='contrasenia' className='container-md'>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='card'>
                                    
                                        <ul className="list-group list-group-flush">

                                            <li className="list-group-item mt-2">
                                                <h6>Longitud:</h6>
                                                <input type='number' className='input form-control' placeholder='Escribe la longitud...' value={longitud} onChange={(e) => setLongitud(parseInt(e.target.value))} />
                                            </li>

                                            <li className="list-group-item mt-2 center">
                                                <h6>Caracteres: </h6>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="letras" checked={incluyeLetras} onChange={() => setIncluyeLetras(!incluyeLetras)} />
                                                    <label className="form-check-label" htmlFor="letras">Letras</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="numeros" checked={incluyeNumeros} onChange={() => setIncluyeNumeros(!incluyeNumeros)} />
                                                    <label className="form-check-label" htmlFor="numeros">Números</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="simbolos" checked={incluyeSimbolos} onChange={() => setIncluyeSimbolos(!incluyeSimbolos)} />
                                                    <label className="form-check-label" htmlFor="simbolos">Símbolos</label>
                                                </div>
                                            </li>

                                            <li className="list-group-item">
                                                <button onClick={() => crear(longitud)} className="btn btn-primary PasBoton w-100 mt-3">Generar</button>
                                                <button onClick={copiar} className="btn btn-primary PasBoton w-100 mt-3">Copiar</button><br />
                                            </li>

                                        </ul>
                                   
                                </div>
                            </div>
                            <div className='col-8'>
                                <input type="text" className="input form-control PasMostrar" value={contrasenia} readOnly/>
                                {/*Barra de progreso*/}
                                <div className="progress mt-1" role="progressbar" aria-label="Seguridad" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" id="seguridad"></div>
                                </div>
                                <h3>{textoSeguridad}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
