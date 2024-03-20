import React, { useContext, useRef } from "react";
import MainContext from "../context/MainContext";
import Dragable from 'react-draggable'
import Resume from './Resume';
import Meteo from './Meteo/Meteo';

function Radio() {
  const nodeRef = useRef(null);
  const { showResume, setShowResume,  setMeteo, meteo } = useContext(MainContext)
  return (

<>
    <Dragable nodeRef={nodeRef} handle=".radiobox" >
<div id='radiobox' ref={nodeRef} className={'radiobox'}>
 <button className='button white-bkgr' onTouchEnd={() => setShowResume(true)} onClick={() => setShowResume(true)}>My Resume</button> 
 <button className='button blue-bkgr' onTouchEnd={() => setMeteo(true)} onClick={() => setMeteo(true)}>METEO project</button> 
</div>
    </Dragable>
{showResume && <Resume />}
{meteo && <Meteo />}
</>
  )
}

export default Radio