import React from 'react'
import Navbar from '../components/Navbar'

export default function Calculadora() {

    let operacion = "";
    let operadorActual = "";
    let operadorAnterior = "";
    let resultado = 0;

    function agregarNumero(numero) {
        operacion += numero;
        actualizarDisplay();
    }
    function agregarOperador(operador) {
        operadorAnterior = operadorActual;
        operadorActual = operador;
        operacion += operador;
        actualizarDisplay();
    }
    function limpiar() {
        operacion = "";
        operadorActual = "";
        operadorAnterior = "";
        resultado = 0;
        actualizarDisplay();
    }

    function calcular() {
        resultado = eval(operacion);
        operacion = resultado.toString();
        operadorActual = "";
        operadorAnterior = "";
        actualizarDisplay();
    }
    function actualizarDisplay() {
        document.getElementById("display").value = operacion;
    }
    return (
        <>
            <Navbar />
            <div id='background' className='container-fluid'>

                <div className='text-center titulos'>
                    <h1>Calculadora</h1>
                    <i className='bx bx-math bx-tada bx-lg'></i>
                </div>

                <div id='calculadora' className="container">
                    <div className='row'>
                        <div className='col-12' id='ingreso'>
                            <input type="text" className="input form-control" id="display" disabled />
                        </div>

                        <div id='teclado'>
                            <div className='col-12'>
                                <button onClick={() => agregarNumero(7)} className="btn numero">7</button>
                                <button onClick={() => agregarNumero(8)} className="btn numero">8</button>
                                <button onClick={() => agregarNumero(9)} className="btn numero">9</button>
                                <button onClick={() => agregarOperador('*')} className="btn operacion">*</button>
                            </div>

                            <div className='col-12'>
                                <button onClick={() => agregarNumero(4)} className="btn numero">4</button>
                                <button onClick={() => agregarNumero(5)} className="btn numero">5</button>
                                <button onClick={() => agregarNumero(6)} className="btn numero">6</button>
                                <button onClick={() => agregarNumero('+')} className="btn operacion">+</button>
                            </div>

                            <div className='col-12'>
                                <button onClick={() => agregarNumero(1)} className="btn numero">1</button>
                                <button onClick={() => agregarNumero(2)} className="btn numero">2</button>
                                <button onClick={() => agregarNumero(3)} className="btn numero">3</button>
                                <button onClick={() => agregarNumero('-')} className="btn operacion">-</button>
                            </div>

                            <div className='col-12'>
                                <button onClick={() => agregarNumero(0)} className="btn numero">0</button>
                                <button onClick={() => limpiar()} className="btn operacion">C</button>
                                <button onClick={() => calcular()} className="btn operacion">=</button>
                                <button onClick={() => agregarOperador('/')} className="btn operacion">/</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
