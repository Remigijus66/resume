import React, { useContext } from 'react';
import Boring from './Boring';
import Radio from './Radio';
import MainContext from "../context/MainContext";
import Raw from './Raw';
import Colorful from './Colorfull';

const Resume = () => {
  const { format } = useContext(MainContext)

  return (
    <div>
      {format === '' && <h2> Please Select Resume Format</h2>}
      <Radio />
      {format === 'Raw' && < Raw />}
      {format === 'Boring' && <Boring />}
      {format === 'Colorful' && <Colorful />}
      {format === 'Invalid' && <h2 style={{ maxWidth: '50%', margin: 'auto' }}>Sorry, selected option does not exists</h2>}



    </div>

  );
};

export default Resume;