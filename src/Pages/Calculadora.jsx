import React from 'react'
import Contenedor from '../Layouts/Contenedor';

export default function Calculadora() {
  let operacion = "";
  let operadorActual = "";
  let operadorAnterior = "";
  let resultado = 0;

  function agregarNum(numero) {
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
  function calculo() {
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
      <Contenedor titulo='Calculadora' icono='bx bx-calculator' clase='calculadora'>
        <div className='row d-flex justify-content-center'>
          <div className='col-sm-5'>
            <div className='card p-4'>
              <input type="text" className="input form-control input_seguridad mb-4" id="display" disabled />
              <div className='col-12 d-flex justify-content-between'>
                <button onClick={() => agregarNum(7)} className="btn btn-numero">7</button>
                <button onClick={() => agregarNum(8)} className="btn btn-numero">8</button>
                <button onClick={() => agregarNum(9)} className="btn btn-numero">9</button>
                <button onClick={() => agregarOperador('/')} className="btn btn-tecla" >÷</button>
              </div>
              <div className='col-12 d-flex justify-content-between'>
                <button onClick={() => agregarNum(4)} className="btn btn-numero">4</button>
                <button onClick={() => agregarNum(5)} className="btn btn-numero">5</button>
                <button onClick={() => agregarNum(6)} className="btn btn-numero">6</button>
                <button onClick={() => agregarOperador('*')} className="btn btn-tecla" >×</button>
              </div>
              <div className='col-12 d-flex justify-content-between'>
                <button onClick={() => agregarNum(1)} className="btn btn-numero">1</button>
                <button onClick={() => agregarNum(2)} className="btn btn-numero">2</button>
                <button onClick={() => agregarNum(3)} className="btn btn-numero">3</button>
                <button onClick={() => agregarNum('-')} className="btn btn-tecla" >–</button>
              </div>
              <div className='col-12 d-flex justify-content-between'>
                <button onClick={() => agregarNum(0)} className="btn btn-numero">0</button>
                <button onClick={() => limpiar()} className="btn btn-tecla" >C</button>
                <button onClick={() => calculo()} className="btn btn-tecla" >=</button>
                <button onClick={() => agregarNum('+')} className="btn btn-tecla" >+</button>
              </div>
            </div>
          </div>
        </div>
      </Contenedor>
    </>
  )
}