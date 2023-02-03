/* eslint-disable no-mixed-operators */
import React, { useContext ,useEffect} from "react";
import {scoreListContext} from "./context/scorelist";
import {playerListContext} from "./context/playerlist";
import {roundContext} from "./context/round";
import {quilleNumberContext} from "./context/quilleNumber";
import {roundNumberContext} from "./context/roundNumber";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

 const ScoreManager = () => {
    let navigate = useNavigate();
    const { scoreList,setScoreList} = useContext(scoreListContext);
    const { playerList} = useContext(playerListContext);
    const { round,setRound} = useContext(roundContext);
    const [lance, setLance] = React.useState(0);
    const [player, setPlayer] = React.useState(0);
    const { quilleNumber } = useContext(quilleNumberContext);
    const { roundNumber } = useContext(roundNumberContext);

    useEffect(() => {
        console.log("Round has been updated")
    }, [round])

    const updateScore = (player: number, lance: number, score: number) => {
        var newScoreList = [...scoreList];
        if (score === quilleNumber && (lance % 2 === 0 || lance === 19)) {
            newScoreList[player][lance] = 'X';
        } else if (score + +scoreList[player][lance - 1] === quilleNumber && (lance % 2) === 1) {
            newScoreList[player][lance] = '/';
        } else {
            newScoreList[player][lance] = score.toString();
        }
        setScoreList(newScoreList);
        console.log(scoreList);
    }

    return (
        <div className="scoreManager col-4 mx-auto">
            Au tour de {playerList[player]}<br></br>
            Tour n°{round} | Lance n°{lance + 1}<br></br>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">🎳</span>
                <input type="number" className="form-control" placeholder="Nombre de quilles tombées" id="quilles" min="0" max={quilleNumber}  
                onKeyUp={event=>{
                    var score = document.getElementById("quilles") as HTMLSelectElement;
                    score.value = score.value.replace(/[^0-9]/g,"");
                    var scoreValue = parseInt(score.value);
                    if(scoreValue>quilleNumber) score.value = String(quilleNumber);
                }
                }/>
            </div>
            <button id="quillesupdate" onClick={() => {
                var score = document.getElementById("quilles") as HTMLSelectElement;
                var scoreValue = parseInt(score.value);
                score.value = "";
                var numlance = 2 * round - 2 + lance;

                if (Number.isNaN(scoreValue)) {
                    alert("Veuillez choisir le nombre de quilles tombées");
                    return;
                } else if (round < roundNumber && lance === 1 && scoreValue + +scoreList[player][numlance - 1] <= quilleNumber || (round === roundNumber) || (lance === 0)) {

                    updateScore(player, numlance, scoreValue);


                    if (round < roundNumber) {
                        if (scoreValue === quilleNumber && lance === 0) {
                            setLance(0);
                            if (player === 1) {
                                setRound(round + 1);
                            }
                        } else {
                            setLance((lance + 1) % 2);
                        }
                        if (player === 1 && lance === 1) {
                            setRound(round + 1);
                        }
                        if (lance === 1 || lance === 0 && scoreValue === quilleNumber) {
                            setPlayer((player + 1) % 2);
                        }
                    }
                    else { //last round

                        if (lance === 2 && player === 1) {

                            document.getElementById("quilles")?.remove(); //end game
                            document.getElementById("quillesupdate")?.remove(); //end game
                            setLance(0);
                            navigate("../Endgame");
                        }else if (lance === 2){
                            setPlayer(1);
                            setLance(0);
                        }

                        if ((lance === 1 && scoreList[player][numlance - 1] === 'X') || scoreList[player][numlance] === '/') {
                            setLance(2);
                        } else if (lance === 1 && player === 1) {
                            document.getElementById("quilles")?.remove(); //end game
                            document.getElementById("quillesupdate")?.remove(); //end game
                            navigate("../Endgame");
                            setLance(0);
                        } else if (lance === 1) {
                            setPlayer(1);
                            setLance(0);
                        } else if (lance !== 2) {
                            setLance((lance + 1) % 2);
                        }

                    }
                } else {
                    alert("Score invalide")
                }
            }
            }>Valider</button>
        </div>
    );
}
export default ScoreManager;


