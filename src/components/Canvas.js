
// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

// currently unused

import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
//https://stackoverflow.com/questions/19541192/how-to-draw-cloud-shape-in-html5-canvas

//   const draw = (c, x=100, y=135) => {
//     c.beginPath();
//     c.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
//     c.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
//     c.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
//     c.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
//     c.moveTo(x + 200, y + 60);
//     c.lineTo(x, y + 60);
//     c.strokeStyle = '#797874';
//     c.stroke();
//     c.fillStyle = '#8ED6FF';
//     c.fill()
// }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas