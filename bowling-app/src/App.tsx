import React from 'react';
import './App.css';
import ScoreBoard from "./build/ScoreBoard";
import ScoreManager from "./build/ScoreManager";

const pLayerList = ["Player 1", "Player 2"];

//const scoreList = ;
//array de 21 space par joueur
const scoreList = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];


function App() {
  return (
    <div className="App">

      <ScoreBoard playerList={pLayerList} scoreList={scoreList}/>
      <ScoreManager playerList={pLayerList} scoreList={scoreList} />
     
     
    </div>
  );
}

export default App;
