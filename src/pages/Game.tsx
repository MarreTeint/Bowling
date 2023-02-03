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
        <button><Link to="../Endgame">Fin  de partie</Link></button>       
    </div>
  );
}

export default Game;