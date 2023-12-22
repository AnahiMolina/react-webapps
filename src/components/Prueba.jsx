import React from 'react';
import { Link } from 'react-router-dom';

export default function Prueba() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark stiky-top">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <Link className="nav-link" to="/">
                        <i className='bx bxs-plane-alt bx-tada-hover' /> WebApps
                    </Link>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/contrasenias">
                                <i className='bx bx-shield bx-tada-hover' /> Contraseñas
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">WebApps Menú</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        <div className="offcanvas-body">
                            <p>Aplicaciones</p>
                            <p>Aplicaciones</p>
                            <p>Aplicaciones</p>
                            <p>Aplicaciones</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
