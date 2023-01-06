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

  const rolls1:number[] = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  const expected_score1:number[] = [30, 60, 90, 120, 150, 180, 210, 240, 300];

  const rolls2:number[] = [8, 1, 0, 9, 2, 8, 10, 6, 3, 7, 0, 5, 2, 10, 0, 6, 2, 8, 10];
  const expected_score2:number[] = [9, 18, 38, 57, 66, 73, 80, 96, 102, 122];

  var r1 = scoreFromPins(rolls1);
  var r2 = scoreFromPins(rolls2);

  var str1:string = "";
  var str2:string = "";

  for (let i = 0; i < 10; i++)
  {
    str1 += r1[i]+" ";
    str2 += r2[i]+" ";
  }

  return (
    <div className="App">
    {// TODO : SORTIR LE SCOREBOARD DU SCOREMANAGER
  }
    {str1} <br></br>
    {str2}
      <ScoreManager playerList={pLayerList} scoreList={scoreList} />
     
    
    </div>
  );
}

export default App;
