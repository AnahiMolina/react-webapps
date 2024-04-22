import React, { useEffect,useState, useRef } from 'react'
import Contenedor from '../Layouts/Contenedor'

export default function GenerarContr() {
  const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const minusculas = 'abcdefghijklmnopqrstuvwxyz'
  const simbolos = '!@#$%&*()_+~ñÑ[];?><,./ç\-='
  const numeros = '0123456789'

  const [contrasenia, setContrasenia] = useState('')
  const [longitud, setLongitud] = useState(8)
  const [incluyeMayusculas, setIncluyeMayusculas] = useState(true)
  const [incluyeMinusculas, setIncluyeMinusculas] = useState(true)
  const [incluyeNumeros, setIncluyeNumeros] = useState(true)
  const [incluyeSimbolos, setIncluyeSimbolos] = useState(true)
  const [textoSeguridad, setTextoSeguridad] = useState('')

  const progressBarRef = useRef(null)
  const popoverTriggerRef = useRef(null)
  const popoverRef = useRef([])

  function crear(longitud) {
    let caracteres = ''
    let nuevaContrasenia = ''

    if (incluyeMayusculas) caracteres += mayusculas
    if (incluyeMinusculas) caracteres += minusculas
    if (incluyeNumeros) caracteres += numeros
    if (incluyeSimbolos) caracteres += simbolos

    if (caracteres !== '') {
      for (let i = 0; i < longitud; i++) {
        const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        nuevaContrasenia += caracterAleatorio;
      }
      const seguridad = calcularSeguridad(nuevaContrasenia);
      actualizarBarra(seguridad);
      setContrasenia(nuevaContrasenia);
    } else {
      return (
        alert('Selecciona un tipo de caracter'))
    }

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

  function copiar() {
    navigator.clipboard.writeText(contrasenia)
  }

  useEffect(() => {
    if (popoverTriggerRef.current) {
      const popoverTriggerEl = popoverTriggerRef.current;
      const popover = new bootstrap.Popover(popoverTriggerEl);
      popoverRef.current.push(popover);
    }

    return () => {
      popoverRef.current.forEach(popover => {
        popover.dispose();
      });
    };
  }, []);

  return (
    <>
      <Contenedor titulo='Contraseñas' icono='bi bi-gear' clase=''>
        <div className='row d-flex justify-content-center'>
          <div className='col-4'>
            <div className='card'>
              <ul className="list-group list-group-flush">
                <li className="list-group-item mt-2">
                  <h6>Longitud:</h6>
                  <input type='number' className='input form-control' placeholder='Escribe la longitud...' value={longitud} onChange={(e) => setLongitud(parseInt(e.target.value))} />
                </li>
                <li className="list-group-item mt-2 center">
                  <h6>Caracteres: </h6>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="mayusculas" checked={incluyeMayusculas} onChange={() => setIncluyeMayusculas(!incluyeMayusculas)} />
                    <label className="form-check-label" htmlFor="mayusculas">Mayúsculas</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="minusculas" checked={incluyeMinusculas} onChange={() => setIncluyeMinusculas(!incluyeMinusculas)} />
                    <label className="form-check-label" htmlFor="minusculas">Minúsculas</label>
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
                <li className="list-group-item">
                  <button onClick={() => crear(longitud)} className="btn btn-primary w-100 mt-3">
                    Crear
                  </button>
                  <button ref={popoverTriggerRef} type="button" onClick={() => copiar()} className="btn btn-primary w-100 mt-3"  data-bs-toggle="popover" data-bs-placement="right"
                  data-bs-content="¡Contraseña Copiada!">
                    Copiar
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-8'>
            <input type="text" className="input form-control input_seguridad" value={contrasenia} readOnly />
            <div className="progress mt-1" role="progressbar" aria-label="Seguridad" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" ref={progressBarRef}></div>
            </div>
            <br />
            <h3>{textoSeguridad}</h3>
          </div>
        </div>
      </Contenedor>
    </>
  )
}
