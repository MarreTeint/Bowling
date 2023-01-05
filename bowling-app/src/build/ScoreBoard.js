import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
/**
 * @author Leborgne Kevin
 * @version 1.0
 * @description Génere le tableau de score des participants
 * @param props Liste des participants et liste des scores
 * @returns Tableau de score des participants
*/
export default function ScoreBoards(props) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);
    return (_jsx("div", Object.assign({ className: "scoreboard" }, { children: _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("td", Object.assign({ className: "blackText" }, { children: "Player " })), _jsx("td", Object.assign({ className: "blackText", colSpan: 21 }, { children: " Score Board" })), _jsx("td", Object.assign({ className: "blackText" }, { children: "Total " }))] }) }), _jsxs("tbody", { children: [_jsx(PLayerSCoreBoards, { PlayerName: playerList[0], PlayerSCore: scoreList[0] }), _jsx(PLayerSCoreBoards, { PlayerName: playerList[1], PlayerSCore: scoreList[1] })] })] }) })));
}
/**
 * @author Leborgne Kevin
 * @version 1.0
 * @description Génere la ligne du tableaux de score correspondant aux participant et à son score donnée en paramètre  *
 * @param props Nom et score du participant
 * @returns Ligne du tableau de score correspondant au participant et à son score
 */
export function PLayerSCoreBoards(props) {
    const PlayerSCore = props.PlayerSCore;
    const PlayerName = props.PlayerName;
    const Score = PlayerSCore.map((score, index) => _jsx("td", { children: score }, index));
    return (_jsxs("tr", Object.assign({ className: "scoreboard" }, { children: [_jsx("td", Object.assign({ scope: "row", className: "blackText" }, { children: PlayerName })), Score, _jsx("td", { children: "No" })] })));
}
