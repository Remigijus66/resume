// import React from 'react';
import lego from '../Documents/lego.jpg';

const Header = () => {

  return (
    <div>
      <header className="header">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              {/* <img src={lego} alt="logo" style={{ width: '300px', height: '200px' }} /> */}
              <h1>Curriculum Vitae</h1>
            </div>
            <div class="flip-card-back">
              <h1>Curriculum Vitae</h1>

            </div>
          </div>
        </div>

      </header>
    </div>
  );
};

export default Header;