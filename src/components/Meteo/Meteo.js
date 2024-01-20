import React, { useState, useEffect, useRef, useContext } from 'react';
import MainContext from "../../context/MainContext"
import window from '../../images/window.png';
import axios from 'axios';
import Dragable from 'react-draggable';
import GoogleMaps from './Place';
import CenteredTabs from './Tabs';
import Forecast from './Forecast';
import Day from './Day';

const Meteo = () => {
  const nodeRef = useRef(null);
  const {inputValue, value, lat, setLat, long, setLong } = useContext(MainContext)
  const [tabValue, setTabValue] = useState('Today')
  const [currentWeather, setCurrentWeather] = useState({})
  const [ forecast, setForecast] = useState({});
 const [place, setPlace] = useState('')


  useEffect(() => {
    console.log('hournew', new Date().getHours())
     const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    
   const success = (pos) => {
      const crd = pos.coords;
      setLat(crd.latitude);
      setLong(crd.longitude)
      console.log('pos', pos)
      console.log('lat', lat, 'long',  long)
       }
    
    const error = (err) =>  {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);

  }, [])

  useEffect(() => {
         getW(lat, long)
         getForecast(lat, long)
  }, [lat, long])


  const getW = async (latit, longit) => {
    // https://rapidapi.com/weatherapi/api/weatherapi-com
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: `${latit}, ${longit}` },
      headers: {
        'X-RapidAPI-Key': '4ea6492e0dmsha422720d6c5b0acp117504jsn61b4bf0cdd45',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      console.log('resp', response.data);
      setCurrentWeather(response.data)
      setPlace(response.data.location.name)
      console.log ( 'wheather', currentWeather)
      // getPlace(lat, long)
    } catch (error) {
      console.error(error);
    }
  }

  const getForecast = async (latid, longit) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q:  `${latid}, ${longit}` ,
        days: 10
      },
      headers: {
        'X-RapidAPI-Key': '4ea6492e0dmsha422720d6c5b0acp117504jsn61b4bf0cdd45',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    console.log(options)
    try {
      const response = await axios.request(options);
      console.log( 'forecast', response.data);
      setForecast(response.data)
    } catch (error) {
      console.error(error);
    }
  }
 
 
 //Place is set by weather API this function is not needed  
  const getPlace= async (latitude, longitude) => {
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
      console.log('place', place)
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
  <Dragable nodeRef={nodeRef} handle="#drag" > 

    <div className="meteo" >
      {/* <div className="window-container"> */}
    <GoogleMaps  currentLocacion={place}  sx={{ borderRadius: '32px',
                      padding: '50px', backgroundColor: 'green'}}/>
<div ref={nodeRef} id='drag'>
     <CenteredTabs value={tabValue} setValue={setTabValue}/>

  { tabValue === 'Today'  && <div className='today scroll'>
   <p>  {currentWeather.location?.localtime} </p>
   <div className='d-flex al-center j-around'>
       <img src={currentWeather.current?.condition.icon} alt="" />
      <p> {currentWeather.current?.condition.text} </p>
   </div>
<div className='d-flex al-center j-around fd-column'>
<p style={{ margin: '0px', fontSize: '50px' }}>  {currentWeather.current?.temp_c} &deg; </p>
<p style={{ margin: '0px' }}>Feels like {currentWeather.current?.feelslike_c} &deg; </p>
</div>
 <div className='d-flex al-center j-between' style={{ padding: '30px 5px' }} >
    
      <div>
<p className='d-flex  j-around' style={{ margin: '0px', fontSize: '18px' }}> Wind </p>
<p className='d-flex  j-around' style={{ margin: '0px', fontSize: '14px' }}> {currentWeather.current?.wind_dir} <span className='arrow' style={{ fontSize: '12px', marginLeft: '5px', color: 'red', transform: `rotate(${currentWeather.current?.wind_degree}deg) scale(2)` }} >&uarr;</span> </p>
<p className='d-flex  j-around' style={{ margin: '0px', fontSize: '14px' }}>
{(currentWeather?.current?.wind_kph * 0.277777778).toFixed(1)}({((currentWeather?.current?.gust_kph * 0.277777778).toFixed(1))}) m/s
</p>
      </div>
      <div>
      {(currentWeather.current?.precip_mm === 0 ) && <p className='d-flex  j-around' style={{ margin: '0px', fontSize: '16px' }} >No Precipitation</p>}
      {(currentWeather.current?.precip_mm !== 0 ) && <p className='d-flex  j-around' style={{ margin: '0px', fontSize: '16px' }} >Precipitation</p>}
      {(currentWeather.current?.precip_mm !== 0 ) && <p className='d-flex  j-around' style={{ margin: '0px', fontSize: '16px' }} >{currentWeather?.current?.precip_mm} mm</p>}
        </div>


   </div>
      </div> }
      {tabValue === 'Forecast' &&  <Forecast forecast={(forecast)} />}
      {/* {tabValue === 'Forecast' &&  <Day day={(forecast.forecast.forecastday[0])} />} */}
      {/* <button style={{ margin: '4px 10px' }} onClick={() => getForecast(lat, long)}> get forecast</button> */}
    </div>
</div>
</Dragable>
  )
}

export default Meteo