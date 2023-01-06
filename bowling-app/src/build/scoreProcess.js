/**
 * Returns the score array from a rolls array
 *
 * @remarks
 * /!\ A strike is represented by a [10], not a [10, 0] /!\
 *
 * @param rolls - array representing the succesive rolls of a bowling game
 *
 * @returns
 * The score array
 */
export function scoreFromPins(pins) {
    var score = new Array(10);
    var counter = 0;
    for (let i = 0; i + 1 < pins.length; i += 2) {
        if (pins[i] + pins[i + 1] < 10) {
            score[counter] = pins[i] + pins[i + 1];
            counter++;
            continue;
        }
        if (i + 2 >= pins.length) {
            break;
        }
        score[counter] = pins[i] + pins[i + 1] + pins[i + 2];
        counter += 1;
        if (pins[i] === 10) {
            i--;
        }
    }
    for (let i = 1; i < 10; i++) {
        score[i] += score[i - 1];
    }
    return score;
}
