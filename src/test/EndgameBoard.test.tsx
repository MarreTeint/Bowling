import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import {scoreListContext} from "../context/scorelist";
import {playerListContext} from "../context/playerlist";
import {roundContext} from "../context/round";
import {roundNumberContext} from "../context/roundNumber";
import {quilleNumberContext} from "../context/quilleNumber";
import EndGame from "../pages/EndGame";

function strRandom(o:any) {
    var a = 10,
        b = 'abcdefghijklmnopqrstuvwxyz',
        c = '',
        d = 0,
        e = ''+b;
    if (o) {
      if (o.startsWithLowerCase) {
        c = b[Math.floor(Math.random() * b.length)];
        d = 1;
      }
      if (o.length) {
        a = o.length;
      }
      if (o.includeUpperCase) {
        e += b.toUpperCase();
      }
      if (o.includeNumbers) {
        e += '1234567890';
      }
    }
    for (; d < a; d++) {
      c += e[Math.floor(Math.random() * e.length)];
    }
    return c;
  }


for (let index = 0; index < 15; index++) {
  
  

    
test("afficha nom des joueur n°"+index, () => {
 
    
       
  const  playerNamTest1= strRandom({length: 10, includeUpperCase: true, includeNumbers: true});
    const  playerNamTest2= strRandom({length: 10, includeUpperCase: true, includeNumbers: true});

     render(
    <roundNumberContext.Provider value={{roundNumber:10,setroundNumber:()=>{}}}>
    <quilleNumberContext.Provider value={{quilleNumber:10,setquilleNumber:()=>{}}}>
    <roundContext.Provider value={{round:0,setRound:()=>{}}}>
      <playerListContext.Provider value={{playerList:[playerNamTest1, playerNamTest2] ,setPlayerList:()=>{}}}>
        <scoreListContext.Provider value={{scoreList: [[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]], setScoreList: ()=>{}}}>
        <BrowserRouter>
          <Routes>
            <Route index element={<EndGame/>} />                        
          </Routes>
        </BrowserRouter>                
        </scoreListContext.Provider>
      </playerListContext.Provider>
    </roundContext.Provider>  
    </quilleNumberContext.Provider>
    </roundNumberContext.Provider>  

   
  );

  const linkElement1 = screen.getAllByText(playerNamTest1);

  linkElement1.forEach(element => {
     expect(element).toBeInTheDocument();
    
  });

 

    const linkElement2 = screen.getAllByText(playerNamTest2);

    linkElement2.forEach(element => {

      expect(element).toBeInTheDocument();
    });

  


});

}