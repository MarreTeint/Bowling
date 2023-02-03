import React from 'react';
import './App.css';
import Game from "./pages/Game";
import EndGame from './pages/EndGame';
import GameSetting from './pages/GameSetting';
import GameMenu from './pages/GameMenu';
import {scoreListContext} from "./context/scorelist";
import {playerListContext} from "./context/playerlist";
import {roundContext} from "./context/round";
import {roundNumberContext} from "./context/roundNumber";
import {quilleNumberContext} from "./context/quilleNumber";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';


function App() {
    const [scoreList, setScoreList]= React.useState([[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]]);
    const [round, setRound]= React.useState(1);
    const [quilleNumber, setquilleNumber]= React.useState(10);
    const [roundNumber, setRoundNumber]= React.useState(10);
    const [playerList, setPlayerList]= React.useState(["Joueur 1", "Joueur 2"]);


    return (    
    <div className="App">
      <roundNumberContext.Provider value={{roundNumber:roundNumber,setroundNumber:setRoundNumber}}>
      <quilleNumberContext.Provider value={{quilleNumber:quilleNumber,setquilleNumber:setquilleNumber}}>
      <roundContext.Provider value={{round:round,setRound:setRound}}>
        <playerListContext.Provider value={{playerList:playerList,setPlayerList:setPlayerList}}>
          <scoreListContext.Provider value={{scoreList: scoreList, setScoreList: setScoreList}}>
            <BrowserRouter>
              <Routes>     
                <Route index element={<GameMenu />} />
                <Route path="Game" element={<Game/>}/>
                <Route path="Endgame" element={<EndGame/>} />
                <Route path="GameSetting" element={<GameSetting />} />                 
              </Routes>
            </BrowserRouter>              
          </scoreListContext.Provider>
        </playerListContext.Provider>
      </roundContext.Provider>  
      </quilleNumberContext.Provider>
      </roundNumberContext.Provider>
    </div>
  );
}

export default App;
