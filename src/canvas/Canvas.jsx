import React, { useEffect } from 'react';
import * as S from './Canvas.styles';

export const Canvas = ({draw,canvasRef}) => {
    useEffect(() => {
        if(!canvasRef){
            return;
        }
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }
        const context = canvas.getContext('2d');
        if(!context){
            return;
        }
        draw(context);
        return () => context.clearRect(0,0,window.innerWidth,400);
    },[draw,canvasRef])
  return <S.Canvas width={800} height={400} ref={canvasRef}/>
}
