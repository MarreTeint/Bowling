import React from "react";

export default function ScoreManager(props: any) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);

    const[round, setRound] = React.useState(1);
    const [lance, setLance] = React.useState(0);
    const [player, setPlayer] = React.useState(0);
    return (
        <div className="scoreManager">
            Au tour de {playerList[player]}<br></br>
            Tour n°{round} | Lance n°{lance+1}<br></br>
            <select id = "quilles">
                <option value = "0">0</option>
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
                <option value = "5">5</option>
                <option value = "6">6</option>
                <option value = "7">7</option>
                <option value = "8">8</option>
                <option value = "9">9</option>
                <option value = "10">10</option>
            </select>
            <button onClick={()=>{
                if(lance+1 == 2 && round < 10){
                    setPlayer((player+1)%2);
                } 
                else if(lance+1 == 3 && round == 10){
                    setPlayer((player+1)%2);
                }
                if(round == 10){
                    setLance((lance+1)%3);
                }else{
                    setLance((lance+1)%2);
                }
                if(player == 1 && lance == 1 && round < 10){
                    setRound(round+1);
                }else if(player == 1 && lance == 2 && round == 10){
                    setRound(round+1);
                }
            }
            }>Valider</button>      
       </div>
    );    
}