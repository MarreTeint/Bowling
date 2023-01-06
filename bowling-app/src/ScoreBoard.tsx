import React from "react";
export default function ScoreBoards(props: any) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);


    return (
        <div className="scoreboard">
            <table>
                <thead>
                    <td className="blackText">Player</td>
                    <td className="blackText" colSpan={21}> Score Board</td>
                    <td className="blackText">Total </td>
       
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

function PLayerSCoreBoards(props: any) {
    const PlayerSCore = props.PlayerSCore;
    const PlayerName = props.PlayerName;

    //return un tableau des scores
    const Score = PlayerSCore.map((score: any) =>
        <td>{score}</td>
    );

    return (
        <tr className="scoreboard">
            <td scope="row" className="blackText">{PlayerName}</td>
            {Score}
            <td>No</td>
        </tr>
    );   
    
}