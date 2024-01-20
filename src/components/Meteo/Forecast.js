import { React, useEffect, useState} from 'react';
import Day from './Day';


const Forecast = ({forecast}) => {


    useEffect(() => {
//   console.log('forecast.forecast.forecastday[0].hour ', forecast.forecast.forecastday[0].hour )

  }, [])


return ( 
    <>
      <div className='wheather-line' style={{marginTop: '5px', fontSize: '10px'}}>
            <span className="first">Time</span>
            <span className="third"> Temp &deg; C</span>
            <span className="fourth">Precip. mm</span>
            <span className="fifth">Wind(gust) m/s</span>
        </div>
        <div className='scroll'>
   { forecast.forecast?.forecastday.map((d, i)=>{ return <Day key={i} day={d}/>})}
        </div>
{/* <Day day={(forecast.forecast.forecastday[0])} /> */}

  
    </>)



} 
export default Forecast