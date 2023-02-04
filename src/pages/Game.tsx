import React from 'react';
import {  Link } from "react-router-dom";
import '../App.css';
import ScoreBoard from "../scoreBoard";
import ScoreManager from "../scoreManager";




function Game() {
    

    return (    
    <div className="Game">        
        <ScoreBoard />
        <ScoreManager />
        <Link to="../Endgame"><button className="btn btn-light btn-outline-danger">Fin de partie</button></Link>       
    </div>
  );
}

export default Game;