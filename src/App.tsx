import React from 'react';
import './App.css';
import ScoreBoard from "./scoreBoard";
import ScoreManager from "./scoreManager";
import {scoreListContext} from "./context/scorelist";
import {playerListContext} from "./context/playerlist";
import {roundContext} from "./context/round";
import './App.css';


function App() {
  const [scoreList, setScoreList]= React.useState([[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]]);
   const [round, setRound]= React.useState(1);
  const [playerList, setPlayerList]= React.useState(["Player 1", "Player 2"]);

    return (    
    <div className="App">
      <roundContext.Provider value={{round:round,setRound:setRound}}>
        <playerListContext.Provider value={{playerList:playerList,setPlayerList:setPlayerList}}>
          <scoreListContext.Provider value={{scoreList: scoreList, setScoreList: setScoreList}}>
            <ScoreBoard />
            <ScoreManager />
          </scoreListContext.Provider>
        </playerListContext.Provider>
      </roundContext.Provider>     
    </div>
  );
}

export default App;
