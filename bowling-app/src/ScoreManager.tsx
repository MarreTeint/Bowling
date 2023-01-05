import React from "react";

export default function ScoreManager(props: any) {
    const [playerList, setPlayerList] = React.useState(props.playerList);
    const [scoreList, setScoreList] = React.useState(props.scoreList);
    const updateScore = (player: number, lance: number, score: number) => {
        var newScoreList = scoreList;
        if(score == 10 && lance%2 == 0){
            newScoreList[player][lance] = 'X';
        }else if(score + scoreList[player][lance-1] == 10){
            newScoreList[player][lance] = '/';
        }else{
            newScoreList[player][lance] = score;
        }
        setScoreList(newScoreList);
    }


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
            <button id="quillesupdate" onClick={()=>{
                var score = document.getElementById("quilles") as HTMLSelectElement;
                var scoreValue = parseInt(score.value);
                var numlance = 2*round-2+lance;
                if(round < 10 && lance == 1 && scoreValue + scoreList[player][numlance] <= 10 || round == 10 || lance == 0){

                    updateScore(player, numlance, scoreValue);

                    if(round<10){
                        if(scoreValue == 10 && lance == 0){
                            setLance(0);
                            if(player == 1){
                                setRound(round+1);
                            }
                        }else{
                            setLance((lance+1)%2);
                        }
                        if(player == 1 && lance == 1){
                            setRound(round+1);
                        }
                        if(lance == 1 || lance == 0 && scoreValue == 10){
                            setPlayer((player+1)%2);
                        }
                    }
                    else{ //round 10
                        if(lance == 2 && player == 1){
                            document.getElementById("quillesupdate")?.remove(); //end game
                        }else if (lance == 2){
                            setPlayer(1);
                            setLance(0);
                        }

                        if(lance == 1 && (scoreList[player][numlance-1] == 'X' || scoreList[player][numlance] == '/')){
                            setLance(2);
                        }else if(lance == 1 && player == 1){
                            document.getElementById("quillesupdate")?.remove(); //end game
                        }else if(lance == 1){
                            setPlayer(1);
                            setLance(0);
                        }else if (lance !=2){
                            setLance((lance+1)%2);
                        }

                    }
                }else{
                    alert("Score invalide")
                }
                console.log(scoreList);
            }
            }>Valider</button>      
       </div>
    );    
}