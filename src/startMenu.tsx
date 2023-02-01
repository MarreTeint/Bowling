import React, {useContext} from "react";
import {quilleNumberContext} from "./context/quilleNumber";
import {roundNumberContext} from "./context/roundNumber";
import {scoreListContext} from "./context/scorelist";

export const StartMenu = () => {
    const {quilleNumber, setquilleNumber} = useContext(quilleNumberContext);
    const {roundNumber, setroundNumber} = useContext(roundNumberContext);
    const {scoreList, setScoreList} = useContext(scoreListContext);

    function quillesUpdate(){
        var nbQuilles = document.getElementById("nbQuilles") as HTMLInputElement;
        if(nbQuilles.value){
            setquilleNumber(parseInt(nbQuilles.value));
        }
    }

    function roundsUpdate(){
        var nbRounds = document.getElementById("nbRounds") as HTMLInputElement;
        if(nbRounds.value){
            setroundNumber(parseInt(nbRounds.value));
            setScoreList([Array(2*parseInt(nbRounds.value)+1).fill(" "),Array(2*parseInt(nbRounds.value)+1).fill(" ")]);
        }
    }

    return(
        <div>
            <form>
                <label>Nombre de Quilles : </label> <input id="nbQuilles" type="number" min="1" max="10" step="1" defaultValue={quilleNumber} onChange={()=>{quillesUpdate()}}></input>
                <label>Nombre de tours : </label> <input id="nbRounds" type="number" min="1" max="10" step="1" defaultValue={roundNumber} onChange={()=>{roundsUpdate()}}></input>
            </form>
        </div>
    )
}