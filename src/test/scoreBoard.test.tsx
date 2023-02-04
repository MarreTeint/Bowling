import ScoreBoard from '../scoreBoard';
import { render, screen } from '@testing-library/react';
import {scoreListContext} from "../context/scorelist";
import {playerListContext} from "../context/playerlist";
import {roundContext} from "../context/round";
import {roundNumberContext} from "../context/roundNumber";
import {quilleNumberContext} from "../context/quilleNumber";



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
   
    
    
    });
    
}
