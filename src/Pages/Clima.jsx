import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Await, json } from 'react-router-dom';

export default function Clima() {
  const [dato, setDato] = useState('');
  const [temp, setTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [tmax, setTmax] = useState('');
  const [tmin, setTmin] = useState('');
  const [icono, setIcono] = useState('');
/*
  useEffect(() => {
    fetch('https://weather-api99.p.rapidapi.com/weather?city=teziutlan', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1ff5db47e1mshd8979973b83c92ap1a7067jsn39c2272184df',
        'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo obtener los datos de la API');
      }
      return response.json();
    })
    .then(data => {

      setDato(data.name);
      setDesc(data.weather[0].description);
      setTemp(`${Math.ceil(data.main.feels_like - 273.15)} °C`);
      setTmax(`${Math.round(data.main.temp_max - 273.15)} °C`);
      setTmin(`${Math.round(data.main.temp_min - 273.15)} °C`);

      
      let icono = '';
      switch (data.weather[0].description) {
        case 'light rain':
          icono = 'bx bx-cloud-light-rain';
          break;
        case 'scattered clouds':
          icono = 'bx bxl-soundcloud'
          break;
        case 'overcast clouds':
          icono = 'bx bxs-cloud';
          break
        case 'broken clouds':
          icono = 'fa-solid fa-cloud-sun'
          break
        default:
          icono = 'bx bx-question-mark';
          break;
      }
      setIcono(icono);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);*/

  //GradosCelcius= ({dato} - 273.15)

  return (
    <>
      <Navbar />
      <div id='background' className='container-fluid-sm'>
        <div className='text-center titulos'>
          <h1><i className='bx bx-sun bx-flashing-hover bx-lg'/> Clima</h1>
        </div>

        <div id='clima' className='container-md'>
          <div className='row justify-content-center'>
            <div className='col-sm-7 p-5'>
              <div className="card">
                <center>
                  <form className='form'>
                    <input type='text' required />
                    <label className='lbl-nombre'>
                      <span className='text-nomb'>
                      <i className='bx bx-search-alt'/>
                        Buscar Ciudad...
                      </span>
                    </label>
                  </form>
                </center>
                <h1 className='mt-3'>{dato} Teziutlan</h1>{/*Borrar*/}
                <p id='grados'>{temp}15 C</p>{/*Borrar*/}
                <h5>{desc}ligth rain</h5>{/*Borrar*/}
                <i id='icono' className={icono}></i>
                <i className='bx bx-sun bx-lg'></i>{/*Borrar*/}
                <hr></hr>
                <p>Temperatura Máxima: {tmax} 18 C</p>{/*Borrar*/}

                {/*<p>Temperatura Minima: {tmin}</p>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

