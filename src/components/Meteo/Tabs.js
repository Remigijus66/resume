import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs({value, setValue}) {
   
    // const [value, setValue] = React.useState("Today");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const setToday = (event, newValue) => {
    setValue('Today');
  };
  const setForecast = (event, newValue) => {
    setValue('Forecast');
  };
//   const handleChange = (event, newValue) => {
//     setTabValue(newValue);
//     console.log (tabValue)
//   };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        // onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
       <Tab  value="Today"  label="Current"  onClick={setToday}
        onTouchEnd={setToday} />
        <Tab value="Forecast" label="Forecast"  onClick={setForecast}
        onTouchEnd={setForecast} />
        {/* <Tab label="Item Three" /> */}
      </Tabs>
    </Box>
  );
}
