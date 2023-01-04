import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export default function ScoreManager(props) {
    var _a = React.useState(props.playerList), playerList = _a[0], setPlayerList = _a[1];
    var _b = React.useState(props.scoreList), scoreList = _b[0], setScoreList = _b[1];
    return (_jsx("div", { className: "scoreboard" }));
}
