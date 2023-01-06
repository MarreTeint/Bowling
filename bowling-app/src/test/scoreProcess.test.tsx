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


  expect(scoreFromPins(rolls1)).toStrictEqual(expected_score1);
  expect(scoreFromPins(rolls2)).toStrictEqual(expected_score2);
  expect(scoreFromPins(rolls3)).toStrictEqual(expected_score3);
  expect(scoreFromPins(rolls4)).toStrictEqual(expected_score4);
  expect(scoreFromPins(rolls5)).toStrictEqual(expected_score5);


//   expect(scoreFromPins(rolls1)).toBe(expected_score1)
//   expect(scoreFromPins(rolls1)).toBe(expected_score1)



//   console.assert( == expected_score1)
//   console.assert(scoreFromPins(rolls2) == expected_score2)
//   console.assert(scoreFromPins(rolls3) == expected_score3)
//   console.assert(scoreFromPins(rolls4) == expected_score4)
//   console.assert(scoreFromPins(rolls5) == expected_score5)


});