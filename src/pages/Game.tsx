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
        <Link to="../Endgame"><button>Fin de partie</button></Link>       
    </div>
  );
}

export default Game;