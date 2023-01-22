import React from "react";
export const playerListContext = React.createContext({
    playerList: ["player 1", "player 2"],
    setPlayerList: (playerList) => { }
});
export default playerListContext;
