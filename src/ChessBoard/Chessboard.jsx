import React from "react";
import "./ChessBoard.css";

const ChessBoard = () => {
  return (
  <div className="board">
      <div className="square dark">♜</div>
      <div className="square light">♞</div>
      <div className="square light">♞</div>
      <div className="square light">♛</div>
      <div className="square dark">♚</div>
      <div className="square light">♝</div>
      <div className="square dark">♞</div>
      <div className="square light">♜</div>
      <div className="square light">♟</div>
      <div className="square dark">♟</div>
      <div className="square light">♟</div>
      <div className="square dark">♟</div>
      <div className="square light">♟</div>
      <div className="square dark">♟</div>
      <div className="square light">♟</div>
      <div className="square dark">♟</div>
      {[...Array(4)].map((_, rowIndex) =>
        [...Array(8)].map((_, colIndex) => {
          const isLight = (rowIndex + 2 + colIndex) % 2 === 0;
          const color = isLight ? "light" : "dark";
          return (
            <div
              className={`square ${color}`}
              key={`empty-${rowIndex}-${colIndex}`}
            ></div>
          );
        })
      )}
      <div className="square dark">♙</div>
      <div className="square light">♙</div>
      <div className="square dark">♙</div>
      <div className="square light">♙</div>
      <div className="square dark">♙</div>
      <div className="square light">♙</div>
      <div className="square dark">♙</div>
      <div className="square light">♙</div>
      <div className="square light">♖</div>
      <div className="square dark">♘</div>
      <div className="square light">♗</div>
      <div className="square dark">♕</div>
      <div className="square light">♔</div>
      <div className="square dark">♗</div>
      <div className="square light">♘</div>
      <div className="square dark">♖</div>
    </div>
  );
}
export default ChessBoard;
