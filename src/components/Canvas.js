import React from 'react';
import { useWindowDimensions } from '../useWindowDimensions';

const Canvas = () => {
  const { height, width } = useWindowDimensions();

  return (
    <canvas style={{width: {width}, height: {height}}}>
      Canvas, here.
    </canvas>
  )
}

export default Canvas;