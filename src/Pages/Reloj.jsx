import React, { useEffect, useRef } from 'react'
import Contenedor from '../Layouts/Contenedor'

export default function Reloj() {
  const relojRef = useRef(null)
  const fechaRef = useRef(null)

  useEffect(() => {
    function actualizarReloj() {
      const now = new Date()
      relojRef.current.textContent = now.toLocaleTimeString()
      fechaRef.current.textContent = obtenerFechaConFormato(now)
    }

    const intervalId = setInterval(actualizarReloj, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const obtenerFechaConFormato = (fecha) => {
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' }
    return fecha.toLocaleDateString('es-ES', opciones)
  }

  return (
    <>
      <Contenedor titulo='Reloj' icono='bi bi-stopwatch' clase=''>
        <div className='row'>
          <div className='col-12'>
            <div id='tiempo'>
              <div className='text-center mt-2' ref={relojRef} />
            </div>
            <div className='text-end mt-5'>
              <h4 ref={fechaRef} />
            </div>
          </div>
        </div>
      </Contenedor>
    </>
  )
}
