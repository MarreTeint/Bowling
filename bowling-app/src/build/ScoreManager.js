import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export default function ScoreManager(props) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);
    return (_jsx("div", { className: "scoreboard" }));
}
