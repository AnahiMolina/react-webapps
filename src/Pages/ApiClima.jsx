import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';


export default function ApiClima() {
  
  /* 
     fetch('https://open-weather13.p.rapidapi.com/city/teziutlan',
       {
         method: 'GET',
         headers: {
          'X-RapidAPI-Key': '1ff5db47e1mshd8979973b83c92ap1a7067jsn39c2272184df',
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
         }
       }
     )
       .then(response => response.json())
       .then(json => console.log(json))
    */
 //Api Open Weather
 
  return (
    <div>
      <Navbar />
      <p>Dato de la API: </p>
      <p>Temperatura: </p>
      <p>Descripción: </p>
      <div>Hola</div>
    </div>
  );
}

