import React, { useState } from "react";
import Square from "../Square/square";
import './board.css';

function Board() {
    const[squares, setSquares] = useState(Array(9).fill(null));
    const[xIsNext, setXIsNext] = useState(true)

    function handleClick(i) {
        console.log(i);
        squares[i] = xIsNext ? 'X' : 'O';
        setSquares(squares);
        setXIsNext(!xIsNext);
        console.log(squares);
    }

    function renderSquare(i) {
        console.log(squares[i]);
        return(
        <Square value={squares[i]} onClick={()=>handleClick(i)}></Square>)
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    const status = 'Next player: ' + (xIsNext ? 'X' : 'O');

    return <center >
        
        <div>{status}</div>
        <div>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </center>
}

export default Board;
