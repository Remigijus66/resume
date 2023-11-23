import React, { useContext } from 'react';
import Boring from './Boring';
import Radio from './Radio';
import MainContext from "../context/MainContext";
import Raw from './Raw';
import Colorful from './Colorfull';
import Illiterating from './Illitterating';
import Header from './Header';

const Resume = () => {
  const { format } = useContext(MainContext)

  return (
    <div>
      <div className='header'>
    <div className='name-tag'> <h2>Remigijus Bartaška </h2> 
    <h2> Front end developer </h2>
    </div>
      <Radio />
      {/* {format === '' && < Header />} */}
      {format === 'Boring' && <Boring />}
      {format === 'Raw' && < Raw />}
      {format === 'Colorful' && <Colorful />}
      {format === 'Illiterating' && <Illiterating />}
      </div>
      {/* {format === 'Invalid' && <h2 className='header' style={{ marginTop: '-15px', margin: 'auto' }}>Sorry, selected option does not exists</h2>} */}
    </div>
  )
}

export default Resume