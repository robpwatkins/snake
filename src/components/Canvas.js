import React from 'react';
import { useWindowDimensions } from '../useWindowDimensions';

const Canvas = () => {
  const { height, width } = useWindowDimensions();

  return (
    <canvas style={{width: `${width}px`, height: `${height}px`}}>
      Canvas, here.
    </canvas>
  )
}

export default Canvas;