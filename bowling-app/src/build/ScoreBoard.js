import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export default function ScoreBoards(props) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);
    return (_jsx("div", Object.assign({ className: "scoreboard" }, { children: "Notre tableau de scores" })));
}
