function groupAndAggregateWeatherData(data) {
    const groupedData = {
      '00-06': { temps: [], icons: [], wind_kph: 0, gust_kph: 0, wind_degree: null, count: 0 },
      '06-12': { temps: [], icons: [], wind_kph: 0, gust_kph: 0, wind_degree: null, count: 0 },
      '12-18': { temps: [], icons: [], wind_kph: 0, gust_kph: 0, wind_degree: null, count: 0 },
      '18-00': { temps: [], icons: [], wind_kph: 0, gust_kph: 0, wind_degree: null, count: 0 },
    };
  
    data.forEach((record) => {
      const hour = parseInt(record.time.split(' ')[1].split(':')[0], 10);
  
      // Determine the six-hour interval and update the corresponding fields
      if (hour >= 0 && hour < 6) {
        groupedData['00-06'].temps.push(record.temp_c);
        if (groupedData['00-06'].count === 0) {
          groupedData['00-06'].icons.push(record.condition.icon);
          groupedData['00-06'].wind_degree = record.wind_degree;
        }
        groupedData['00-06'].wind_kph = Math.max(groupedData['00-06'].wind_kph, record.wind_kph);
        groupedData['00-06'].gust_kph = Math.max(groupedData['00-06'].gust_kph, record.gust_mph);
        groupedData['00-06'].count++;
      } else if (hour >= 6 && hour < 12) {
        groupedData['06-12'].temps.push(record.temp_c);
        if (groupedData['06-12'].count === 0) {
          groupedData['06-12'].icons.push(record.condition.icon);
        }
        groupedData['06-12'].wind_kph = Math.max(groupedData['06-12'].wind_kph, record.wind_kph);
        groupedData['06-12'].gust_kph = Math.max(groupedData['06-12'].gust_kph, record.gust_mph);
        groupedData['06-12'].count++;
      } else if (hour >= 12 && hour < 18) {
        groupedData['12-18'].temps.push(record.temp_c);
        if (groupedData['12-18'].count === 0) {
          groupedData['12-18'].icons.push(record.condition.icon);
          groupedData['12-18'].wind_degree = record.wind_degree;
        }
        groupedData['12-18'].wind_kph = Math.max(groupedData['12-18'].wind_kph, record.wind_kph);
        groupedData['12-18'].gust_kph = Math.max(groupedData['12-18'].gust_kph, record.gust_mph);
        groupedData['12-18'].count++;
      } else {
        groupedData['18-00'].temps.push(record.temp_c);
        if (groupedData['18-00'].count === 0) {
          groupedData['18-00'].icons.push(record.condition.icon);
        }
        groupedData['18-00'].wind_kph = Math.max(groupedData['18-00'].wind_kph, record.wind_kph);
        groupedData['18-00'].gust_kph = Math.max(groupedData['18-00'].gust_kph, record.gust_mph);
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
      condition: { icon: groupedData[interval].icons[0] }, // First available value
      wind_kph: groupedData[interval].wind_kph,
      gust_kph: groupedData[interval].gust_kph,
      wind_degree: groupedData[interval].wind_degree,
    }));
  
    return result;
  }
  
  // Example usage
  const data = [
    { time: '2024-01-13 00:00', temp_c: -1.2, condition: { icon: '//cdn.weatherapi.com/weather/64x64/night/338.png' }, wind_kph: 15.5, gust_mph: 14.2, wind_degree: 234 },
    { time: '2024-01-13 04:00', temp_c: -0.8, condition: { icon: '//cdn.weatherapi.com/weather/64x64/night/338.png' }, wind_kph: 14.5, gust_mph: 13.2, wind_degree: 240 },
    // ... other 22 objects with the same date and different hours
  ];
  
  const result = groupAndAggregateWeatherData(data);
  console.log(result);
  