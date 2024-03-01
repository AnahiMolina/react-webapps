import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark stiky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <i className='bx bxs-plane-alt bx-tada-hover' /> WebApps
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/colores">
                                <i className='bx bx-palette bx-tada-hover' /> Colores
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/caracteres">
                                <i className='bx bx-file-find bx-tada-hover' /> Caracteres
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reloj">
                                <i className='bx bx-time-five bx-tada-hover' /> Reloj
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/calculadora">
                                <i className='bx bx-calculator bx-tada-hover' /> Calculadora
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/clima">
                                <i className='bx bx-sun bx-tada-hover' /> Clima
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tareas">
                                <i className='bx bx-task bx-tada-hover' /> Tareas
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className='bx bx-shield bx-tada-hover' /> Contraseñas
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/generar">
                                        <i className='bx bx-cog' /> Generar
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item disabled" aria-disabled='true' to="/seguridad">
                                        <i className="fa-solid fa-lock" /> Seguridad
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
