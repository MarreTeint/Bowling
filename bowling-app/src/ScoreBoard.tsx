import React from "react";
export default function ScoreBoards(props: any) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);


    return (
        <div className="scoreboard">
            <table>
        <thead>
            <td>Player </td>
          <td colSpan={21}> Score Board</td>
          <td>Total </td>
       
    </thead>
    <tbody>
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
            <td scope="row">{PlayerName}</td>
            {Score}
            <td>No</td>
        </tr>
    );   
    
}