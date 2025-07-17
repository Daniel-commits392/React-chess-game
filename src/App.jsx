import React from "react";
import Navbar from "./Components/Navbar";
import Chessboard from "./Components/Chessboard";
import Instructions from "./Components/GameInstructions";

function App () {
  return (
    <div>
     
     <Navbar/>
     <Instructions/>
       <Chessboard/>
    </div>
  )
}

export default App
