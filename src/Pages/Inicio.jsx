import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NavbarRigth from '../components/NavbarRigth'

export default function Inicio() {
    return (
        <>
            <NavbarRigth />
            <div id='background' className='container-fluid-sm'>
                <div id='inicio' className='container-sm'>
                    <div className='text-center titulos mt-5'>
                        <h1>WebApps</h1>
                        <i className='bx bxs-heart bx-burst-hover bx-lg'></i>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body c2">
                                    <Link to='/colores'>
                                        <div className='center text-center'>
                                            Colores
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body c2">
                                    <Link to='/caracteres'>
                                        <div className='center'>
                                            Caracteres
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body c2">
                                    <Link to='/reloj'>
                                        <div className='center text-center'>
                                            Reloj
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body c2">
                                    <Link to='/calculadora'>
                                        <div className='center text-center'>
                                            Calculadora
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
