import React from 'react'
import { Link } from 'react-router-dom'


export default function NavbarRigth() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">

                <Link className="nav-link navbar-brand" to="/">
                    <i className='bx bxs-plane-alt bx-tada-hover' /> WebApps
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">WebApps Menú</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <p>Aplicaciones</p>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mt-3 mb'3">
                            <ul>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        <i className='bx bx-home-alt-2 bx-tada-hover' /> Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/colores">
                                        <i className='bx bx-palette bx-tada-hover' /> Colores</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/caracteres">
                                        <i className='bx bx-file-find bx-tada-hover' /> Caracteres</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reloj">
                                        <i className='bx bx-time-five bx-tada-hover' /> Reloj</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/calculadora">
                                        <i className='bx bx-calculator bx-tada-hover' /> Calculadora</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/clima">
                                        <i className='bx bx-sun bx-tada-hover' /> Clima</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tareas">
                                        <i className='bx bx-clipboard bx-tada-hover' /> Tareas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contrasenias">
                                        <i className='bx bx-dialpad-alt bx-tada-hover' /> Contraseñas</Link>
                                </li>
                            </ul>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pruebas
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link className="dropdown-item" to="/storage">Storage</Link></li>
                                    <li><Link className="dropdown-item" to="/referencias">Referencias</Link></li>
                                    <li><Link className="dropdown-item" to="/contexto">Contextos</Link></li>
                                    <li><Link className="dropdown-item" to="/infoclima">Info Clima</Link></li>
                                    <li><Link className="dropdown-item" to="/prueba">Nabvar Right</Link></li>
                                    <li><Link className="dropdown-item" to="/navbar1">Nabvar Top</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
