import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import ScoreBoard from "./build/ScoreBoard";
import ScoreManager from "./build/ScoreManager";
const pLayerList = ["Player 1", "Player 2"];
const scoreList = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
function App() {
    return (_jsxs("div", Object.assign({ className: "App" }, { children: [_jsx(ScoreBoard, { playerList: pLayerList, scoreList: scoreList }), _jsx(ScoreManager, { playerList: pLayerList, scoreList: scoreList })] })));
}
export default App;
