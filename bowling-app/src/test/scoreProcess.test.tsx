import '@testing-library/react';
import {scoreFromPins,ScoreListToScore} from "../build/scoreProcess";

test('test du systeme de calcul de score', () => {
  //create an array of score
  const score:number[] = new Array(10);
  
  const rolls1:number[] = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  const expected_score1:number[] = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300];

  const rolls2:number[] = [8, 1, 0, 9, 2, 8, 10, 6, 3, 7, 0, 5, 2, 10, 0, 6, 2, 8, 10];
  const expected_score2:number[] = [9, 18, 38, 57, 66, 73, 80, 96, 102, 122];

  const rolls3:number[] = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ,5 ,5];
  const expected_score3:number[] = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150];

  const rolls4:number[] = [8, 1, 0, 9, 2, 8, 10, 6, 3, 7, 0, 5, 2, 10, 0, 6, 2, 7];
  const expected_score4:number[] = [9, 18, 38, 57, 66, 73, 80, 96, 102, 111];

  const rolls5:number[] = [8, 1, 0, 9, 2, 8, 10, 6, 3, 7, 0, 5, 2, 10, 0, 6];
  const expected_score5:number[] = [9, 18, 38, 57, 66, 73, 80, 96, 102, NaN];

  const rolls6:number[] = [8, 1, 0, 9, 2, 8, 10, 6, 3, 7, 0, 5];
  const expected_score6:number[] = [9, 18, 38, 57, 66, 73, NaN, NaN, NaN, NaN];

  const rolls7:number[] = [8, 1, 0, 9, 2, 8, 10, 6, 3];
  const expected_score7:number[] = [9, 18, 38, 57, 66, NaN, NaN, NaN, NaN, NaN];

  const rolls8:number[] = [8, 1, 0, 9, 2, 8];
  const expected_score8:number[] = [9, 18, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];


  expect(scoreFromPins(rolls1)).toStrictEqual(expected_score1);
  expect(scoreFromPins(rolls2)).toStrictEqual(expected_score2);
  expect(scoreFromPins(rolls3)).toStrictEqual(expected_score3);
  expect(scoreFromPins(rolls4)).toStrictEqual(expected_score4);
  expect(scoreFromPins(rolls5)).toStrictEqual(expected_score5);
  expect(scoreFromPins(rolls6)).toStrictEqual(expected_score6);
  expect(scoreFromPins(rolls7)).toStrictEqual(expected_score7);
  expect(scoreFromPins(rolls8)).toStrictEqual(expected_score8);


});

test('test du convertissuer', () => {
  const scoreTest1        = ['X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', 'X', 'X'];
  const expectedScore1    = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

  expect(ScoreListToScore(scoreTest1)).toStrictEqual(expectedScore1);

  // const scoreTest2        = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ' '];
  // const expectedScore2    = []

  // expect(ScoreListToScore(scoreTest2)).toStrictEqual(expectedScore2);

  const scoreTest3       = [0, '/', 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', 'X', 'X'];
  const expectedScore3   =  [0,10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

  expect(ScoreListToScore(scoreTest3)).toStrictEqual(expectedScore3);
})