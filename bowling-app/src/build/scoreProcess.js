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
        if (counter > 9) {
            break;
        }
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
export function ScoreListToScore(Soreliste) {
    let firstPass = new Array();
    //copie ScoreListe by replacing " " by 0, "X" by 10 and "/" by 10 - previous roll
    for (let i = 0; i < Soreliste.length; i++) {
        if (Soreliste[i] === " ") {
            firstPass.push(-1);
        }
        else if (Soreliste[i] === "X" || Soreliste[i] === 10) {
            firstPass.push(10);
        }
        else if (Soreliste[i] === "/") {
            firstPass.push(10 - firstPass[firstPass.length - 1]);
        }
        else {
            firstPass.push(parseInt(Soreliste[i]));
        }
    }
    let secondPass = new Array();
    //copie firstPass by deleting the 0
    for (let i = 0; i < firstPass.length; i++) {
        if (firstPass[i] !== -1) {
            secondPass.push(firstPass[i]);
        }
    }
    return secondPass;
}
export default function scoreProcess(ScoreListe) {
    let score = new Array(10);
    let pins = ScoreListToScore(ScoreListe);
    score = scoreFromPins(pins);
    //return the last index of score whose value is not undefined
    let lastScore = 0;
    for (let i = 0; i < score.length; i++) {
        if (!Number.isNaN(score[i])) {
            lastScore = i;
        }
    }
    return score[lastScore];
}
