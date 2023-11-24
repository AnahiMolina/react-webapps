import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav" id='texto'>

                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className='bx bx-home-alt-2 bx-tada-hover' />Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/colores">
                            <i className='bx bx-palette bx-tada-hover' />Colores</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/caracteres">
                            <i className='bx bx-file-find bx-tada-hover' />Caracteres</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reloj">
                            <i className='bx bx-time-five bx-tada-hover' />Reloj</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/calculadora">
                            <i className='bx bx-calculator bx-tada-hover' />Calculadora</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/clima">
                            <i className='bx bx-sun bx-tada-hover' />Clima</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tareas">
                            <i className='bx bx-clipboard bx-tada-hover' />Tareas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contrasenias">
                            <i className='bx bx-dialpad-alt bx-tada-hover' />Contraseñas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/storage">
                            <i className='bx bx-ghost bx-tada-hover' />Storage</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
