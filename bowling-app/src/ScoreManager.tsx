import React, { useContext } from "react";
import {scoreListContext} from "./context/scoreListContext";
import {playerListContext} from "./context/playerListContext";
import {roundContext} from "./context/roundContext";


/**
 * @author ZERBIB-SEBIROT Martin
 * @version 1.0
 * @description
 * @param pro
 * @returns 
 */
export default function ScoreManager(props: any) {
   
    const [lance, setLance] = React.useState(0);
    const [player, setPlayer] = React.useState(0);
    const {playerList, setPlayerList} = useContext(playerListContext);
    const {scoreList, setScoreList}= useContext(scoreListContext);
    const {round, setRound} =  useContext(roundContext);

    const updateScore = (player: number, lance: number, score: number) => {
        console.log("updateScore")
        
        var newScoreList = scoreList;       
        if(score === 10 && (lance%2 === 0 || lance===19) ){
            newScoreList[player][lance] = 'X';
        }else if(score + +scoreList[player][lance-1] === 10 && (lance%2)===1){
            newScoreList[player][lance] = '/';
        }else{
            newScoreList[player][lance] = score.toString();
        }

        setScoreList(newScoreList,);
        console.log(scoreList)
        
    }



    return (        
        <div className="scoreManager">
            Au tour de {playerList[player]}<br></br>
            Tour n°{round} | Lance n°{lance+1}<br></br>
            <select id = "quilles">
                <option value = "0">0</option>
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
                <option value = "5">5</option>
                <option value = "6">6</option>
                <option value = "7">7</option>
                <option value = "8">8</option>
                <option value = "9">9</option>
                <option value = "10">10</option>
            </select>
            <button id="quillesupdate" onClick={()=>{
                var score = document.getElementById("quilles") as HTMLSelectElement;
                var scoreValue = parseInt(score.value);
                var numlance = 2*round-2+lance;
            
               
                
                if(round < 10 && lance === 1 && scoreValue + +scoreList[player][numlance-1] <= 10 || (round === 10 )|| (lance === 0)){
                   
                    updateScore(player, numlance, scoreValue);


                    if(round<10){
                        if(scoreValue === 10 && lance === 0){
                            setLance(0);
                            if(player ===1){
                                setRound(round+1);
                            }
                        }else{
                            setLance((lance+1)%2);
                        }
                        if(player ===1 && lance === 1){
                            setRound(round+1);
                        }
                        if(lance === 1 || lance === 0 && scoreValue === 10){
                            setPlayer((player+1)%2);
                        }
                    }
                    else{ //round 10
                        
                        if(lance === 2 && player === 1){
                           
                            document.getElementById("quilles")?.remove(); //end game
                            document.getElementById("quillesupdate")?.remove(); //end game
                            setLance(0);
                        }else if (lance === 2){
                            setPlayer(1);
                            setLance(0);
                        }

                        if(lance === 1 && scoreList[player][numlance-1] === 'X' || scoreList[player][numlance] === '/'){
                            setLance(2);
                        }else if(lance === 1 && player === 1){
                            document.getElementById("quillesupdate")?.remove(); //end game
                            setLance(0);
                        }else if(lance === 1){
                            setPlayer(1);
                            setLance(0);
                        }else if (lance !==2){
                            setLance((lance+1)%2);
                        }

                    }
                }else{
                    alert("Score invalide")
                }
            }
            }>Valider</button>      
       </div>
    );    
}