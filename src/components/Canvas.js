import React from 'react';
import { useWindowDimensions } from '../useWindowDimensions';

const Canvas = () => {
  const { height, width } = useWindowDimensions();
  
  const c = canvas.getContext('2d');

  c.fillRect(100, 100, 5, 5);

  return (
    <canvas style={{width: `${width}px`, height: `${height}px`}}>
      Canvas, here.
    </canvas>
  )
}

export default Canvas;