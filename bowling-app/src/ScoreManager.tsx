import React, { useContext } from "react";
import {scoreListContext} from "./context/scoreListContext";
import {playerListContext} from "./context/playerListContext";
import {roundContext} from "./context/roundContext";

export default function ScoreManager() {
    const {scoreList, setScoreList} = useContext(scoreListContext);
    const {playerList, setPlayerList} = useContext(playerListContext);
    const {round, setRound} = useContext(roundContext);

    return (
        <div>{scoreList}</div>
    )

}