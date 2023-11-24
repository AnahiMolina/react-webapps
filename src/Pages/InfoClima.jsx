import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';


export default function InfoClima() {

/*
  fetch('https://meteostat.p.rapidapi.com/stations/hourly?station=10637&start=2020-01-01&end=2020-01-01&tz=Europe%2FBerlin',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1ff5db47e1mshd8979973b83c92ap1a7067jsn39c2272184df',
        'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
      }
    }
  )
    .then(response => response.json())
    .then(json => console.log(json))
*/
  return (
    <div>
      <Navbar />
      <p>Dato de la API: </p>
      <p>Temperatura: </p>
      <p>Descripción: </p>
    </div>
  );
}

