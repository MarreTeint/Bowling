import ScoreBoard from "../scoreBoard";
import {scoreListContext} from "../context/scorelist";
import {playerListContext} from "../context/playerlist";
import scoreProcess from "../scoreProcess";
import {roundNumberContext} from "../context/roundNumber";
import {quilleNumberContext} from "../context/quilleNumber";

import React,{useContext} from "react";
import { Link } from "react-router-dom";
const EndGame = () => {
  const {quilleNumber} = useContext(quilleNumberContext);
  const {roundNumber} = useContext(roundNumberContext);
  

 let classement = [];
  const {scoreList} = React.useContext(scoreListContext);
  const {playerList} = React.useContext(playerListContext);
  for (let index = 0; index < playerList.length; index++) {
    classement[index] = [playerList[index], scoreProcess(scoreList[index],quilleNumber,roundNumber)];
  }
  classement.sort((a, b) => +b[1] - +a[1]);


    return (
<div>
<h1>Fin de partie</h1>

<ScoreBoard />
<div>
  <h2>Classement</h2>
  <table>
    <thead>
      <tr>
        <th>Joueur</th>
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

<Link to="../."><button className="btn btn-light btn-outline-primary mt-3">Rejouer</button></Link>
</div>
   

    );
  };
  
  export default EndGame;