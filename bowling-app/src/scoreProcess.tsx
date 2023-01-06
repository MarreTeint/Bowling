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
 export function scoreFromPins(pins:number[]) {
    var score:number[] = new Array(10);
    var counter:number = 0;
    for (let i = 0; i + 1 < pins.length; i+=2)
    {
      if (counter > 9)
      {
        break;
      }
      
      if (pins[i] + pins[i+1] < 10)
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
  
      if (pins[i] === 10)
      {
        i--;
      }
  
    }
  
    for (let i = 1; i < 10; i++)
    {
      score[i] += score[i-1];
    }
  
    return score;
  }

export function ScoreListToScore(Soreliste:any) {
    let firstPass:number[] = new Array();
    //copie ScoreListe by replacing " " by 0, "X" by 10 and "/" by 10 - previous roll
    for (let i = 0; i < Soreliste.length; i++)
    {
      for (let j = 0; j < Soreliste[i].length; j++)
      {
        if (Soreliste[i][j] === " ")
        {
          firstPass.push(0);
        }
        else if (Soreliste[i][j] === "X")
        {
          firstPass.push(10);
        }
        else if (Soreliste[i][j] === "/")
        {
          firstPass.push(10 - firstPass[firstPass.length - 1]);
        }
        else
        {
          firstPass.push(parseInt(Soreliste[i][j]));
        }
      }
    }


    let secondPass:number[] = new Array();
    //copie firstPass by deleting the 0
    for (let i = 0; i < firstPass.length; i++)
    {
      if (firstPass[i] !== 0)
      {
        secondPass.push(firstPass[i]);
      }
    }


    return secondPass;





  
}



  