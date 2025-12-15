import React, { useEffect, useState } from 'react'
import Contenedor from '../Layouts/Contenedor'

export default function ApiClima() {
  const [ciudad, setCiudad] = useState('')
  const [temp, setTemp] = useState('20')
  const [tmax, setTmax] = useState('25')
  const [tmin, setTmin] = useState('17')
  const [flike, setFlike] = useState('23')
  const [desc, setDesc] = useState('Soleado')
  const [icono, setIcono] = useState('x')
  const [mostrarInput, setMostrarInput] = useState(false);

  useEffect(() => {
  fetch(`${import.meta.env.VITE_WEATHER_API_URL}/teziutlan/EN`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
    }
  })
          .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error fetching data:', error));
}, [])

  return (
    <Contenedor>
      <div>ApiClima</div>
      Ciudad: {ciudad}
      <br />
      Temp actual: {temp}
      <br />
      Temp max: {tmax}
      <br />
      Temp min: {tmin}
      <br />
      Feel like: {flike}
      <br />
      Descripcion: {desc}
    </Contenedor>
  )
}
