import React, { useRef } from 'react';
import Dragable from 'react-draggable'
import remi from '../images/remi2.jpg';
import moveIcon from '../images/move.png';


const Myself = () => {
  const nodeRef = useRef(null);

  return (
    <Dragable nodeRef={nodeRef} handle="#mover" >
      <div className='name-tag scroll'>
        {/* <div className='d-flex j-end'  id='mover'  ref={nodeRef}  style={{ margin: '0 -20px'}}>
        <img   style={{ width: '25px',     padding: '15px 0 0 30px'}} src={moveIcon} alt=""></img>
        </div> */}
        <div className='d-flex al-center' id='mover' ref={nodeRef}   >
          {/* <div className='header'> */}
          <img className='grow1' style={{ borderRadius: '50%', width: '75px', padding: '15px' }} src={remi} alt="" />
          <div className='d-flex fd-column grow7'>
            {/* <div className='header-text'> */}
            <h4>Remigijus Bartaška </h4>
            <h5> Front end developer </h5>
          </div>
        </div>
        <div className='dash ' style={{ margin: '30px auto' }}></div>
        <p>Hi, I am front-end developer, working with Java Script and React.js with its modern libraries. I am also familiar with Node and have an understanding of the back end. I have skills of Responsive design and can do Object Oriented programming. Understand REST API and can work with databases. And above on all that,
          I think I have learners mindset, I am keen and ready for a new things in this area. </p>
        <p>In 2023 I was working in a team, developing gamifying plugin for e-shops. It delivers fun games directly to the shop, suprises customers, brings in discounts, and makes shopping procedures more lively. In this site you will find some of the games built by me. </p>
        <p> In this site I've also added my small project, which I skeched just for myself. It is an API based world-wide wheather forecast app.</p>
        <p> I am currently working as a freelancer, but I would eagerly join a nice team for a work on a permanent basis.
          I am based in Vilnius, so  I can work onsite/hybrid for this location and remotely for others. </p>
        <p> Enjoy dawns and sunsets.</p>
      </div>
    </Dragable>
  )
}

export default Myself