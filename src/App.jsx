import { useState } from "react";
import React from "react";
import Navbar from "./Components/Navbar";
import ChessBoard from "./Components/ChessBoard";
import Instructions from "./Components/GameInstructions";
import Turn from "./Components/TurnIndicator";
import StartMenu from "./Components/StartMenu";
import ScoreBoard from "./Components/Scoreboard";

function App () {

  const [gameStarted, setGameStarted] = useState(false);
  const startGame = function () {
  setGameStarted(true);
  };

  const [currentTurn,setCurrentTurn] = useState("Player 1");

  const handleEndTurn = function ()  {
    setCurrentTurn(currentTurn === "Player 1" ? "Player 2" : "Player 1");
  };

  const handleResetGame= function () {
    setCurrentTurn('Player 1');
  }
  if (!gameStarted) {
    return <StartMenu onStart={startGame} />;
  }




  return (
    <div>
     <Navbar/>
     <Instructions/>
       <ChessBoard/>
      <Turn currentTurn={currentTurn}  onEndTurn={handleEndTurn}  onReset={handleResetGame}/>
      <ScoreBoard/>
    </div>
  )
}

export default App
