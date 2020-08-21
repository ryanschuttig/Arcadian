import React from "react";
import Square from "./Square"

const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "400px",
    height: "400px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
}


const Board = ({ square, onClick }) => (
    <div style={style}>
        <Square value="1" onClick={() => onClick("placeholder")} />
        <Square value="2" onClick={() => onClick("placeholder")} />
        <Square value="3" onClick={() => onClick("placeholder")} />
        <Square value="4" onClick={() => onClick("placeholder")} />
        <Square value="5" onClick={() => onClick("placeholder")} />
        <Square value="6" onClick={() => onClick("placeholder")} />
        <Square value="7" onClick={() => onClick("placeholder")} />
        <Square value="8" onClick={() => onClick("placeholder")} />
        <Square value="9" onClick={() => onClick("placeholder")} />
    </div>
)

export default Board;