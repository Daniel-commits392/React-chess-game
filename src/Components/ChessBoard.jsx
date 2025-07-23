import React from "react";
import "./index.css";

const initialBoard = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];

function ChessBoard() {
  return (
    <div className="board">
     {initialBoard.map((row, rowIndex) =>
    row.map((piece, colIndex) => {
    const isLight = (rowIndex + colIndex) % 2 === 0;
    const squareClass = isLight ? "square light" : "square dark";
    return (
    <div key={`${rowIndex}-${colIndex}`} className={squareClass}>
        {piece}
           </div>
         );
      })
    )}
  </div>
  );
}
export default ChessBoard;
