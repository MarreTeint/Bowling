import React from "react";


export default function ScoreManager(props: any) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);
    return (
        <div className="scoreboard">           
       </div>
    );    
}