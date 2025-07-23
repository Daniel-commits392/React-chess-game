import React from "react";
// import ChessBoard from "./components/ChessBoard"; ← don't use this
import GameBoard from "../src/myLogic/GameBoard"; // ← use your file instead

function App() {
  return (
    <div className="App">
      <h2>♞ React Chess Game</h2>
      <GameBoard />
    </div>
  );
}

export default App;
