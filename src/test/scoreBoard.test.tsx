import ScoreBoard from '../scoreBoard';
import { render, screen } from '@testing-library/react';
import React, { useContext,useEffect } from "react";
import {scoreListContext} from "../context/scorelist";
import {playerListContext} from "../context/playerlist";
import {roundContext} from "../context/round";
import {roundNumberContext} from "../context/roundNumber";
import {quilleNumberContext} from "../context/quilleNumber";
import ScoreProcess from "../scoreProcess";


test("sur scoreBoard pour 10 tour ", () => {
    

    
    render(
    <roundNumberContext.Provider value={{roundNumber:10,setroundNumber:()=>{}}}>
    <quilleNumberContext.Provider value={{quilleNumber:10,setquilleNumber:()=>{}}}>
    <roundContext.Provider value={{round:10,setRound:()=>{}}}>
      <playerListContext.Provider value={{playerList:["Player 1", "Player 2"] ,setPlayerList:()=>{}}}>
        <scoreListContext.Provider value={{scoreList: [[" ", " ", " ", " ", " ", " ", "8", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]], setScoreList: ()=>{}}}>
            <ScoreBoard/>
        </scoreListContext.Provider>
      </playerListContext.Provider>
    </roundContext.Provider>  
    </quilleNumberContext.Provider>
    </roundNumberContext.Provider>  

   
  );

const linkElement = screen.getByText('Tour n°10');
expect(linkElement).toBeInTheDocument();

const linkElement1 = screen.getByText('8');
expect(linkElement1).toBeInTheDocument();


});

for (let index = 1; index <15; index++) {
    
    test("sur scoreBoard pour "+index+"  tour ", () => {
    

    
        render(
        <roundNumberContext.Provider value={{roundNumber:index,setroundNumber:()=>{}}}>
        <quilleNumberContext.Provider value={{quilleNumber:10,setquilleNumber:()=>{}}}>
        <roundContext.Provider value={{round:10,setRound:()=>{}}}>
          <playerListContext.Provider value={{playerList:["Player 1", "Player 2"] ,setPlayerList:()=>{}}}>
            <scoreListContext.Provider value={{scoreList: [[" ", " ", " ", " ", " ", " ", "8", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]], setScoreList: ()=>{}}}>
                <ScoreBoard/>
            </scoreListContext.Provider>
          </playerListContext.Provider>
        </roundContext.Provider>  
        </quilleNumberContext.Provider>
        </roundNumberContext.Provider>  
    
       
      );
    
    const linkElement = screen.getByText('Tour n°'+index);
    expect(linkElement).toBeInTheDocument();
    
    const linkElement1 = screen.getByText('8');
    expect(linkElement1).toBeInTheDocument();
    
    
    });
    
}
