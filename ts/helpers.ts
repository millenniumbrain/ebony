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

  public static rollNumDice(diceNum: number, numSides: number = 6) {
    let total: number = 0;
    for (let i = 0; i < diceNum; i++) {
      total = total + this.getRandomInt(numSides);
    }
    return total;
  }

  public static upcase(str) : string {
    return str.charAt(0).toUpperCase() + str.substr(1);
  }
}