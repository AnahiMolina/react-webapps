import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Alerta from '../components/Alerta';

export default function Contrasenias() {
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';
    const simbolos = '!@#$%^&*()_+~`}{[]:;?><,./-=';
    const numeros = '0123456789';

    const [contrasenia, setContrasenia] = useState('');
    const [longitud, setLongitud] = useState(8);
    const [incluyeLetras, setIncluyeLetras] = useState(true);
    const [incluyeNumeros, setIncluyeNumeros] = useState(true);
    const [incluyeSimbolos, setIncluyeSimbolos] = useState(true);
    const [textoSeguridad, setTextoSeguridad] = useState('')

    let maxima = new RegExp('^(?=.*[A-Z]{2})(?=.*[0-9]{2})(?=.*[!@#$%^&*]{2})(?=.*[a-z])[A-Za-z0-9!@#$%^&*]{10,}$')

    let alta = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?=.*[a-zA-Z\d@#$%^&+=]).{8,9}$')
    let media = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z]).{7,}$')
    let baja = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$')

    function calcularFortaleza(contraseña) {
        let seguridad = 0;

        if (maxima.test(contraseña)) {
            seguridad = 100;
        } else if (alta.test(contraseña)) {
            seguridad = 90;
        } else if (media.test(contraseña)) {
            seguridad = 50;
        } else if (baja.test(contraseña)) {
            seguridad = 25
        } else {
            seguridad = 1
        }
        return seguridad;
    }

    function actualizarBarra(seguridad) {
        const progressBar = document.getElementById('seguridad');
        let barraClass = '';
        let texto = '';

        if (seguridad == 100) {
            barraClass = 'seguridadMaxima';
            texto = 'Seguridad Maxima'
        } else if (seguridad == 90) {
            barraClass = 'seguridadAlta';
            texto = 'Seguridad Alta'
        } else if (seguridad == 50) {
            barraClass = 'seguridadMedia';
            texto = 'Seguridad Media'
        } else  if (seguridad == 25){
            barraClass = 'seguridadBaja'
            texto = 'Seguridad Baja'
        } else {
            barraClass = 'seguridadNula'
            texto = 'Seguridad Nula'
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
        alert('Contraseña copiada al portapapeles');
    }


    return (
        <>
            <Navbar />
            <div id='background' className='container-fluid'>
                <div className='text-center titulos'>
                    <h1>Generar Contraseñas</h1>
                </div>
                <div id='contrasenia' className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h3>Personalizar</h3>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item mt-2">
                                        <h6>Longitud:</h6>
                                        <input type='number' className='input form-control' placeholder='Escribe la longitud...' value={longitud} onChange={(e) => setLongitud(parseInt(e.target.value))} />
                                    </li>
                                    <li className="list-group-item mt-2">
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
                                    <li className="list-group-item">Tercero</li>
                                </ul>
                            </div>
                            <button onClick={() => crear(longitud)} className="btn btn-primary PasBoton w-100 mt-3">Generar</button>
                            <button onClick={copiar} className="btn btn-primary PasBoton w-100 mt-3">Copiar</button><br />
                        </div>

                        <div className='col-8'>
                            <div className='card'>
                                <input type="text" className="input form-control PasMostrar" value={contrasenia} />
                            </div>
                            {/*Barra de progreso*/}
                            <div className="progress mt-1" role="progressbar" aria-label="Seguridad" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" id="seguridad"></div>
                            </div>
                            <h3>{textoSeguridad}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
