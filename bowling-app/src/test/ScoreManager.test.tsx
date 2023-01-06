import '@testing-library/react';
import {ScoreListToScore} from "../build/ScoreManager";

test('test rendu player name', () => {
    const scoreTest1        = ['X', 0, 'X', 0, 'X', 0, 'X', 0, 'X', 0, 'X', 0, 'X', 0, 'X', 0, 'X', 0, 'X', 'X', 'X'];
    const expectedScore1    = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

    expect(ScoreListToScore(scoreTest1)).toStrictEqual(expectedScore1);

    const scoreTest2        = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ' '];
    const expectedScore2    = []

    expect(ScoreListToScore(scoreTest2)).toStrictEqual(expectedScore2);
});