import React, { useState } from "react";
import Board from "../Board/Board";
import "./Game.css";
import { calculateWinner } from "../../Helper";

const Game = () => {
  let [arr, setArr] = useState(1);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    setArr(arr + 1);
    console.log(arr);
    if (arr > 9) {
      alert("Draw");
    }
    //нужно определить был ли клик по ячейке или игра завершилась
    if (winner || boardCopy[index]) return;
    //определить чей ход
    boardCopy[index] = xIsNext ? "X" : "O";
    //обновить доску
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const startNewGame = () => {
    return (
      <button
        className="start_btn"
        onClick={() => {
          setBoard(Array(9).fill(null));
          setArr(1);
        }}
      >
        RESTART
      </button>
    );
  };
  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className="game_info">
        {winner ? "Winner " + winner : "Turn " + (xIsNext ? "X" : "O")}
      </p>
    </div>
  );
};

export default Game;
