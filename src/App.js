import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from './useInterval';
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
  DIRECTION_START
} from './constants';

import './App.css';

const App = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [direction, setDirection] = useState(DIRECTION_START);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDirection(DIRECTION_START);
    setSpeed(SPEED);
    setGameOver(false);
  }

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  }

  const moveSnake = ({ keyCode }) => {
    keyCode > 36 && 
    keyCode < 41 && 
    setDirection(DIRECTIONS[keyCode]);
  }

  const createApple = () => {
    return apple.map((_, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));
  }

  const checkCollision = (head, snk = snake) => {
    if (
      head[0] * SCALE >= CANVAS_SIZE[0] ||
      head[0] < 0 ||
      head[1] * SCALE >= CANVAS_SIZE[1] ||
      head[1] < 0
    ) return true;

    for (const piece of snk) {
      if (head[0] === piece[0] && head[1] === piece[1]) return true;
    }    
    return false;
  }

  const checkAppleCollision = newSnake => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  }

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  }

  useInterval(() => gameLoop(), speed);

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    context.fillStyle = 'hotPink';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    // context.beginPath();
    // context.rect(1, 1, 1, 1);
    // context.stroke();
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = 'cyan';
    context.strokeRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver])

  return (
    <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
      <canvas 
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && <div>GAME OVER!</div>}
      <button onClick={startGame}>START GAMeeeEEEEE</button>
    </div>
  )
}

export default App;
