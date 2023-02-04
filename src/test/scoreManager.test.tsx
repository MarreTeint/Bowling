import ScoreManger from "../scoreManager";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen ,fireEvent} from '@testing-library/react';
//import React, { useContext,useEffect } from "react";
import {scoreListContext} from "../context/scorelist";
import {playerListContext} from "../context/playerlist";
import {roundContext} from "../context/round";
import {roundNumberContext} from "../context/roundNumber";
import {quilleNumberContext} from "../context/quilleNumber";





    
    test("sur scoremanager pour nombre incorrect de quille entrée", () => {
    
       
        const alertMock = jest.fn();
        window.alert = alertMock;
        
        render(
        <roundNumberContext.Provider value={{roundNumber:10,setroundNumber:()=>{}}}>
        <quilleNumberContext.Provider value={{quilleNumber:10,setquilleNumber:()=>{}}}>
        <roundContext.Provider value={{round:10,setRound:()=>{}}}>
          <playerListContext.Provider value={{playerList:["Player 1", "Player 2"] ,setPlayerList:()=>{}}}>
            <scoreListContext.Provider value={{scoreList: [[" ", " ", " ", " ", " ", " ", "8", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]], setScoreList: ()=>{}}}>
            <BrowserRouter>
              <Routes>
                <Route index element={<ScoreManger />} />                        
              </Routes>
            </BrowserRouter>                
            </scoreListContext.Provider>
          </playerListContext.Provider>
        </roundContext.Provider>  
        </quilleNumberContext.Provider>
        </roundNumberContext.Provider>  
    
       
      );
  //fireEvent.click(screen.getByText('8'));
  //input the number 10 in the input field of class form-control and click on the button with the text Valider 
    fireEvent.change(screen.getByPlaceholderText("Nombre de quilles tombées"), { target: { value: '9' } });
    fireEvent.click(screen.getByText('Valider'));

    fireEvent.change(screen.getByPlaceholderText("Nombre de quilles tombées"), { target: { value: '10' } });
    fireEvent.click(screen.getByText('Valider'));

    //expect(alertMock).toHaveBeenCalledWith('Score invalide');


    
    
    
    });


    test('test alert() function', () => {
        const alertMock = jest.fn();
        window.alert = alertMock;
        const { getByText } = render(<button onClick={() => alert('Alert triggered')}>Click me</button>);
        fireEvent.click(screen.getByText('Click me'));
        expect(alertMock).toHaveBeenCalledWith('Alert triggered');
      });



