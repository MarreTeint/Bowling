import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
export default function ScoreBoards(props) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);
    return (_jsx("div", Object.assign({ className: "scoreboard" }, { children: _jsxs("table", { children: [_jsxs("thead", { children: [_jsx("td", Object.assign({ className: "blackText" }, { children: "Player" })), _jsx("td", Object.assign({ className: "blackText", colSpan: 21 }, { children: " Score Board" })), _jsx("td", Object.assign({ className: "blackText" }, { children: "Total " }))] }), _jsxs("tbody", { children: [_jsxs("tr", Object.assign({ className: "rounds" }, { children: [_jsx("td", { className: "black" }), _jsx("td", Object.assign({ colSpan: 2 }, { children: "Tour n\u00B01" })), _jsx("td", Object.assign({ colSpan: 2 }, { children: "Tour n\u00B02" })), _jsx("td", Object.assign({ colSpan: 2 }, { children: "Tour n\u00B03" })), _jsx("td", Object.assign({ colSpan: 2 }, { children: "Tour n\u00B04" })), _jsx("td", Object.assign({ colSpan: 2 }, { children: "Tour n\u00B05" })), _jsx("td", Object.assign({ colSpan: 2 }, { children: "Tour n\u00B06" })), _jsx("td", Object.assign({ colSpan: 2 }, { children: "Tour n\u00B07" })), _jsx("td", Object.assign({ colSpan: 2 }, { children: "Tour n\u00B08" })), _jsx("td", Object.assign({ colSpan: 2 }, { children: "Tour n\u00B09" })), _jsx("td", Object.assign({ colSpan: 3 }, { children: "Tour n\u00B010" })), _jsx("td", { className: "black" })] })), _jsx(PLayerSCoreBoards, { PlayerName: playerList[0], PlayerSCore: scoreList[0] }), _jsx(PLayerSCoreBoards, { PlayerName: playerList[1], PlayerSCore: scoreList[1] })] })] }) })));
}
function PLayerSCoreBoards(props) {
    const PlayerSCore = props.PlayerSCore;
    const PlayerName = props.PlayerName;
    //return un tableau des scores
    const Score = PlayerSCore.map((score) => _jsx("td", { children: score }));
    return (_jsxs("tr", Object.assign({ className: "scoreboard" }, { children: [_jsx("td", Object.assign({ scope: "row", className: "blackText" }, { children: PlayerName })), Score, _jsx("td", { children: "No" })] })));
}
