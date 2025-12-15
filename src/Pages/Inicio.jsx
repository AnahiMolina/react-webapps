import React from 'react'
import Tarjetas from '../components/Tarjetas'
import Navbar from '../components/Navbar'

export default function Inicio() {
  return (
    <div className="inicio">
      <Navbar />

      <div className="container py-4">
        <h1 className="text-center mb-5">Aplicaciones</h1>

        <div className="row g-4 justify-content-center">

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Tarjetas icono="bi bi-palette" link="/colores" nombre="Colores" />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Tarjetas icono="bi bi-pen" link="/caracteres" nombre="Caracteres" />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Tarjetas icono="bi bi-stopwatch" link="/reloj" nombre="Reloj" />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Tarjetas icono="bi bi-calculator" link="/calculadora" nombre="Calculadora" />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Tarjetas icono="bi bi-cloud-sun" link="/clima" nombre="Clima" />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Tarjetas icono="bi bi-check2-circle" link="/tareas" nombre="Tareas" />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Tarjetas icono="bi bi-gear" link="/generar" nombre="Generar contraseña" />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Tarjetas icono="bi bi-bag-check" link="/seguridad" nombre="Verificar contraseña" />
          </div>
        </div>
        
      </div>
    </div>
  )
}
