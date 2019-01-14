export class Helpers {
  constructor() {

  }

  public static getRandomInt(max) : number {
    let num = Math.floor(Math.random() * Math.floor(max));
    if (num === 0) {
      num = 1 + num;
    }
    return num;
  }
  
  public static rollThreeDice() {
    let total: number = 0;
    for (let i = 0; i < 3; i++) {
      total = total + this.getRandomInt(6);
      if (i === 2) {
        return total * 5;
      }
    } 
  }
  
  public static rollTwoDice() : number {
    let total: number = 0;
    for (let i = 0; i < 2; i++) {
      total = total + this.getRandomInt(6);
      if (i === 1) {
        
        return (total + 6) * 5;
      }
    } 
  }

  public static rollNumDice(diceNum: number) {
    let total: number = 0;
    for (let i = 0; i < diceNum; i++) {
      total = total + this.getRandomInt(6);
    }
    return total;
  }

  public static upcase(str) : string {
    return str.charAt(0).toUpperCase() + str.substr(1);
  }
}