// myLogic/GameBoard.jsx
import React, { useState } from "react";
import GameSquare from "./GameSquare";
import { isWhitePiece, isBlackPiece } from "./utils";
import "../index.css";

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

function GameBoard() {
  const [board, setBoard] = useState(initialBoard);
  const [selected, setSelected] = useState(null);
  const [turn, setTurn] = useState("white");

  const handleSquareClick = (row, col) => {
    const piece = board[row][col];

    // If already selected, try to move
    if (selected) {
      const newBoard = board.map((r) => [...r]);
      newBoard[row][col] = board[selected.row][selected.col];
      newBoard[selected.row][selected.col] = "";

      setBoard(newBoard);
      setSelected(null);
      setTurn((prev) => (prev === "white" ? "black" : "white"));
    } else {
      // First click - select piece
      if (
        (turn === "white" && isWhitePiece(piece)) ||
        (turn === "black" && isBlackPiece(piece))
      ) {
        setSelected({ row, col });
      }
    }
  };

  return (
    <div>
      <p>Current Turn: {turn}</p>
      <div className="board">
        {board.map((rowArr, row) =>
          rowArr.map((piece, col) => {
            const isLight = (row + col) % 2 === 0;
            const isSelected = selected?.row === row && selected?.col === col;
            return (
              <GameSquare
                key={`${row}-${col}`}
                piece={piece}
                isLight={isLight}
                isSelected={isSelected}
                onClick={() => handleSquareClick(row, col)}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default GameBoard;
