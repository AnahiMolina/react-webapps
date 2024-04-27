import React, { useRef } from 'react'
import Contenedor from '../Layouts/Contenedor'

export default function Calculadora() {
  const displayRef = useRef(null)
  let operacion = ""

  function agregarCaracter(caracter) {
    if (caracter === '.' && operacion.split(/[+\-*\/]/).pop().includes('.')) {
      return
    }
    operacion += caracter
    actualizarDisplay()
  }

  function limpiar() {
    operacion = ""
    actualizarDisplay()
  }

  function calcular() {
    const resultado = eval(operacion);
    operacion = resultado.toString();
    actualizarDisplay();
  }

  function calcularRaiz() {
    const resultado = Math.sqrt(eval(operacion));
    operacion = resultado.toString();
    actualizarDisplay();
  }

  function actualizarDisplay() {
    displayRef.current.value = operacion;
  }

  return (
    <>
      <Contenedor titulo='Calculadora' icono='bi bi-calculator' clase='calculadora'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-4'>
            <div className='card p-4'>
              <input type="text" className="input form-control input_seguridad mb-4" ref={displayRef} disabled />
              <div className='col-md-12 d-flex justify-content-between mb-1'>
                <button onClick={() => limpiar()} className="btn btn-tecla" >CE</button>
                <button onClick={() => calcularRaiz()} className="btn btn-tecla" >√</button>
                <button onClick={() => agregarCaracter('**')} className="btn btn-tecla" >^</button>
                <button onClick={() => agregarCaracter('+')} className="btn btn-tecla" >+</button>
              </div>
              <div className='col-md-12 d-flex justify-content-between mb-1'>
                <button onClick={() => agregarCaracter('7')} className="btn btn-numero">7</button>
                <button onClick={() => agregarCaracter('8')} className="btn btn-numero">8</button>
                <button onClick={() => agregarCaracter('9')} className="btn btn-numero">9</button>
                <button onClick={() => agregarCaracter('/')} className="btn btn-tecla" >÷</button>
              </div>
              <div className='col-md-12 d-flex justify-content-between mb-1'>
                <button onClick={() => agregarCaracter('4')} className="btn btn-numero">4</button>
                <button onClick={() => agregarCaracter('5')} className="btn btn-numero">5</button>
                <button onClick={() => agregarCaracter('6')} className="btn btn-numero">6</button>
                <button onClick={() => agregarCaracter('*')} className="btn btn-tecla" >×</button>
              </div>
              <div className='col-md-12 d-flex justify-content-between mb-1'>
                <button onClick={() => agregarCaracter('1')} className="btn btn-numero">1</button>
                <button onClick={() => agregarCaracter('2')} className="btn btn-numero">2</button>
                <button onClick={() => agregarCaracter('3')} className="btn btn-numero">3</button>
                <button onClick={() => agregarCaracter('-')} className="btn btn-tecla" >–</button>
              </div>
              <div className='col-md-12 d-flex justify-content-between'>
                <button onClick={() => agregarCaracter('0')} className="btn btn-numero">0</button>
                <button onClick={() => agregarCaracter('.')} className="btn btn-tecla" > . </button>
                <button onClick={() => calcular()} style={{ width: '46%' }} className="btn btn-tecla" >=</button>
              </div>
            </div>
          </div>
        </div>
      </Contenedor>
    </>
  )
}
