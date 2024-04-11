import React, { useRef, useState } from 'react';
import Alerta from '../components/Alerta';
import Contenedor from '../Layouts/Contenedor';

export default function SeguridadContr() {
  const [textoSeguridad, setTextoSeguridad] = useState('')
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [contrasena, setContrasena] = useState('')
  const progressBarRef = useRef(null)
  const alertaRef = useRef(null)

  const Copiar = () => {
    alertaRef.current.mostrarAlerta()
    navigator.clipboard.writeText(contrasena);
  }

  function calcularSeguridad(contrasena) {
    let seguridad = 0

    if (contrasena.length >= 8) {
      seguridad = seguridad + 2
    } else {
      seguridad = seguridad + 1
    }

    if (/(?=.*[a-z])/.test(contrasena)) {
      seguridad = seguridad + 1
    }
    if (/\d/.test(contrasena)) {
      seguridad = seguridad + 1
    }
    if (/^(?=(?:.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¡¿¨´~`Ññ]){1,})(?=.*\d).*$/.test(contrasena)) {
      seguridad = seguridad + 2
    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¡¿¨´~`Ññ]/.test(contrasena)) {
      seguridad = seguridad + 2
    }
    if (/^(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¡¿¨´~`Ññ]).+$/.test(contrasena)) {
      seguridad = seguridad + 3
    }
    if (/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¡¿¨´~`Ññ]).*$/.test(contrasena)) {
      seguridad = seguridad + 3
    }
    if (/(?=.*[a-z])(?=.*[A-Z])/.test(contrasena)) {
      seguridad = seguridad + 4
    }
    if (/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(contrasena)) {
      seguridad = seguridad + 4
    }
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¡¿¨´~`Ññ]).+$/.test(contrasena)) {
      seguridad = seguridad + 5
    }
    if (/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¡¿¨´~`Ññ]+$/.test(contrasena)) {
      seguridad = seguridad + 16
    }
    return seguridad;
  }

  function actualizarBarra(seguridad) {
    let barra = '';
    let texto = '';
    let porcentaje = 0;

    if (seguridad >= 20) {
      barra = 'seguridadAlta'
      texto = 'Seguridad alta'
      porcentaje = 100
    } else if (seguridad >= 7 && seguridad < 20) {
      barra = 'seguridadMedia'
      texto = 'Seguridad media'
      porcentaje = 60
    } else if (seguridad > 0 && seguridad < 7) {
      barra = 'seguridadBaja'
      texto = 'Seguridad baja'
      porcentaje = 20
    } else {
      barra = 'seguridadBaja2'
      texto = 'Seguridad muy baja'
      porcentaje = 5
    }

    setTextoSeguridad(texto)

    progressBarRef.current.className = `progress-bar ${barra}`
    progressBarRef.current.style.width = `${porcentaje}%`
    progressBarRef.current.setAttribute('aria-valuenow', porcentaje)
  }

  const ChangePassword = (event) => {
    const newPassword = event.target.value
    setContrasena(newPassword)
    const seguridad = calcularSeguridad(newPassword)
    actualizarBarra(seguridad)
  }

  return (
    <>
      <Contenedor titulo='Verificar Seguridad' icono='fa-solid fa-lock' clase=''>
        <br />
        <div className='row'>
          <div className='col-md-12'>
            <div className="input-group">
              <input onChange={ChangePassword} type={mostrarContraseña ? "text" : "password"} className="form-control input_seguridad" placeholder='Escribe tu contraseña...' />
              <span className="input-group-text" onClick={() => setMostrarContraseña(!mostrarContraseña)}>
                {mostrarContraseña ? <i className='bx bx-hide' /> : <i className='bx bx-show' />}
              </span>
              <span className="input-group-text" onClick={Copiar}>
                <i className='bx bx-copy' />
              </span>
            </div>
            <div className="progress mt-1" role="progressbar" aria-label="Seguridad" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" ref={progressBarRef}></div>
            </div>
            <br />
            <h3>{textoSeguridad}</h3>
          </div>
        </div>
        <Alerta estilo='info' mensaje='Texto Copiado' ref={alertaRef} />
      </Contenedor >
    </>
  );
}