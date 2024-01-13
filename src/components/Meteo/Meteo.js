import React, { useState, useEffect, useRef, useContext } from 'react';
import MainContext from "../../context/MainContext"
import window from '../../images/window.png';
import axios from 'axios';
import Dragable from 'react-draggable';
import GoogleMaps from './Place';
import CenteredTabs from './Tabs';

const Meteo = () => {
  const nodeRef = useRef(null);
  const {inputValue, value, lat, setLat, long, setLong } = useContext(MainContext)
  const [tabValue, setTabValue] = useState('Today')
  const [currentWeather, setCurrentWeather] = useState({})
  // const [currentWeather, setCurrentWeather] = useState({location:{country:"Lithuania", lat : 54.73, localtime : "2024-01-09 13:00", localtime_epoch : 1704798008, lon: 25.42,name: "Vilnius", region : "Vilniaus Apskritis", tz_id : "Europe/Vilnius" } ,
  // current:{ cloud : 75, condition : {text: 'Overcast', icon: '//cdn.weatherapi.com/weather/64x64/day/122.png', code: 1009},
  // feelslike_c : -12.8, feelslike_f : 8.9, gust_kph : 20.1, gust_mph: 12.5, humidity: 100,is_day:  1, last_updated: "2024-01-09 13:00",
  //  last_updated_epoch : 1704798000, precip_in: 0, precip_mm: 2.5, pressure_in: 30.42, pressure_mb: 1030,temp_c: -7, temp_f: 19.4, uv: 2, 
  //  vis_km: 10, vis_miles: 6, wind_degree: 240, wind_dir: "WSW", wind_kph: 9, wind_mph:  5.6}})
 const [place, setPlace] = useState('')


  useEffect(() => {
     const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    
   const success = (pos) => {
      const crd = pos.coords;
      setLat(crd.latitude);
      setLong(crd.longitude)
      console.log('lat', lat, 'long',  long)
      // temp diable, kad rekvestu nepadauginti 
      // getW(crd.latitude, crd.longitude)
    }
    
    const error = (err) =>  {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);

  }, [])

  useEffect(() => {
         getW(lat, long)
  }, [lat, long])


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
      console.log('resp', response.data);
      setCurrentWeather(response.data)
      console.log ( 'wheather', currentWeather)
      getPlace(lat, long)
    } catch (error) {
      console.error(error);
    }

  }

  const getForecast = async (lat, long, d) => {


    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q:  `${lat}, ${long}` ,
        days: '3'
      },
      headers: {
        'X-RapidAPI-Key': '4ea6492e0dmsha422720d6c5b0acp117504jsn61b4bf0cdd45',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    console.log(options)
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

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
  <Dragable nodeRef={nodeRef} handle=".meteo" > 

    <div className="meteo" ref={nodeRef}>
      {/* <div className="window-container"> */}
    <GoogleMaps  currentLocacion={place}  sx={{ borderRadius: '32px',
                      padding: '50px', backgroundColor: 'green'}}/>
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
      {tabValue === 'Forecast' &&  <div className='scroll'>Forecast</div>}
      <button style={{ margin: '4px 10px' }} onClick={() => getForecast(lat, long)}> Refresh</button>
    </div>
</Dragable>
  )
}

export default Meteo