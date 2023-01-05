import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; 
import ScoreBoards,{ PLayerSCoreBoards } from "../build/ScoreBoard";

test('test rendu player name', () => {
  //create an array of 21 space 
  const scoreList = new Array(21).fill(0);

  render(<PLayerSCoreBoards PlayerName={"Myplayer"} PlayerSCore={scoreList} />);
  const linkElement = screen.getByText('Myplayer');
  expect(linkElement).toBeInTheDocument();
});