import React from "react";
// interface ContextType {
//     state?: number;
//     dispatch?: any;
//   }
export const roundContext = React.createContext({
    round: 0,
    setRound: (round) => { }
});
export default roundContext;
