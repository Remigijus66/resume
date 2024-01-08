import React, { useContext, useRef } from 'react';
import Boring from './Boring';
import Radio from './Radio';
import MainContext from "../context/MainContext";
import Raw from './Raw';
import Colorful from './Colorfull';
import Illiterating from './Illitterating';

import Dragable from 'react-draggable'

const Resume = () => {
  const { format } = useContext(MainContext)
  const nodeRef = useRef(null);
  return (
    
<>
    {/* <Dragable nodeRef={nodeRef}> */}
    <div ref={nodeRef}>
      <Radio />
  
      {format === 'Boring' && <Boring />}
      {format === 'Raw' && < Raw />}
      {format === 'Colorful' && <Colorful />}
      {format === 'Illiterating' && <Illiterating />}
      </div>
      {/* {format === 'Invalid' && <h2 className='header' style={{ marginTop: '-15px', margin: 'auto' }}>Sorry, selected option does not exists</h2>} */}
    {/* </div> */}
    {/* </Dragable> */}
</>
  )
}

export default Resume