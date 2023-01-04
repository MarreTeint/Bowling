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

export default function ScoreManager(props) {
    var _a = React.useState(props.playerList), playerList = _a[0], setPlayerList = _a[1];
    var _b = React.useState(props.scoreList), scoreList = _b[0], setScoreList = _b[1];
    var _c = React.useState(1), round = _c[0], setRound = _c[1];
    var _d = React.useState(0), lance = _d[0], setLance = _d[1];
    var _e = React.useState(0), player = _e[0], setPlayer = _e[1];
    return (_jsxs("div", __assign({ className: "scoreManager" }, { children: ["Au tour de ", playerList[player], _jsx("br", {}), "Tour n\u00B0", round, " | Lance n\u00B0", lance + 1, _jsx("br", {}), _jsxs("select", __assign({ id: "quilles" }, { children: [_jsx("option", __assign({ value: "0" }, { children: "0" })), _jsx("option", __assign({ value: "1" }, { children: "1" })), _jsx("option", __assign({ value: "2" }, { children: "2" })), _jsx("option", __assign({ value: "3" }, { children: "3" })), _jsx("option", __assign({ value: "4" }, { children: "4" })), _jsx("option", __assign({ value: "5" }, { children: "5" })), _jsx("option", __assign({ value: "6" }, { children: "6" })), _jsx("option", __assign({ value: "7" }, { children: "7" })), _jsx("option", __assign({ value: "8" }, { children: "8" })), _jsx("option", __assign({ value: "9" }, { children: "9" })), _jsx("option", __assign({ value: "10" }, { children: "10" }))] })), _jsx("button", __assign({ onClick: function () {
                    if (lance + 1 == 2 && round < 10) {
                        setPlayer((player + 1) % 2);
                    }
                    else if (lance + 1 == 3 && round == 10) {
                        setPlayer((player + 1) % 2);
                    }
                    if (round == 10) {
                        setLance((lance + 1) % 3);
                    }
                    else {
                        setLance((lance + 1) % 2);
                    }
                    if (player == 1 && lance == 1) {
                        setRound(round + 1);
                    }
                } }, { children: "Valider" }))] })));
}
