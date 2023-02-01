import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import ScoreBoard from "../scoreBoard";
import ScoreManager from "../scoreManager";




function Game() {
    

    return (    
    <div className="Game">        
        <ScoreBoard />
        <ScoreManager />
        <button><Link to="../Endgame">Fin de la partie</Link></button>       
    </div>
  );
}

export default Game;