/// <reference path="./stats.ts" />

import StatAttributes = Stats.StatAttributes;

export class Helpers {

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

  public static generateStats(numDice: number) : StatAttributes {
    const stats: StatAttributes = {
      base: 0,
      hard: 0,
      difficult: 0
    };
    if (numDice === 3) {
      stats.base  = Helpers.rollNumDice(3) * 5;
      stats.hard = Math.floor(stats.base / 2);
      stats.difficult = Math.floor(stats.base / 5);
    } 
    else {
      stats.base  = Helpers.rollNumDice(2) * 5;
      stats.hard = Math.floor(stats.base / 2);
      stats.difficult = Math.floor(stats.base / 5);
    }
    return stats;
  }
}