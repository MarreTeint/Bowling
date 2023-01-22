import React from "react";
export const scoreListContext = React.createContext({
    scoreList: [[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]],
    setScoreList: (scoreList) => { }
});
export default scoreListContext;
