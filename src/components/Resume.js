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
      <Radio />
      {format === '' && < Header />}
      {format === 'Boring' && <Boring />}
      {format === 'Raw' && < Raw />}
      {format === 'Colorful' && <Colorful />}
      {format === 'Illiterating' && <Illiterating />}
      {format === 'Invalid' && <h2 className='header' style={{ marginTop: '-15px', margin: 'auto' }}>Sorry, selected option does not exists</h2>}
    </div>
  )
}

export default Resume