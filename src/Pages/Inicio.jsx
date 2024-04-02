import React from 'react'
import Contenedor from '../Layouts/Contenedor'
import Tarjetas from '../components/Tarjetas'
import SeguridadContr from './SeguridadContr'

export default function Inicio() {
  return (
    <>
      <Contenedor titulo='WebApps' icono='bx bxl-react bx-spin-hover bx-lg' clase='inicio'>
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
          <div className="col-md-3 mb-5">
            <Tarjetas link='tareas' nombre='Tareas' />
          </div>
        </div>
      </Contenedor>
    </>
  )
}