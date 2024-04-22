import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className='bi bi-airplane-engines' /> WebApps
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/colores">
                <i className='bi bi-palette' /> Colores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/caracteres">
                <i className='bi bi-pen' /> Caracteres
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reloj">
                <i className='bi bi-stopwatch' /> Reloj
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculadora">
                <i className='bi bi-calculator' /> Calculadora
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clima">
                <i className='bi bi-cloud-sun' /> Clima
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tareas">
                <i className='bi bi-check2-circle' /> Tareas
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className='bi bi-shield-lock' /> Contraseñas
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/generar">
                    <i className='bi bi-gear' /> Generar
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/seguridad">
                    <i className="bi bi-bag-check" /> Seguridad
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

