import React from "react";
export const quilleNumberContext = React.createContext({
    quilleNumber: 10,
    setquilleNumber: (quilleNumber: number) => { }
});

export default quilleNumberContext;