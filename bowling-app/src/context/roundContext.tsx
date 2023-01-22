import React from "react";
// interface ContextType {
//     state?: number;
//     dispatch?: any;
//   }
export const roundContext = React.createContext({
    round: 1,
    setRound: (round: number) => { }
});

export default roundContext;