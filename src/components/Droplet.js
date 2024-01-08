import React, { Component, useState } from 'react';
class Droplet extends Component {
  // const [state,setState] = useState({})
  constructor(props) {
    super(props);

    this.state = {
      // x: Math.random() * window.innerWidth,
      // y: Math.random() * window.innerHeight,
      x: props.x * 1,
      y: props.y * 1,
    
    };

    // Add event listener to update droplet position on mouse move
    document.addEventListener('mousemove', this.handleMouseMove);
    this.flowByTheWind(props.wind)
    this.spreadX = this.makeSpread()
    this.spreadY = this.makeSpread()

    this.w =  window.screen.width
    // console.log(this.w)
  }

  handleMouseMove = (e) => {
    // Get mouse coordinates
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate distance from the mouse cursor
    const distance = Math.sqrt((this.state.x - mouseX) ** 2 + (this.state.y - mouseY) ** 2);

    // Check if the distance is not greater than 30px
    if (distance <= 30) {
      // Calculate the new position to move away from the cursor by a fixed distance of 30px
      const angle = Math.atan2(this.state.y - mouseY, this.state.x - mouseX);
      const newX = this.state.x + 200 * Math.cos(angle);
      const newY = this.state.y + 200 * Math.sin(angle);
      // Update state to re-render the component
      this.setState({
        x: newX,
        y: newY,
      });
    }
  };

  componentWillUnmount() {
    // Remove event listener when the component is unmounted
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  flowByTheWind = (wind) => {
    const move = (w) => {
      const newX = this.state.x + w * 1
      this.setState({
        x: newX,
        y: this.state.y,
      });
      // console.log(w)
    }
    const updateSpread = () => {
      this.spreadX = this.makeSpread()
      this.spreadY = this.makeSpread()
    }

    setInterval(move, 50, wind)
    setInterval(updateSpread, 5000)

    // console.log('wind', wind)
  }
  makeSpread = () => {
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 31) - 15)
    }
    // console.log(arr)
    return arr
  }


  makeTinyCloud = (point, coord) => {
    const arr = []
    const arr1 = (coord === 'x') ? this.spreadX : this.spreadY
    for (let i = 0; i < arr1.length; i++) {
      arr.push(point + arr1[i])
    }
    return arr
  }

  render() {
    const { x, y } = this.state;
    const xTinyCloud = this.makeTinyCloud(x, 'x');
    const yTinyCloud = this.makeTinyCloud(y, 'y');
    return (
      <>
 {(x < this.w && x > 0) &&     <> 
        <div className="drop"
          style={{
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
          }} >
        </div>
        {(xTinyCloud.map((xCoord, i) => <div key={i} className="drop"
          style={{
            position: 'absolute',
            left: `${xCoord}px`,
            top: `${yTinyCloud[i]}px`,
          }}
          ></div>))}
          </>}
      </>
    );
  }
}

export default Droplet;

