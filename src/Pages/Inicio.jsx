import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Inicio() {
    return (
        <div id='background'>
            <Navbar />
            <div className='container-fluid-sm'>
                <div id='inicio' className='container-sm'>
                    <div className='text-center titulos'>
                        <h1>WebApps</h1>
                        <i className='bx bxl-react bx-spin-hover bx-lg'></i>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-5">
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
                        <div className="col-md-3 mb-5">
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
                        <div className="col-md-3 mb-5">
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
                        <div className="col-md-3 mb-5">
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
        </div>
    )
}
