import React from "react";
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
                    <PLayerSCoreBoards PlayerName={playerList[0]} PlayerSCore={scoreList[0]} />
                    <PLayerSCoreBoards PlayerName={playerList[1]} PlayerSCore={scoreList[1]} />
                </tbody>
            </table>
        </div>
    );    
}

export function PLayerSCoreBoards(props: any) {
    const PlayerSCore = props.PlayerSCore;
    const PlayerName = props.PlayerName;

    //return un tableau des scores
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