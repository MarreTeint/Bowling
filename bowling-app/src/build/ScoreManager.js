import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
export default function ScoreManager(props) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);
    const updateScore = (player, lance, score) => {
        var newScoreList = scoreList;
        if (score == 10) {
            newScoreList[player][lance] = 'X';
        }
        else if (score + scoreList[player][lance - 1] == 10) {
            newScoreList[player][lance] = '/';
        }
        else {
            newScoreList[player][lance] = score;
        }
        setScoreList(newScoreList);
    };
    const [round, setRound] = React.useState(1);
    const [lance, setLance] = React.useState(0);
    const [player, setPlayer] = React.useState(0);
    return (_jsxs("div", Object.assign({ className: "scoreManager" }, { children: ["Au tour de ", playerList[player], _jsx("br", {}), "Tour n\u00B0", round, " | Lance n\u00B0", lance + 1, _jsx("br", {}), _jsxs("select", Object.assign({ id: "quilles" }, { children: [_jsx("option", Object.assign({ value: "0" }, { children: "0" })), _jsx("option", Object.assign({ value: "1" }, { children: "1" })), _jsx("option", Object.assign({ value: "2" }, { children: "2" })), _jsx("option", Object.assign({ value: "3" }, { children: "3" })), _jsx("option", Object.assign({ value: "4" }, { children: "4" })), _jsx("option", Object.assign({ value: "5" }, { children: "5" })), _jsx("option", Object.assign({ value: "6" }, { children: "6" })), _jsx("option", Object.assign({ value: "7" }, { children: "7" })), _jsx("option", Object.assign({ value: "8" }, { children: "8" })), _jsx("option", Object.assign({ value: "9" }, { children: "9" })), _jsx("option", Object.assign({ value: "10" }, { children: "10" }))] })), _jsx("button", Object.assign({ onClick: () => {
                    var score = document.getElementById("quilles");
                    var scoreValue = parseInt(score.value);
                    var numlance = 2 * round - 2 + lance;
                    if (round < 10 && lance == 1 && scoreValue + scoreList[player][numlance] <= 10 || round == 10 || lance == 0) {
                        updateScore(player, numlance, scoreValue);
                        if (lance == 1 && round < 10 || lance == 0 && scoreValue == 10) {
                            setPlayer((player + 1) % 2);
                        }
                        else if (lance == 2 && round == 10) {
                            setPlayer((player + 1) % 2);
                            setLance(0);
                        }
                        if (round == 10 && lance == 1 && (scoreList[player][numlance - 1] == 'X' || scoreList[player][numlance] == '/')) {
                            setLance(2);
                        }
                        else {
                            setLance((lance + 1) % 2);
                            if (scoreValue == 10) {
                                setLance(0);
                                if (player == 1) {
                                    setRound(round + 1);
                                }
                            }
                        }
                        if (player == 1 && lance == 1 && round < 10) {
                            setRound(round + 1);
                        }
                        else if (player == 1 && lance == 2 && round == 10) {
                            setRound(round + 1);
                        }
                    }
                    else {
                        alert("Score invalide");
                    }
                    console.log(scoreList);
                } }, { children: "Valider" }))] })));
}
