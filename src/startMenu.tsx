import React, {useContext} from "react";
import {quilleNumberContext} from "./context/quilleNumber";
import {roundNumberContext} from "./context/roundNumber";
import {scoreListContext} from "./context/scorelist";
import {playerListContext} from "./context/playerlist";
import {  Link } from "react-router-dom";

export const StartMenu = () => {
    const {quilleNumber, setquilleNumber} = useContext(quilleNumberContext);
    const {roundNumber, setroundNumber} = useContext(roundNumberContext);
    const {scoreList, setScoreList} = useContext(scoreListContext);
    const {playerList, setPlayerList} = useContext(playerListContext);

    function quillesUpdate(){
        var nbQuilles = document.getElementById("nbQuilles") as HTMLInputElement;
        if(nbQuilles.value){
            setquilleNumber(parseInt(nbQuilles.value));
        }
    }

    function roundsPlayerUpdate(){
        var nbRounds = document.getElementById("nbRounds") as HTMLInputElement;
        var nbPlayer = document.getElementById("nbPlayer") as HTMLInputElement;
        if(nbPlayer.value){
            var player = [];
            for(var i=0; i<parseInt(nbPlayer.value); i++){
                player.push("Joueur "+(i+1));
            }
            setPlayerList(player);
            console.log(playerList);
        }
        if(nbRounds.value){
            setroundNumber(parseInt(nbRounds.value));
            var score = [];
            for(var i=0; i<parseInt(nbPlayer.value); i++){
                score.push(Array(2*parseInt(nbRounds.value)+1).fill(" "));
            }
            setScoreList(score);
            console.log(scoreList);
        }
    }

    return(
        <div>
            <form>
                <label>Nombre de joueurs</label> <input id="nbPlayer" type="number" min="1" step="1" defaultValue={playerList.length} onChange={()=>{roundsPlayerUpdate()}}></input>
                <label>Nombre de quilles : </label> <input id="nbQuilles" type="number" min="1" step="1" defaultValue={quilleNumber} onChange={()=>{quillesUpdate()}}></input>
                <label>Nombre de tours : </label> <input id="nbRounds" type="number" min="1" step="1" defaultValue={roundNumber} onChange={()=>{roundsPlayerUpdate()}}></input>
            </form>
            <button><Link to="../Game">Début de la partie</Link></button> 
        </div>
    )
}