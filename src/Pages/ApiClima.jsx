import React, { useEffect, useState } from 'react'
import Contenedor from '../Layouts/Contenedor'

export default function ApiClima() {

  /* useEffect(() => {
      fetch('https://open-weather13.p.rapidapi.com/city/landon/EN', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1ff5db47e1mshd8979973b83c92ap1a7067jsn39c2272184df',
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
      })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error fetching data:', error));
    }, []); */

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
