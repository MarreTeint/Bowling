import React from 'react';
import './App.css';
import ScoreManager from "./build/ScoreManager";
import {scoreListContext} from "./context/scoreListContext";
import {playerListContext} from "./context/playerListContext";
import {roundContext} from "./context/roundContext";
import ScoreBoard from "./ScoreBoard";







  



function App() {

  const [scoreList, setScoreList]= React.useState([[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]]);
  const [playerList, setPlayerList] = React.useState(["Player 1", "Player 2"]);
  const [round, setRound] = React.useState(1);

  return (
    <div className="App">
      <scoreListContext.Provider value={{scoreList, setScoreList}}>
        <playerListContext.Provider value={{playerList, setPlayerList}}>
          <roundContext.Provider value={{round, setRound}}>
            
          <ScoreBoard />
          <ScoreManager />
            
          </roundContext.Provider>
        </playerListContext.Provider>
      </scoreListContext.Provider>
 
        
    
    </div>
  );
}

export default App;
