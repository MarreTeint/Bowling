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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import ScoreBoard from "./build/ScoreBoard";
import ScoreManager from "./build/ScoreManager";
var pLayerList = ["Player 1", "Player 2"];
//const scoreList = ;
//array de 21 space par joueur
var scoreList = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
function App() {
    return (_jsxs("div", __assign({ className: "App" }, { children: [_jsx(ScoreBoard, { playerList: pLayerList, scoreList: scoreList }), _jsx(ScoreManager, { playerList: pLayerList, scoreList: scoreList })] })));
}
export default App;
