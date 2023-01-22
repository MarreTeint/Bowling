import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './App.css';
import ScoreManager from "./build/ScoreManager";
import { scoreListContext } from "./context/scoreListContext";
import { playerListContext } from "./context/playerListContext";
import { roundContext } from "./context/roundContext";
import ScoreBoard from "./ScoreBoard";
function App() {
    const [scoreList, setScoreList] = React.useState([[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]]);
    const [playerList, setPlayerList] = React.useState(["Player 1", "Player 2"]);
    const [round, setRound] = React.useState(1);
    return (_jsx("div", Object.assign({ className: "App" }, { children: _jsx(scoreListContext.Provider, Object.assign({ value: { scoreList, setScoreList } }, { children: _jsx(playerListContext.Provider, Object.assign({ value: { playerList, setPlayerList } }, { children: _jsxs(roundContext.Provider, Object.assign({ value: { round, setRound } }, { children: [_jsx(ScoreManager, {}), _jsx(ScoreBoard, {})] })) })) })) })));
}
export default App;
