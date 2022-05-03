import React from "react";
import Square from "../Square/square";
import './board.css';

function Board() {
    function handleSquare(event) {
        console.log(event.target.value);
    }

    return <center >
        <div>
            <Square onClick={(event)=>handleSquare}></Square>
            <Square></Square>
            <Square></Square>
        </div>
        <div>
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </div>
        <div>
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </div>
    </center>
}

export default Board;
