import React from "react";
export const roundContext = React.createContext({
    round: 1,
    setRound: (round: number) => { }
});

export default roundContext;