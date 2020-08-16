import React, { useState, useRef, useEffect } from 'react';
import { useInterval } from './useInterval';
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
} from './constants';

import './App.css';

const App = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {

  }

  const endGame = () => {

  }

  const moveSnake = () => {

  }

  const createApple = () => {

  }

  const checkCollision = () => {

  }

  const checkAppleCollision = () => {

  }

  const gameLoop = () => {

  }

  // useEffect(() => {

  // }, [snake, apple, gameOver])

  return (
    <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
      <canvas 
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {/* {gameOver && <div>GAME OVER!</div>} */}
      <button>START GAME</button>
    </div>
  )
}

export default App;
