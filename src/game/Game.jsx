import React, { useRef } from "react";
import { Canvas } from "../canvas/Canvas";
import { GameWrapper } from "./Game.styles";
import { useGameLogic } from "./useGameLogic";
import { draw } from "../draw/draw";

export const Game = () => {

    const canvasRef = useRef();
    const {snakeBody,onKeyDownHandler} = useGameLogic()
    const drawGame = (ctx) => {
        draw({ctx,snakeBody})
    }
    return (
    <GameWrapper tabIndex={0} onKeyDown={(e) => onKeyDownHandler(e)}>
        <Canvas canvasRef={canvasRef} draw={drawGame}/>
    </GameWrapper>
    )
}