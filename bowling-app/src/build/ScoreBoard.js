import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { scoreListContext } from "./context/scoreListContext";
import { playerListContext } from "./context/playerListContext";
import { roundContext } from "./context/roundContext";
import scoreProcess from "./scoreProcess";
/**
 * @author Leborgne Kevin
 * @version 1.0
 * @description Génere le tableau de score des participants
 * @param props Liste des participants et liste des scores
 * @returns Tableau de score des participants
*/
export default function ScoreBoards(props) {
    const { playerList, setPlayerList } = useContext(playerListContext);
    const { scoreList, setScoreList } = useContext(scoreListContext);
    const { round, setRound } = useContext(roundContext);
    return (_jsx("div", Object.assign({ className: "scoreboard" }, { children: scoreList })));
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
    const round = props.round;
    const Score = PlayerSCore.map((score, index) => _jsx("td", { children: score }, index));
    return (_jsxs("tr", Object.assign({ className: "scoreboard" }, { children: [_jsx("td", Object.assign({ scope: "row", className: "blackText" }, { children: PlayerName })), Score, _jsx("td", { children: scoreProcess(PlayerSCore) })] })));
}
