import {Helpers} from "../helpers";

interface StatAttributes {
  base: number,
  hard: number,
  difficult: number
}

export class Character {
  gender: string;
  title: string;
  firstName: string;
  lastName: string;
  luck: number;
  age: number;
  build: number;
  dmgBonus: number;
  mov: number;
  str: StatAttributes;
  con: StatAttributes;
  siz: StatAttributes;
  dex: StatAttributes;
  app: StatAttributes;
  int: StatAttributes;
  pow: StatAttributes;
  edu: StatAttributes;


  constructor(title: string, firstName: string, lastName: string, gender: string) {
    this.str = this.generateStats(3);
    this.con = this.generateStats(3);
    this.siz = this.generateStats(2);
    this.dex = this.generateStats(3);
    this.app = this.generateStats(3);
    this.int = this.generateStats(2);
    this.pow = this.generateStats(3);
    this.edu = this.generateStats(2);
    this.luck = Helpers.rollNumDice(3) * 5;
    this.age = this.generateAge();
    this.mov = this.generateMovement();
  }

  // generate a movement number based on a human character's stats
  generateMovement() : number {
    const movNine = this.str.base > this.siz.base && this.dex.base > this.siz.base;
    const movEight = this.str.base > this.siz.base || this.dex.base > this.siz.base;
    const movSeven = this.str.base < this.siz.base || this.dex.base < this.siz.base;
    if (movSeven) {
      return 7;
    } else if (movEight && !movNine) {
      return 8;
    } else {
      return 9;
    }
  }
/*
  generateDmgBns() : number {
    const combinedStats = this.str.base + this.siz.base;
    let dmgBonus: number;
    if (combinedStats >= 65 && combinedStats <= 84) {
      dmgBonus = -1
    } else if (combinedStats >= 125 && combinedStats <= 164) {
      dmgBonus = 0;
    } else if (combinedStats >= 165 && combinedStats <= 204) {

    } else if (combinedStats >= 205 && combinedStats <= 284) {

    } else if (combinedStats >= 285 && combinedStats <= 364) {

    } else if (combinedStats >= 365 && combinedStats <= 444) {

    } else if (combinedStats >= 445 && combinedStats <= 524) {

    } else {
      dmgBonus = -2;
    }

    return dmgBonus;
  }


  generateBuild() : number {
    const combinedStats = this.str.base + this.siz.base;
    let build: number;
    if (combinedStats >= 65 && combinedStats <= 84) {
      build = -1
    } else if (combinedStats >= 125 && combinedStats <= 164) {
      build = 0;
    } else if (combinedStats >= 165 && combinedStats <= 204) {

    } else if (combinedStats >= 205 && combinedStats <= 284) {

    } else if (combinedStats >= 285 && combinedStats <= 364) {

    } else if (combinedStats >= 365 && combinedStats <= 444) {

    } else if (combinedStats >= 445 && combinedStats <= 524) {

    } else {
      build = -2;
    }

    return build;
  }
*/
  generateAge() : number {
    const age = Helpers.getRandomInt(89);
    if (age < 15) {
      return 15;
    } else {
      return age;
    }
  }

  generateStats(numDice: number) : StatAttributes {
    const stats: StatAttributes = {
      base: 0,
      hard: 0,
      difficult: 0
    };
    if (numDice === 3) {
      stats.base  = Helpers.rollNumDice(3) * 5;
      stats.hard = Math.floor(stats.base / 2);
      stats.difficult = Math.floor(stats.base / 5);
    } else {
      stats.base  = Helpers.rollNumDice(2) * 5;
      stats.hard = Math.floor(stats.base / 2);
      stats.difficult = Math.floor(stats.base / 5);
    }
    return stats;
  }

  rollCheck(stat: string, rollType: string) : Boolean {
    const roll = 1 + Helpers.getRandomInt(100);
    switch(rollType) {
      case "base":
        if (roll <= this[stat].base)  {
          return true;
        }
        break;
      case "hard":
        if (roll <= this[stat].hard)  {
          return true;
        }
        break;
      case "difficult":
        if (roll <= this[stat].difficult)  {
          return true;
        }
        break;
      default:
        if (roll <= this[stat].base)  {
          return true;
        }
        break;
    }
    return false;
  }

  toJSON() : {} {
    return Object.getOwnPropertyNames(this).reduce((a, b) => {
      a[b] = this[b];
      return a;
    }, {});
  }
}