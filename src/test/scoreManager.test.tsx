import Game from "../pages/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen ,fireEvent} from '@testing-library/react';
//import React, { useContext,useEffect } from "react";
import {scoreListContext} from "../context/scorelist";
import {playerListContext} from "../context/playerlist";
import {roundContext} from "../context/round";
import {roundNumberContext} from "../context/roundNumber";
import {quilleNumberContext} from "../context/quilleNumber";





    
    test("sur scoremanager strike", () => {
    
       
        const alertMock = jest.fn();
        window.alert = alertMock;
        
        render(
        <roundNumberContext.Provider value={{roundNumber:10,setroundNumber:()=>{}}}>
        <quilleNumberContext.Provider value={{quilleNumber:10,setquilleNumber:()=>{}}}>
        <roundContext.Provider value={{round:0,setRound:()=>{}}}>
          <playerListContext.Provider value={{playerList:["Player 1", "Player 2"] ,setPlayerList:()=>{}}}>
            <scoreListContext.Provider value={{scoreList: [[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]], setScoreList: ()=>{}}}>
            <BrowserRouter>
              <Routes>
                <Route index element={<Game />} />                        
              </Routes>
            </BrowserRouter>                
            </scoreListContext.Provider>
          </playerListContext.Provider>
        </roundContext.Provider>  
        </quilleNumberContext.Provider>
        </roundNumberContext.Provider>  
    
       
      );

    let quilleInput = screen.getByPlaceholderText("Nombre de quilles tombées");
    fireEvent.change(quilleInput, { target: { value: '2' } });
    fireEvent.click(screen.getByText('Valider'));

    
    });






