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
  