import React, { useState, useEffect, useRef } from 'react';
import window from '../Documents/window.png';
import axios from 'axios';
// npm install react-draggable

import Dragable from 'react-draggable'


const Meteo = () => {
  const nodeRef = useRef(null);
 const [currentWeather, setCurrentWeather] = useState({})
 const [place, setPlace] = useState('')

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    
   const success = (pos) => {
      const crd = pos.coords;
      getW(crd.latitude, crd.longitude)
    }
    
    const error = (err) =>  {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);

  }, [])

 

  const getW = async (lat, long) => {

    // https://rapidapi.com/weatherapi/api/weatherapi-com
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: `${lat}, ${long}` },
      headers: {
        'X-RapidAPI-Key': '4ea6492e0dmsha422720d6c5b0acp117504jsn61b4bf0cdd45',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setCurrentWeather(response.data)
      console.log(currentWeather)
      getPlace(lat, long)
    } catch (error) {
      console.error(error);
    }

  }

  const getPlace = async (latitude, longitude) => {
    const options = {
      method: 'GET',
      // url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/locations/54.7331+25.4160/nearbyPlaces',
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${latitude.toFixed(4)}${longitude>= 0 ? '+' : ''}${longitude.toFixed(4)}/nearbyPlaces`,
      params: {
        radius: '100',
        limit: '10'
      },
      headers: {
        'X-RapidAPI-Key': '4ea6492e0dmsha422720d6c5b0acp117504jsn61b4bf0cdd45',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setPlace(response.data.data[0].name);
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
<Dragable nodeRef={nodeRef} handle=".window-container" >

    <div className="meteo" ref={nodeRef}>
      <div className="window-container">
        <p> {place},  {currentWeather.location?.localtime} </p>
        <p>Outside: {currentWeather.current?.condition.text} </p>
        <div className="window">
          <img src={window} alt="" />
          <img src={currentWeather.current?.condition.icon} alt="" className='window-view' />
        </div>

        <p style={{ marginTop: '-10px' }}> Temperature {currentWeather.current?.temp_c} &deg; </p>
        <p> Feels like {currentWeather.current?.feelslike_c} &deg; </p>
        <p> Wind m/s {(currentWeather?.current?.wind_kph * 0.277777778).toFixed(1)} ( {(currentWeather?.current?.gust_kph * 0.277777778).toFixed(1)}) <span className='arrow' style={{ marginLeft: '5px', color: 'red', transform: `rotate(${currentWeather.current?.wind_degree}deg) scale(2)` }} >&darr;</span> </p>
        {/* <button onClick={() => getW()}> Refresh</button> */}
      </div>
    </div>
</Dragable>
  )
}

export default Meteo