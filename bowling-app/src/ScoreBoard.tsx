import React from "react";
/** 
 * @author Leborgne Kevin 
 * @version 1.0
 * @description Génere le tableau de score des participants
 * @param props Liste des participants et liste des scores
 * @returns Tableau de score des participants
*/
export default function ScoreBoards(props: any) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);


    return (
        <div className="scoreboard">
            <table>
                <thead>

                    <tr>
                    <td className="blackText">Player </td>
                    <td className="blackText" colSpan={21}> Score Board</td>
                    <td className="blackText">Total </td>
                    </tr>
                    
       
                </thead>
                <tbody>
                    <tr className="rounds"><td className="black"></td><td colSpan={2}>Tour n°1</td><td colSpan={2}>Tour n°2</td><td colSpan={2}>Tour n°3</td><td colSpan={2}>Tour n°4</td><td colSpan={2}>Tour n°5</td><td colSpan={2}>Tour n°6</td><td colSpan={2}>Tour n°7</td><td colSpan={2}>Tour n°8</td><td colSpan={2}>Tour n°9</td><td colSpan={3}>Tour n°10</td><td className="black"></td></tr>
                    <PLayerSCoreBoards PlayerName={playerList[0]} PlayerSCore={scoreList[0]} />
                    <PLayerSCoreBoards PlayerName={playerList[1]} PlayerSCore={scoreList[1]} />
                </tbody>
            </table>
        </div>
    );     
}


/**
 * @author Leborgne Kevin 
 * @version 1.0
 * @description Génere la ligne du tableaux de score correspondant aux participant et à son score donnée en paramètre  * 
 * @param props Nom et score du participant
 * @returns Ligne du tableau de score correspondant au participant et à son score
 */
export function PLayerSCoreBoards(props: any) {
    const PlayerSCore = props.PlayerSCore;
    const PlayerName = props.PlayerName;

   
    const Score = PlayerSCore.map((score: any,index:any) =>
        <td key={index}>{score}</td>
    );

    return (
        <tr className="scoreboard">
            <td scope="row" className="blackText">{PlayerName}</td>
            {Score}
            <td>No</td>
        </tr>
    );   
    
}