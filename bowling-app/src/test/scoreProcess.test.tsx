import '@testing-library/react';
import {scoreFromPins} from "../build/scoreProcess";

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

  const rolls5:number[] = [8, 1, 0, 9, 2, 8, 10, 6, 3, 7, 0, 5, 2, 10, 0, 6, 2];
  const expected_score5:number[] = [9, 18, 38, 57, 66, 73, 80, 96, 102, NaN];

  // Pour 10
  expect(scoreFromPins(rolls1, 10, 10)).toStrictEqual(expected_score1);
  expect(scoreFromPins(rolls2, 10, 10)).toStrictEqual(expected_score2);
  expect(scoreFromPins(rolls3, 10, 10)).toStrictEqual(expected_score3);
  expect(scoreFromPins(rolls4, 10, 10)).toStrictEqual(expected_score4);
  expect(scoreFromPins(rolls5, 10, 10)).toStrictEqual(expected_score5);

  // Pour moins de 10 quilles
  const rollsA:number[] = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
  const expected_scoreA:number[] = [24, 48, 72, 96, 120, 144, 168, 192, 216, 240];

  const rollsB:number[] = [6, 2, 6, 2, 6, 2, 6, 2,6, 2,6, 2,6, 2,6, 2,6, 2,6, 2, 6];
  const expected_scoreB:number[] = [14, 28, 42, 56, 70, 84, 98, 112, 126, 140];

  const rollsC = [4, 2, 3, 3, 1, 2, 2, 2, 4, 4, 5, 1];
  const expected_scoreC = [6, 12, 15, 19, 32, 38, NaN, NaN, NaN, NaN];

  expect(scoreFromPins(rollsA, 8, 10)).toStrictEqual(expected_scoreA);
  expect(scoreFromPins(rollsB, 8, 10)).toStrictEqual(expected_scoreB); 
  expect(scoreFromPins(rollsC, 8, 10)).toStrictEqual(expected_scoreC); 

  // Pour plus de 10 quilles
  const rollsD:number[] = [8, 6, 13, 0, 3, 7, 14, 7, 7, 12, 1, 0, 10, 14, 12, 2, 3];
  const expected_scoreD:number[] = [27, 40, 50, 78, 104, 117, 127, 155, 172, NaN]

  expect(scoreFromPins(rollsD, 14, 10)).toStrictEqual(expected_scoreD);

  const rollsE:number[] = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14];
  const expected_scoreE:number[] = [42, 84, 126, 168, 210, 252, 294, 336, 378, 420]

  expect(scoreFromPins(rollsE, 14, 10)).toStrictEqual(expected_scoreE);


  //Pour plus de 10 frames
  const rolls10:number[] = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  const expected_score10:number[] = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420];

  const rolls11:number[] = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ,5 ,5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  const expected_score11:number[] = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210];

  const rolls12:number[] = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4 ,1 ,2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
  const expected_score12:number[] = [3, 10, 13, 20, 23, 30, 33, 40, 43, 50, 53, 60, 63, 70];
  

  expect(scoreFromPins(rolls10, 10, 14)).toStrictEqual(expected_score10);
  expect(scoreFromPins(rolls11, 10, 14)).toStrictEqual(expected_score11);
  expect(scoreFromPins(rolls12, 10, 14)).toStrictEqual(expected_score12);

  //Pour moins de 10 frames
  const rolls20:number[] = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  const expected_score20:number[] = [30, 60, 90, 120, 150, 180, 210, 240];

  const rolls21:number[] = [5, 5, 5, 5, 5, 5, 5, 5, 5];
  const expected_score21:number[] = [15, 30, 45, 60, NaN, NaN, NaN, NaN];

  const rolls22:number[] = [1, 2, 3, 4, 1, 2, 3, 4];
  const expected_score22:number[] = [3, 10, 13, 20, NaN, NaN, NaN, NaN];

  expect(scoreFromPins(rolls20, 10, 8)).toStrictEqual(expected_score20);
  expect(scoreFromPins(rolls21, 10, 8)).toStrictEqual(expected_score21);
  expect(scoreFromPins(rolls22, 10, 8)).toStrictEqual(expected_score22);

});