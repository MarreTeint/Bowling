import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import ScoreManager from "./build/ScoreManager";
const pLayerList = ["Player 1", "Player 2"];
//const scoreList = ;
//array de 21 space par joueur
const scoreList = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
function App() {
    return (_jsxs("div", Object.assign({ className: "App" }, { children: ["// TODO : SORTIR LE SCOREBOARD DU SCOREMANAGER", _jsx(ScoreManager, { playerList: pLayerList, scoreList: scoreList })] })));
}
export default App;
