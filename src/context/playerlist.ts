import React from "react";


export const playerListContext = React.createContext({
    playerList: ["Joueur 1", "Joueur 2"],
    setPlayerList: (playerList: string[]) => { }
});
export default playerListContext;