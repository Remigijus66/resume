import React, { useState, useEffect, } from 'react';
import Droplet from './Droplet';

const Clouds = () => {
  const [cloud, setCloud] = useState([])

  useEffect(() => {
    setCloud([])
    const axis1 = 70
    const axis2 = 70
    const  points = 10
    makeCloud(axis1, axis2, points)
// console.log(cloud)
  }, [])

  const makeCloud = (ax1, ax2, thikness) => {
  for (let i = 0; i < thikness; i++) {
    const point = getRandomPointInEllipse(ax1, ax2)
    const cloudCopy = cloud
    cloudCopy.push(point)
    setCloud(cloudCopy )
    // console.log('iteration', i,  cloud)
  }
 } 

const getRandomPointInEllipse = (a, b) =>  {
   const theta = Math.random() * (2 * Math.PI);
  const factor = Math.random();
  const x = factor * a * Math.cos(theta)+a;
  const y = factor * b * Math.sin(theta)+b;
console.log('point',{ x : x, y :y })
  return { x : x, y :y };
}




  // const [word, setWord] = useState([])
  // const HandleClick = (e) => {
  //   // console.log(EventTarget)
  //   const dot = { x: e.clientX, y: e.clientY }
  //   setWord([...word, dot])
  //   console.log(word)
  // }

  const sky = [
    { x: 63, y: 10 },
    { x: 92, y: 21 },
    { x: 13, y: 22 },
    { x: 20, y: 55 },
    { x: 61, y: 76 },
    { x: 94, y: 97 },
    { x: 102, y: 130 },
    { x: 92, y: 170 },
    { x: 42, y: 182 },
    { x: 8, y: 151 },
    { x: 160, y: 4 },
    { x: 158, y: 21 },
    { x: 164, y: 55 },
    { x: 172, y: 106 },
    { x: 173, y: 142 },
    { x: 173, y: 176 },
    { x: 190, y: 87 },
    { x: 220, y: 47 },
    { x: 250, y: 18 },
    { x: 203, y: 104 },
    { x: 233, y: 135 },
    { x: 253, y: 161 },
    { x: 325, y: 20 },
    { x: 336, y: 58 },
    { x: 355, y: 88 },
    { x: 382, y: 86 },
    { x: 395, y: 50 },
    { x: 413, y: 11 },
    { x: 364, y: 111 },
    { x: 375, y: 150 },
    { x: 375, y: 170 },
    
  ]
  const cloud1 = [
    { x: 63, y: 20 },
    { x: 92, y: 21 },
    { x: 13, y: 22 },
    { x: 20, y: 20 },
    { x: 61, y: 76 },
    { x: 94, y: 97 },
    { x: 102, y: 80 },
    { x: 92, y: 90 },
    { x: 42, y: 110 },
    { x: 8, y: 30 },
    { x: 60, y: 60 },
    { x: 58, y: 21 },
    { x: 64, y: 55 },
    { x: 172, y: 55 },
    { x: 73, y: 98 },
    { x: 73, y: 100 },
    { x: 90, y: 87 },
    { x: 20, y: 47 },
    { x: 50, y: 18 },
    { x: 103, y: 104 },
    { x: 33, y: 105 },
    { x: 153, y: 88 },
    { x: 125, y: 20 },
    { x: 136, y: 58 },
    { x: 155, y: 88 },
    { x: 182, y: 86 },
    { x: 195, y: 50 },
    { x: 13, y: 11 },
    { x: 64, y: 70 },
    { x: 75, y: 75 },
    { x: 75, y: 68 },
    
  ]

  const is = [
    { x: 8, y: 6 },
    { x: 12, y: 51 },
    { x: 10, y: 98 },
    { x: 11, y: 144 },
    { x: 13, y: 188 },
    { x: 76, y: 51 },
    { x: 124, y: 2 },
    { x: 185, y: 28 },
    { x: 124, y: 85 },
    { x: 184, y: 106 },
    { x: 201, y: 147 },
    { x: 155, y: 192 },
    { x: 105, y: 185 },
    { x: 81, y: 160 },
  ]
  const the = [
    { x: 5, y: 3 },
    { x: 38, y: 6 },
    { x: 65, y: 1 },
    { x: 115, y: 4 },
    { x: 95, y: 4 },
    { x: 64, y: 33 },
    { x: 66, y: 82 },
    { x: 70, y: 118 },
    { x: 68, y: 160 },
    { x: 75, y: 188 },
    { x: 178, y: 2 },
    { x: 181, y: 43 },
    { x: 182, y: 82 },
    { x: 182, y: 114 },
    { x: 185, y: 158 },
    { x: 188, y: 187 },
    { x: 202, y: 114 },
    { x: 244, y: 112 },
    { x: 232, y: 116 },
    { x: 281, y: 4 },
    { x: 282, y: 53 },
    { x: 278, y: 94 },
    { x: 275, y: 125 },
    { x: 277, y: 165 },
    { x: 280, y: 188 },
    { x: 338, y: 12 },
    { x: 341, y: 44 },
    { x: 343, y: 90 },
    { x: 346, y: 136 },
    { x: 347, y: 172 },
    { x: 383, y: 8 },
    { x: 436, y: 13 },
    { x: 382, y: 103 },
    { x: 437, y: 95 },
    { x: 373, y: 186 },
    { x: 426, y: 181 },
  ]
  const limit = [
    { x: 7, y: 8 },
    { x: 13, y: 33 },
    { x: 13, y: 70 },
    { x: 14, y: 115 },
    { x: 16, y: 161 },
    { x: 33, y: 184 },
    { x: 86, y: 190 },
    { x: 115, y: 184 },
    { x: 195, y: 4 },
    { x: 197, y: 31 },
    { x: 195, y: 73 },
    { x: 198, y: 108 },
    { x: 198, y: 143 },
    { x: 201, y: 178 },
    { x: 291, y: 6 },
    { x: 293, y: 38 },
    { x: 294, y: 78 },
    { x: 298, y: 131 },
    { x: 297, y: 167 },
    { x: 331, y: 33 },
    { x: 357, y: 57 },
    { x: 385, y: 82 },
    { x: 410, y: 56 },
    { x: 436, y: 27 },
    { x: 466, y: 2 },
    { x: 470, y: 31 },
    { x: 477, y: 75 },
    { x: 475, y: 105 },
    { x: 474, y: 136 },
    { x: 476, y: 164 },
    { x: 557, y: 2 },
    { x: 561, y: 32 },
    { x: 560, y: 71 },
    { x: 560, y: 110 },
    { x: 563, y: 140 },
    { x: 561, y: 183 },
    { x: 621, y: 1 },
    { x: 655, y: 4 },
    { x: 706, y: 2 },
    { x: 762, y: 4 },
    { x: 702, y: 24 },
    { x: 702, y: 66 },
    { x: 704, y: 107 },
    { x: 710, y: 144 },
    { x: 711, y: 186 },

  ]





  return (
    <>
      {/* <div onClick={HandleClick} style={{ width: '1200px', height: '200px', backgroundColor: 'green', position: 'relative' }}>
        {word.map((dot, i) => <div className='dot' style={{
          left: `${dot.x}px`,
          top: `${dot.y}px`,
        }} key={i}></div>)}
      </div> */}


{/* {sky.map((d, i) => { return( true ? <Droplet  key={i} x={d.x} y={d.y} wind={1} /> : '') })}
{is.map((d, i) =>{return (<Droplet  key={i} x={d.x + 600} y={d.y} wind={3} />)})}
{the.map((d, i) => <Droplet  key={i} x={d.x} y={d.y+ 400 } wind={3} />)}
{limit.map((d, i) => <Droplet  key={i} x={d.x+550 } y={d.y+ 400} wind={3} />)} */}

{cloud.map((d, i) => <Droplet  key={i} x={d.x } y={d.y} wind={1} />)}

{cloud1.map((d, i) => <Droplet  key={i} x={d.x } y={d.y} wind={1} />)}


     
    </>
  )
}

export default Clouds