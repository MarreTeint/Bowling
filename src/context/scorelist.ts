import React from "react";

export const scoreListContext = React.createContext({
    scoreList: [[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]]    ,
    setScoreList: (scoreList: any) => { }
});


export default scoreListContext;