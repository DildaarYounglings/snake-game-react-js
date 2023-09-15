import React, { useState } from 'react'
import { useInterval } from '../utils/useInterval';
import { createSnakeMovement } from './movement';

const MOVEMENT_SPEED = 100;
export const Direction = {
    UP:0,DOWN:1,LEFT:2,RIGHT:3
}

export const useGameLogic = () => {
    // snake posistion array //
    const [direction,setDirection] = useState();
    const [snakeBody,setSnakeBody] = useState([
        {
            x:0,
            y:0,
        },
    ]);
    const {moveUp,moveDown,moveLeft,moveRight} = createSnakeMovement();
    const onKeyDownHandler = (event) => {
        switch(event.code)
        {
            case 'KeyS':
                setDirection(Direction.DOWN)
                break;
            case 'KeyW':
                setDirection(Direction.UP)
                break;
            case 'KeyD':
                setDirection(Direction.RIGHT)
                break;
            case 'KeyA':
                setDirection(Direction.LEFT)
                break;   
        }
        console.log(event.code);
    }
    const moveSnake = () => {
        let snakeBodyAfterMovement;
        switch(direction){
            case Direction.UP:
                snakeBodyAfterMovement = moveUp(snakeBody)
            break;
            case Direction.DOWN:
                snakeBodyAfterMovement = moveDown(snakeBody)
            break;
            case Direction.LEFT:
                snakeBodyAfterMovement = moveLeft(snakeBody)
            break;
            case Direction.RIGHT:
                snakeBodyAfterMovement = moveRight(snakeBody)
            break;
        }
        if(snakeBodyAfterMovement)
        {
            setSnakeBody(snakeBodyAfterMovement)
        }
        //console.log('i will move snake')
    }
    useInterval(moveSnake,MOVEMENT_SPEED);
    return {snakeBody,onKeyDownHandler};
}
