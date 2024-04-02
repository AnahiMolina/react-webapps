import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';


export default function ApiClima() {

  useEffect(() => {
    const animationElement = document.querySelector('.animation02');
    const animationDuration = parseFloat(getComputedStyle(animationElement).animationDuration) * 1000;

    // Espera un tiempo ligeramente superior a la duración de la animación antes de redirigir
    setTimeout(() => {
      // Redirige al usuario a la página de inicio después de que termine la animación
      window.location.href = '/'; // Cambia 'pagina-de-inicio.html' por la URL de tu página de inicio
    }, animationDuration + 9000); // 200 milisegundos adicionales para asegurar que la animación termine

    return () => {
      // Cancela el temporizador si el componente se desmonta antes de que se ejecute
      clearTimeout(timeoutId);
    };
  }, []);

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
  /* fetch('https://weather-api99.p.rapidapi.com/weather?city=teziutlan',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1ff5db47e1mshd8979973b83c92ap1a7067jsn39c2272184df',
        'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
      }
    }
  )
    .then(response => response.json())
    .then(json => console.log(json)) */

  //Weather api 
  return (
    <div>
      <Navbar />
      <div class="animation01">
        <div class="rhombus_small">
          <div class="rhombus">
            <div class="border_box">
              <span class="line line01"></span>
              <span class="line line02"></span>
              <span class="line line03"></span>
              <span class="line line04"></span>
              <span class="circle circle01"></span>
              <span class="circle circle02"></span>
              <span class="circle circle03"></span>
              <span class="circle circle04"></span>
              <span class="animation_line animation_line01"></span>
              <span class="animation_line_wrapper animation_line02_wrapper"><span class="animation_line animation_line02"></span></span>
              <span class="animation_line animation_line03"></span>
              <span class="animation_line_wrapper animation_line04_wrapper"><span class="animation_line animation_line04"></span></span>
              <span class="animation_line animation_line05"></span>
              <span class="animation_line_wrapper animation_line06_wrapper"><span class="animation_line animation_line06"></span></span>
              <span class="animation_line animation_line07"></span>
              <span class="animation_line_wrapper animation_line08_wrapper"><span class="animation_line animation_line08"></span></span>
            </div>
            <div class="wave">
              <div class="wave_wrapper"><div class="wave_box"></div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="animation02">
        <div class="rhombus_box">
          <span class="rhombus_item_wrapper rhombus_item01_wrapper"><span class="rhombus_item"></span></span>
          <span class="rhombus_item_wrapper rhombus_item02_wrapper"><span class="rhombus_item"></span></span>
        </div>
        <div class="double_content">
          <div class="double_wrapper02 dotted02"><div class="dotted_hide"><div class="double_wrapper01 dotted01"><span class="dotted_right"></span></div></div></div>
          <div class="double_wrapper02 white02"><div class="double_wrapper01 white01"></div></div>
          <div class="double_wrapper02 gray02"><div class="double_wrapper01 gray01"></div></div>
          <div class="double_wrapper02 orange02"><div class="double_wrapper01 orange01"></div></div>
        </div>
        <div class="name">
          <p>WEB APPS</p>
          <span class="name_circle01"></span>
          <span class="name_circle02"></span>
        </div>
      </div>
    </div>
  );
}

