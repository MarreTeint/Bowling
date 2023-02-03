import React, { useContext,useEffect } from "react";
import {scoreListContext} from "./context/scorelist";
import {playerListContext} from "./context/playerlist";
import {roundContext} from "./context/round";
import {roundNumberContext} from "./context/roundNumber";
import {quilleNumberContext} from "./context/quilleNumber";
import ScoreProcess from "./scoreProcess";

const  ScoreBoard = () => {
    const { scoreList} = useContext(scoreListContext);
    const { playerList} = useContext(playerListContext);
    const { round} = useContext(roundContext);
    const { roundNumber} = useContext(roundNumberContext);
   
    useEffect(() => {
        console.log("ScoreList has been updated")
    }, [scoreList, playerList, round])
  
    function printPlayerScoreBoard(){
        let players = [];
        for(var i=0; i<playerList.length; i++){
            players.push(<PLayerSCoreBoards PlayerName={playerList[i]} PlayerSCore={scoreList[i]} round={round}/>);
        }
        return players;
    }

    return (
        <div className="scoreboard">
            {scoreList}
            <table className="table table-bordered">
                <thead>

                    <tr>
                    <td className="blackText">Player </td>
                    <td className="blackText" colSpan={roundNumber*2+1}> Score Board</td>
                    <td className="blackText">Total </td>
                    </tr>
                           
                </thead>
                <tbody>
                    <tr className="rounds"><td className="black"></td>
                    {TourPrint()}

               
                    <td className="black"></td></tr>
                    {printPlayerScoreBoard()}
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
    const {quilleNumber} = useContext(quilleNumberContext);
    const {roundNumber} = useContext(roundNumberContext);

   
    const Score = PlayerSCore.map((score: any,index:any) =>
        <td key={index}>{score}</td>
    );

    return (
        <tr className="scoreboard">
            <td className="blackText">{PlayerName}</td>
            {Score}
            <td>{ScoreProcess(PlayerSCore,quilleNumber,roundNumber)}</td> 
          
        </tr>
    );   
    
}

const TourPrint =  ()=>{
    const roundNumber = useContext(roundNumberContext);
    var tour = [];
    for (let index = 0; index < roundNumber.roundNumber; index++) {
        if (index !== roundNumber.roundNumber-1) {
            tour.push(<td colSpan={2}>Tour n°{index+1}</td>);
        }
        else{
            tour.push(<td colSpan={3}>Tour n°{index+1}</td>);
        }
        
    }   
    return tour;
}
export default ScoreBoard ;