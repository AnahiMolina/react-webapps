import React from 'react'
import Contenedor from '../Layouts/Contenedor'
import Tarjetas from '../components/Tarjetas'

export default function Inicio() {
  return (
    <>
      <Contenedor titulo='' icono='' clase='inicio'>
      <div className='text-center titulos pt-0'>
        <h1>WebApps</h1>
        <i className='bx bxl-react bx-spin-hover bx-lg'></i>
      </div>
        <div className="row">
          <div className="col-md-3 mb-5">
            <Tarjetas link='/colores' nombre='Colores' />
          </div>
          <div className="col-md-3 mb-5">
            <Tarjetas link='/caracteres' nombre='Caracteres' />
          </div>
          <div className="col-md-3 mb-5">
            <Tarjetas link='/reloj' nombre='Reloj' />
          </div>
          <div className="col-md-3 mb-5">
            <Tarjetas link='/calculadora' nombre='Calculadora' />
          </div>
        </div>
      </Contenedor>
    </>
  )
}