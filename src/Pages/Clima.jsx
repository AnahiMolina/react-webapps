import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Await, json } from 'react-router-dom';

export default function Clima() {
        const [dato, setDato] = useState('');
        const [temp,setTemp] = useState ('');
        const [desc, setDesc] = useState ('');
        const [tmax,setTmax] = useState ('');
        const [tmin,setTmin] = useState ('');
        const [weather,setWeather] = useState ('');
      
        useEffect(() => {
          fetch('https://weather-api99.p.rapidapi.com/weather?city=teziutlan',
            {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': '1ff5db47e1mshd8979973b83c92ap1a7067jsn39c2272184df',
                'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
              }
            })
      
            .then(response => {
              if (!response.ok) {
                throw new Error
                  ('No se pudo obtener los datos de la API');
              } return response.json();})
      
            .then(data => { 
              setDato(data.name);
              setDesc(data.weather[0].description);
              setTemp(`${Math.ceil(data.main.feels_like - 273.15)} °C`);
              setTmax(`${Math.round(data.main.temp_max - 273.15)} °C`);
              setTmin(`${Math.round(data.main.temp_min - 273.15)} °C`);
              setWeather()
             })
            .catch(error => { console.error('Error:', error); });
        }, []);

        //GradosCelcius= ({dato} - 273.15)

    return (
        <>
            <Navbar />
            <div id='backClima' className='container'>
                <div className='text-center'>
                    <h1>Clima</h1>
                    <i className='bx bx-sun bx-flashing bx-lg'></i>
                </div>

                <div id='clima' className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="card">
                                <h1>{dato}</h1>
                                <p id='grados'>{temp}</p>
                                <h5>{desc}</h5>
                                <hr></hr>
                                <p>Temperatura Máxima: {tmax}</p>
                                <p>Temperatura Minima: {tmin}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
