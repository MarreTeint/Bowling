import React from "react";
export const roundNumberContext = React.createContext({
    roundNumber: 10,
    setroundNumber: (roundNumber: number) => { }
});

export default roundNumberContext;