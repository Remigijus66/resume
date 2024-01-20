import { React, useEffect, useState} from 'react';
const Day = ({day}) => {
   const [hourly, setHourly] = useState(false)
   const [ungrouped, setUngrouped] = useState({})

    useEffect(() => {
  // console.log('day', day)
  const ungroupedCopy = day.hour.map(item => ({
    ...item,
    // time:  parseInt(item.time.split(' ')[1].split(':')[0], 10),
    time:  item.time.split(' ')[1].split(':')[0],
  }));
setUngrouped(ungroupedCopy)
  }, [])

  const toggleHourly = () => {hourly ? setHourly(false): setHourly(true) }

 const groupAndAggregateWeatherData = (data) =>  {
    // Initialize an object to store the grouped data
    const groupedData = {
        '00-06': { temps: [], icons: '', wind_kph: 0, gust_kph: 0, wind_degree: null, count: 0, precips_mm: [] },
        '06-12': { temps: [], icons: '', wind_kph: 0, gust_kph: 0, wind_degree: null, count: 0, precips_mm: []},
        '12-18': { temps: [], icons: '', wind_kph: 0, gust_kph: 0, wind_degree: null, count: 0, precips_mm: [] },
        '18-00': { temps: [], icons: '', wind_kph: 0, gust_kph: 0, wind_degree: null, count: 0, precips_mm: []},
      };
      // Iterate over the array of objects
    data.forEach((record) => {
      // Extract the hour from the 'time' property
      // const hour = parseInt(record.time.split(' ')[1].split(':')[0], 10);
      const hour = record.time.split(' ')[1].split(':')[0];
  
      // Determine the six-hour interval and push the temperature to the corresponding array
      if (hour >= 0 && hour < 6) {
        groupedData['00-06'].temps.push(record.temp_c);
        groupedData['00-06'].precips_mm.push(record.precip_mm);
        if (!groupedData['00-06'].icons) {groupedData['00-06'].icons = record.condition.icon}
        if (!groupedData['00-06'].wind_degree) {groupedData['00-06'].wind_degree = record.wind_degree}
        groupedData['00-06'].wind_kph = Math.max(groupedData['00-06'].wind_kph, record.wind_kph);
        groupedData['00-06'].gust_kph = Math.max(groupedData['00-06'].gust_kph, record.gust_kph);
        groupedData['00-06'].count++;
      } else if (hour >= 6 && hour < 12) {
        groupedData['06-12'].temps.push(record.temp_c);
        groupedData['06-12'].precips_mm.push(record.precip_mm);
        if (!groupedData['06-12'].icons) {groupedData['06-12'].icons = record.condition.icon}
        if (!groupedData['06-12'].wind_degree) {groupedData['06-12'].wind_degree = record.wind_degree}
        groupedData['06-12'].wind_kph = Math.max(groupedData['06-12'].wind_kph, record.wind_kph);
        groupedData['06-12'].gust_kph = Math.max(groupedData['06-12'].gust_kph, record.gust_kph);
        groupedData['06-12'].count++;
      } else if (hour >= 12 && hour < 18) {
        groupedData['12-18'].temps.push(record.temp_c);
        groupedData['12-18'].precips_mm.push(record.precip_mm);
        if (!groupedData['12-18'].icons) {groupedData['12-18'].icons = record.condition.icon}
        if (!groupedData['12-18'].wind_degree) {groupedData['12-18'].wind_degree = record.wind_degree}
        groupedData['12-18'].wind_kph = Math.max(groupedData['12-18'].wind_kph, record.wind_kph);
        groupedData['12-18'].gust_kph = Math.max(groupedData['12-18'].gust_kph, record.gust_kph);
        groupedData['12-18'].count++;
      } else {
        groupedData['18-00'].temps.push(record.temp_c);
        groupedData['18-00'].precips_mm.push(record.precip_mm);
        if (!groupedData['18-00'].icons) {groupedData['18-00'].icons = record.condition.icon}
        if (!groupedData['18-00'].wind_degree) {groupedData['18-00'].wind_degree = record.wind_degree}
        groupedData['18-00'].wind_kph = Math.max(groupedData['18-00'].wind_kph, record.wind_kph);
        groupedData['18-00'].gust_kph = Math.max(groupedData['18-00'].gust_kph, record.gust_kph);
        groupedData['18-00'].count++;
      }
    });
      // Calculate the average temperature for each interval
    const result = Object.keys(groupedData).map((interval) => ({
        time: interval,
        temp_c:
          groupedData[interval].count > 0
            ? groupedData[interval].temps.reduce((acc, temp) => acc + temp, 0) /
              groupedData[interval].count
            : null,
        precip_mm: 
            groupedData[interval].count > 0
             ? groupedData[interval].precips_mm.reduce((acc, temp) => acc + temp, 0) 
              : null,
        condition: { icon: groupedData[interval].icons }, // First available value
        wind_kph: groupedData[interval].wind_kph,
        gust_kph: groupedData[interval].gust_kph,
        wind_degree: groupedData[interval].wind_degree,
      }));
     return result;
  }
  const isInFuture = (time) => {
    return(time.slice(-2) > new Date().getHours() || time.slice(-5)==='18-00')
    } 

    const notToday = (day) => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const d = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${d}` !== (day.slice(0, 10));
    } 
    
  const grouped = groupAndAggregateWeatherData(day.hour);

return ( 
    <>
      <div className='d-flex j-center' style={{gap: '5px', width: '100%', fontSize: '14px', backgroundColor:'#ddd',padding: '3px 0px', margin: '3px 0px'}}>{day.date}
      <div className='d-flex j-center'onTouchEnd={()=> toggleHourly()} onClick={()=> toggleHourly()} style={{fontSize: '10px'}}><span></span>{ hourly ?  <span >&#9650; </span>: <span >&#9660; </span> }</div>
      </div>
   {(hourly ? ungrouped: grouped).filter((interval, i ) => {return isInFuture(interval.time) || notToday(day.date)})
   .map((interval, i ) => {return <div className='wheather-line  thin-divider' style={{fontSize: '14px'}} key={i}> 
   <span className="first"> {interval.time} </span>
   <span className="second" ><img className="element second" style={{width: '20px'}} src={interval.condition.icon} alt="" /></span>
   <span className="third" > {interval.temp_c.toFixed(0)} &deg;</span>
   <span className={`fourth ${interval.precip_mm === 0 ? 'color-white' : ''}`} > {interval.precip_mm.toFixed(1)} </span>
   <span className="fifth"> {(interval.wind_kph * 0.277777778).toFixed(0)}({((interval.gust_kph * 0.277777778).toFixed(0))}) </span>
   <span className="sixth" style={{ fontSize: '12px', marginLeft: '2px', color: 'red', transform: `rotate(${interval.wind_degree}deg)  ` }} >&uarr;</span>
       </div> })}
    <div className='d-flex j-center' onTouchEnd={()=> toggleHourly()}  onClick={()=> toggleHourly()} style={{fontSize: '10px'}}><span>Hourly</span>{ hourly ?  <span >&#9650; </span>: <span >&#9660; </span> }</div>
     </>)



} 
export default Day