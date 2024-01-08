import React, { useRef } from 'react';
import Dragable from 'react-draggable'
import remi from '../images/remi2.jpg';


const Myself = () => {
  const nodeRef = useRef(null);

  return (
    <Dragable nodeRef={nodeRef} handle=".name-tag" >
      <div ref={nodeRef} className='name-tag'>
        <div className='d-flex al-center'>
        {/* <div className='header'> */}
          <img className='grow1' style={{ borderRadius: '50%', width: '75px' }} src={remi} alt="" />
          <div className='d-flex fd-column grow7'>
          {/* <div className='header-text'> */}
            <h4>Remigijus Bartaška </h4>
            <h5> Front end developer </h5>
          </div>
        </div>
        <div className='dash'style={{margin: '30px auto'}}></div>
        <p>Hi, my name is Remigijus Bartaška. I am front-end developer, programming with Java Script, …….
In 2023 I was working in a team, developing gamifying plugins (quick fun games, intended to ensure
an engaging customer experience) for e-shops. In this site you will find some of the games built by
me, as well as some of my other recent works. For a full project view please visit this site (manau,
nereikia šito – neaktualu). Code of the games is here (ar tikrai gali atskleisti kodą?).
Despite my yet limited IT experience, I am especially keen and ready to further excel and improve
my skills in this area. Just try me! </p>
      </div>
    </Dragable>
  )
}

export default Myself