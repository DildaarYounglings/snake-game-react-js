import React from 'react'


const SEGMENT_SIZE = 5

export const draw = ({ctx,snakeBody}) => {
    ctx.fillStyle = 'rgb(200,0,0)';
    snakeBody.forEach(segment => { ctx.fillRect(segment.x,segment.y,SEGMENT_SIZE,SEGMENT_SIZE)
    });
}
