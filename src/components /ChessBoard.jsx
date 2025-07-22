import React from 'react';

export default function ChessBoard({ onMove, currentTurn }) {
  const testWhiteMove = () => {
    const moved = onMove('e2', 'e4', 'white');
    if (moved) {
      console.log('White move accepted');
    } else {
      console.log('White move blocked');
    }
  };

  const testBlackMove = () => {
    const moved = onMove('e7', 'e5', 'black');
    if (moved) {
      console.log('Black move accepted');
    } else {
      console.log('Black move blocked');
    }
  };

  return (
    <div>
      <h3>Test Moves</h3>
      <button onClick={testWhiteMove}>White Move: e2 → e4</button>
      <button onClick={testBlackMove}>Black Move: e7 → e5</button>
      <p>Current Turn: <strong>{currentTurn}</strong></p>
    </div>
  );
}