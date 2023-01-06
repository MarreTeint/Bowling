import React from 'react';
import './App.css';
import ScoreManager from "./build/ScoreManager";
import { scoreFromPins } from './scoreProcess';

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
    {// TODO : SORTIR LE SCOREBOARD DU SCOREMANAGER
  }
    
      <ScoreManager playerList={pLayerList} scoreList={scoreList} />
     
    
    </div>
  );
}

export default App;
