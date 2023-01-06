import React from 'react';
import './App.css';
import ScoreManager from "./build/ScoreManager";

const pLayerList = ["Player 1", "Player 2"];

//const scoreList = ;
//array de 21 0 par joueur


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

/**
 * Returns the score array from a rolls array
 * 
 * @remarks
 * /!\ A strike is represented by a [10], not a [10, 0] /!\
 * 
 * @param rolls - array representing the succesive rolls of a bowling game 
 * 
 * @returns
 * The score array
 */
function scoreFromPins(pins:number[]) {
  var score:number[] = new Array(10);
  var counter:number = 0;
  for (let i = 0; i + 1 < pins.length; i+=2)
  {
    if (pins[i] + pins[i+1] < 10)
    {
      score[counter] = pins[i] + pins[i+1];
      counter++;
      continue;
    }

    if (i+2 >= pins.length)
    {
      break;
    }

    score[counter] = pins[i] + pins[i+1] + pins[i+2]
    counter+=1

    if (pins[i] === 10)
    {
      i--;
    }

  }

  for (let i = 1; i < 10; i++)
  {
    score[i] += score[i-1];
  }

  return score;
}


export default App;
