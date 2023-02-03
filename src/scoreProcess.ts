/**
 * Returns the score array from a rolls array
 * 
 * @remarks
 * /!\ A strike is represented by a [10], not a [10, 0] /!\
 * 
 * @param rolls - array representing the succesive rolls of a bowling game 
 * @param nbOfPins      - number of Pins in the game, a default bowling game is 10 pins
 * @param nbOfFrames    - number of Frames in the game, a default bowling game is 10 frames
 * 
 * @returns
 * The score array
 */
export function scoreFromPins(pins:number[], nbOfPins:number, nbOfFrames:number) {
  var score:number[] = new Array(nbOfFrames);
  var counter:number = 0;
  for (let i = 0; i + 1 < pins.length; i+=2)
  {
    if (counter > nbOfFrames-1)
    {
      break;
    }
    
    if (pins[i] + pins[i+1] < nbOfPins)
    {
      score[counter] = pins[i] + pins[i+1];
      counter++;
      continue;
    }

    if (i+2 >= pins.length)
    {
      break;
    }

    score[counter] = pins[i] + pins[i+1] + pins[i+2]
    counter+=1

    if (pins[i] === nbOfPins)
    {
      i--;
    }

  }

  for (let i = 1; i < nbOfFrames; i++)
  {
    score[i] += score[i-1];
  }

  return score;
}


export function ScoreListToScore(Soreliste:any,quilleNumber:number) {
 
    let firstPass:number[] = [];
    //copie ScoreListe by replacing " " by 0, "X" by 10 and "/" by 10 - previous roll
    for (let i = 0; i < Soreliste.length; i++)
    {
     
        if (Soreliste[i] === " ")
        {
          firstPass.push(-1);
        }
        else if (Soreliste[i] === "X" || Soreliste[i] === quilleNumber)
        {
          firstPass.push(quilleNumber);
          
          
        }
        else if (Soreliste[i] === "/")
        {
          firstPass.push(quilleNumber - firstPass[firstPass.length - 1]);
        }
        else
        {
          firstPass.push(parseInt(Soreliste[i]));
        }
     
    }


    let secondPass:number[] = [];
    //copie firstPass by deleting the 0
    for (let i = 0; i < firstPass.length; i++)
    {
      if (firstPass[i] !== -1)
      {
        secondPass.push(firstPass[i]);
      }
    }


    return secondPass;

  
}

export default function ScoreProcess(ScoreListe:any,quilleNumber:number,roundNumber:number) {


    let score:number[] = new Array(10);
    let pins:number[] = ScoreListToScore(ScoreListe,quilleNumber);
    score = scoreFromPins(pins, quilleNumber, roundNumber);
    //return the last index of score whose value is not undefined
    let lastScore:number = 0;
    for (let i = 0; i < score.length; i++)
    {
      if (!Number.isNaN(score[i]))
      {
        lastScore = i;
      }
    }
    return score[lastScore];
    
  }


