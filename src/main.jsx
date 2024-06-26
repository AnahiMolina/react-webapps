import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Colores from './Pages/Colores'
import Caracteres from './Pages/Caracteres'
import Inicio from './Pages/Inicio'
import './assets/css/index.css'
import './assets/css/clima.css'
import './assets/css/scroll.css'
import Reloj from './Pages/Reloj'
import Calculadora from './Pages/Calculadora'
import Clima from './Pages/Clima'
import ToDo from './Pages/ToDo'
import GenerarContr from './Pages/GenerarContr'
import SeguridadContr from './Pages/SeguridadContr'
import ApiClima from './Pages/ApiClima'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter basename='/react-webapps/'>
    <Routes>
      <Route path='/' element={<Inicio />}/>
      <Route path='/colores' element={<Colores />}/>
      <Route path='/caracteres' element={<Caracteres />}/>
      <Route path='/reloj' element={<Reloj />}/>
      <Route path='/calculadora' element={<Calculadora />}/>
      <Route path='/clima' element={<Clima />}/>
      <Route path='/tareas' element={<ToDo />}/>
      <Route path='/generar' element={<GenerarContr />}/>
      <Route path='/seguridad' element={<SeguridadContr />} />
      <Route path='/apiclima' element={<ApiClima />}/>
    </Routes>
  </BrowserRouter>,
)

