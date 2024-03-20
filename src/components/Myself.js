import React from 'react';
import photo from '../images/remi2.jpg';
import myselfText from '../Documents/myselfText'

const Myself = () => {
  return (
    <div className='name-tag scroll'>
      <div className='d-flex al-center'   >
        <img className='grow1' style={{ borderRadius: '50%', width: '75px', padding: '15px' }} src={photo} alt="" />
        <div className='d-flex fd-column grow7'>
          <h4>{myselfText.name} </h4>
          <h5> {myselfText.position} </h5>
        </div>
      </div>
      <div className='dash ' style={{ margin: '30px auto' }}></div>
      {myselfText.text.map((e, i) => <p key={i}>{(e)}</p>)}
    </div>
  )
}

export default Myself