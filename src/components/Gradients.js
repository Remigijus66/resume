import React, { useState, useEffect } from 'react';
import './../gradients.scss';

const GradientTransitionComponent = () => {
  const [h, setH] = useState(4)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (h < 24) {
        setH(prevCount => prevCount + 1);
      } else {
        setH(0);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [h]);

  return (
    <>
      <div className={`sky-gradient sky-gradient-00 ${h === 0 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-01 ${h === 1 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-03 ${h === 2 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-03 ${h === 3 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-04 ${h === 4 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-05 ${h === 5 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-06 ${h === 6 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-07 ${h === 7 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-08 ${h === 8 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-09 ${h === 9 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-10 ${h === 10 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-11 ${h === 11 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-12 ${h === 12 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-13 ${h === 13 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-14 ${h === 14 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-15 ${h === 15 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-16 ${h === 16 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-17 ${h === 17 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-18 ${h === 18 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-19 ${h === 19 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-20 ${h === 20 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-21 ${h === 21 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-22 ${h === 22 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-23 ${h === 23 ? 'show' : ''}`}></div>
      <div className={`sky-gradient sky-gradient-24 ${h === 24 ? 'show' : ''}`}></div>
    </>
  );
};

export default GradientTransitionComponent;