import React, { useContext } from "react";
import { quilleNumberContext } from "./context/quilleNumber";
import { roundNumberContext } from "./context/roundNumber";
import { scoreListContext } from "./context/scorelist";
import { playerListContext } from "./context/playerlist";
import { Link } from "react-router-dom";

export const StartMenu = () => {
    const { quilleNumber, setquilleNumber } = useContext(quilleNumberContext);
    const { roundNumber, setroundNumber } = useContext(roundNumberContext);
    const { scoreList, setScoreList } = useContext(scoreListContext);
    const { playerList, setPlayerList } = useContext(playerListContext);

    function quillesUpdate() {
        var nbQuilles = document.getElementById("nbQuilles") as HTMLInputElement;
        if (nbQuilles.value) {
            setquilleNumber(parseInt(nbQuilles.value));
        }
    }

    function roundsPlayerUpdate() {
        var nbRounds = document.getElementById("nbRounds") as HTMLInputElement;
        var nbPlayer = document.getElementById("nbPlayer") as HTMLInputElement;
        if (nbPlayer.value) {
            var player = [];
            for (var i = 0; i < parseInt(nbPlayer.value); i++) {
                player.push("Joueur " + (i + 1));
            }
            setPlayerList(player);
            console.log(playerList);
        }
        if (nbRounds.value) {
            setroundNumber(parseInt(nbRounds.value));
            var score = [];
            for (var i = 0; i < parseInt(nbPlayer.value); i++) {
                score.push(Array(2 * parseInt(nbRounds.value) + 1).fill(" "));
            }
            setScoreList(score);
            console.log(scoreList);
        }
    }

    return (
        <div>
            <form>
                <div className="row d-flex justify-content-center">
                    <div className="col-2 d-flex justify-content-end">
                        <label>Nombre de joueurs : </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">⛹️</span>
                            <input type="number" className="form-control" placeholder="Nombre de joueurs" id="nbPlayer" min="1" defaultValue={playerList.length} step="1" onChange={() => { roundsPlayerUpdate() }}
                                onKeyUp={event => {
                                    var score = document.getElementById("nbPlayer") as HTMLSelectElement;
                                    score.value = score.value.replace(/[^0-9]/g, "");
                                }
                                } />
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-2 d-flex justify-content-end">
                        <label>Nombre de quilles : </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">🎳</span>
                            <input type="number" className="form-control" placeholder="Nombre de quilles" id="nbQuilles" min="1" defaultValue={quilleNumber} step="1" onChange={() => { quillesUpdate() }}
                                onKeyUp={event => {
                                    var score = document.getElementById("nbQuilles") as HTMLSelectElement;
                                    score.value = score.value.replace(/[^0-9]/g, "");
                                }
                                } />
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-2 d-flex justify-content-end">
                        <label>Nombre de tours : </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">📍</span>
                            <input type="number" className="form-control" placeholder="Nombre de rounds" id="nbRounds" min="1" defaultValue={roundNumber} step="1" onChange={() => { roundsPlayerUpdate() }}
                                onKeyUp={event => {
                                    var score = document.getElementById("nbRounds") as HTMLSelectElement;
                                    score.value = score.value.replace(/[^0-9]/g, "");
                                }
                                } />
                        </div>
                    </div>
                </div>
            </form>
            <Link to="../Game"><button className="btn btn-light btn-outline-dark">Début de la partie</button></Link>
        </div>
    )
}