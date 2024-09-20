import React from 'react'
import Tarjetas from '../components/Tarjetas'
import Navbar from '../components/Navbar'
//import Carousel from '../components/Carousel'

export default function Inicio() {
  return (
    <>
      <div className="inicio">
        <Navbar />
        <div className="container-fluid">

          {/* <div className="container pt-4 pb-4">
            <div className="p-5 bg-primary text-white rounded">
              <div className="row">
                <div className="col-md-8">
                  <h1 className='display-5 fw-bold'>
                    <i className='bi bi-airplane' /> &nbsp;&nbsp;WebApps
                  </h1>
                  <p>
                    ¡Bienvenido a nuestro repositorio de webapps desarrolladas con React!
                  </p>
                </div>
                <div className="col-md-4 mt-1 mb-2">
                  <Carousel
                    link1="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"
                    link2="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                    link3="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  />
                </div>
                <hr />
              </div>
              <p>
                Aquí encontrarás una colección de aplicaciones web  construidas utilizando la biblioteca de JavaScript, React. Desde aplicaciones simples hasta proyectos más complejos, hemos reunido una variedad de ejemplos para mostrar el potencial y la versatilidad de Vite React en el desarrollo web moderno.
              </p>
            </div>
          </div> */}

          <div className="container mt-1">
            <div className="d-flex justify-content-center m-4">
              <h1>Aplicaciones</h1>
            </div>
            <div className="row pb-5">
              <div className="col-md-4">
                <div className="d-flex justify-content-evenly">
                  <Tarjetas icono='bi bi-palette' link='/colores' nombre='Colores' />
                  <Tarjetas icono='bi bi-pen' link='/caracteres' nombre='Caracteres' />
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-evenly">
                  <Tarjetas icono='bi bi-stopwatch' link='/reloj' nombre='Reloj' />
                  <Tarjetas icono='bi bi-calculator' link='/calculadora' nombre='Calculadora' />
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-evenly">
                  <Tarjetas icono='bi bi-cloud-sun' link='/clima' nombre='Clima' />
                  <Tarjetas icono='bi bi-check2-circle' link='/tareas' nombre='Tareas' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}