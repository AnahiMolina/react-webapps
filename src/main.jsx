import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Colores from './Pages/Colores'
import Caracteres from './Pages/Caracteres'
import Inicio from './Pages/Inicio'
import './assets/css/index.css'
import Referencias from './Pages/Referencias'
import Reloj from './Pages/Reloj'
import Calculadora from './Pages/Calculadora'
import Contexto from './Pages/Contexto'
import Storage from './Pages/Storage'
import Clima from './Pages/Clima'
import InfoClima from './Pages/InfoClima'
import ToDo from './Pages/ToDo'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio />}/>
      <Route path='/colores' element={<Colores />}/>
      <Route path='/caracteres' element={<Caracteres />}/>
      <Route path='/reloj' element={<Reloj />}/>
      <Route path='/calculadora' element={<Calculadora />}/>
      <Route path='/referencias' element={<Referencias/>}/>
      <Route path='/contexto' element={<Contexto />}/>
      <Route path='/storage' element={<Storage />}/>
      <Route path='/clima' element={<Clima />}/>
      <Route path='/infoclima' element={<InfoClima />}/>
      <Route path='/storage' element={<Storage />}/>
      <Route path='/tareas' element={<ToDo />}/>
    </Routes>
  </BrowserRouter>,
)
