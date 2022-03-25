import React from "react";
import Square from "../Square/Square";
import "./Board.css";

const Board = ({ squares, click }) => {
  return (
    <div className="board">
      {squares?.map((square, index) => (
        <Square key={index} value={square} onClick={() => click(index)} />
      ))}
    </div>
  );
};

export default Board;
