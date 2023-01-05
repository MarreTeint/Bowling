import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

export default function ScoreBoards(props) {
    var _a = React.useState(props.playerList), playerList = _a[0], setPlayerList = _a[1];
    var _b = React.useState(props.scoreList), scoreList = _b[0], setScoreList = _b[1];
    return (_jsx("div", __assign({ className: "scoreboard" }, { children: _jsxs("table", { children: [_jsxs("thead", { children: [_jsx("td", __assign({ className: "blackText" }, { children: "Player " })), _jsx("td", __assign({ className: "blackText", colSpan: 21 }, { children: " Score Board" })), _jsx("td", __assign({ className: "blackText" }, { children: "Total " }))] }), _jsxs("tbody", { children: [_jsx(PLayerSCoreBoards, { PlayerName: playerList[0], PlayerSCore: scoreList[0] }), _jsx(PLayerSCoreBoards, { PlayerName: playerList[1], PlayerSCore: scoreList[1] })] })] }) })));
}
function PLayerSCoreBoards(props) {
    var PlayerSCore = props.PlayerSCore;
    var PlayerName = props.PlayerName;
    //return un tableau des scores
    var Score = PlayerSCore.map(function (score) {
        return _jsx("td", { children: score });
    });
    return (_jsxs("tr", __assign({ className: "scoreboard" }, { children: [_jsx("td", __assign({ scope: "row", className: "blackText" }, { children: PlayerName })), Score, _jsx("td", { children: "No" })] })));
}
