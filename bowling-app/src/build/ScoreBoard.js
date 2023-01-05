import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
export default function ScoreBoards(props) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);
    return (_jsx("div", Object.assign({ className: "scoreboard" }, { children: _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("td", Object.assign({ className: "blackText" }, { children: "Player " })), _jsx("td", Object.assign({ className: "blackText", colSpan: 21 }, { children: " Score Board" })), _jsx("td", Object.assign({ className: "blackText" }, { children: "Total " }))] }) }), _jsxs("tbody", { children: [_jsx(PLayerSCoreBoards, { PlayerName: playerList[0], PlayerSCore: scoreList[0] }), _jsx(PLayerSCoreBoards, { PlayerName: playerList[1], PlayerSCore: scoreList[1] })] })] }) })));
}
export function PLayerSCoreBoards(props) {
    const PlayerSCore = props.PlayerSCore;
    const PlayerName = props.PlayerName;
    //return un tableau des scores
    const Score = PlayerSCore.map((score, index) => _jsx("td", { children: score }, index));
    return (_jsxs("tr", Object.assign({ className: "scoreboard" }, { children: [_jsx("td", Object.assign({ scope: "row", className: "blackText" }, { children: PlayerName })), Score, _jsx("td", { children: "No" })] })));
}
