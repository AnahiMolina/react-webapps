import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Inicio() {
    return (
        <>
            <Navbar />
            <div id='background' className='container-fluid'>
                <div className='text-center titulos'>
                    <h1>WebApps</h1>
                    <i className='bx bxs-heart bx-burst bx-lg'></i>
                </div>
                <div id='inicio' className='container'>
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
