var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
export default function ScoreManager(props) {
    var _a = React.useState(props.playerList), playerList = _a[0], setPlayerList = _a[1];
    var _b = React.useState(props.scoreList), scoreList = _b[0], setScoreList = _b[1];
    return (_jsx("div", __assign({ className: "scoreManager" }, { children: _jsxs("select", { children: [_jsx("option", { children: "1" }), _jsx("option", { children: "2" }), _jsx("option", { children: "3" }), _jsx("option", { children: "4" }), _jsx("option", { children: "5" }), _jsx("option", { children: "6" }), _jsx("option", { children: "7" }), _jsx("option", { children: "8" }), _jsx("option", { children: "9" }), _jsx("option", { children: "10" })] }) })));
}
