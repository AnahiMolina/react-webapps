import React from 'react'
import Tarjetas from '../components/Tarjetas'
import Navbar from '../components/Navbar'
//import Carousel from '../components/Carousel'

export default function Inicio() {
  return (
    <>
      <div className="inicio">
        <Navbar />
        <div className="container-fluid">

          <div className="container mt-1">
            <div className="d-flex justify-content-center m-4">
              <h1>Aplicaciones</h1>
            </div>
            <div className="row pb-5">
              <div className="col-md-4">
                <div className="d-flex justify-content-evenly">
                  <Tarjetas icono='bi bi-palette' link='/colores' nombre='Colores' />
                  <Tarjetas icono='bi bi-pen' link='/caracteres' nombre='Caracteres' />
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-evenly">
                  <Tarjetas icono='bi bi-stopwatch' link='/reloj' nombre='Reloj' />
                  <Tarjetas icono='bi bi-calculator' link='/calculadora' nombre='Calculadora' />
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-evenly">
                  <Tarjetas icono='bi bi-cloud-sun' link='/clima' nombre='Clima' />
                  <Tarjetas icono='bi bi-check2-circle' link='/tareas' nombre='Tareas' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}