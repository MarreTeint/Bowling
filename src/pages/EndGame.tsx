import ScoreBoard from "../scoreBoard";
import {scoreListContext} from "../context/scorelist";
import {playerListContext} from "../context/playerlist";
import scoreProcess from "../scoreProcess";
import React from "react";
const EndGame = () => {

 let classement = [];
  const {scoreList} = React.useContext(scoreListContext);
  const {playerList} = React.useContext(playerListContext);
  for (let index = 0; index < playerList.length; index++) {
    classement[index] = [playerList[index], scoreProcess(scoreList[index])];
    
  }
  classement.sort((a, b) => +b[1] - +a[1]);


    return (
<div>
<h1>EndGame</h1>

<ScoreBoard />
<div>
  <h2>Classement</h2>
  <table>
    <thead>
      <tr>
        <th>Player</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {classement.map((player, index) => (
        <tr key={index}>
          <td>{player[0]}</td>
          <td>{player[1]}</td>
        </tr>
      ))}
    </tbody>
  </table>

</div>


</div>
   

    );
  };
  
  export default EndGame;