import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs({value, setValue}) {
   
  const setToday = () => {
    setValue('Today');
  };
  const setForecast = () => {
    setValue('Forecast');
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
       <Tab  value="Today"  label="Current"  onClick={setToday}
        onTouchEnd={setToday} />
        <Tab value="Forecast" label="Forecast"  onClick={setForecast}
        onTouchEnd={setForecast} />
      </Tabs>
    </Box>
  );
}
