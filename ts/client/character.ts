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
    this.mov = this.generateMovement();
    this.dmgBonus = this.generateDmgBns();
    this.build = this.generateBuild();
    this.age = this.generateAge();
  }

  // generate a movement number based on a human character's stats
  generateMovement() : number {
    const movNine: boolean = this.str.base > this.siz.base && this.dex.base > this.siz.base;
    const movEight: boolean = this.str.base > this.siz.base || this.dex.base > this.siz.base;
    const movSeven: boolean = this.str.base < this.siz.base || this.dex.base < this.siz.base;
    if (movSeven) {
      return 7;
    } else if (movEight && !movNine) {
      return 8;
    } else {
      return 9;
    }
  }

  generateDmgBns() : number {
    const combinedStats: number = this.str.base + this.siz.base;
    let dmgBonus: number;
    if (combinedStats >= 2 && combinedStats <= 64) {
      dmgBonus = -2;
    } else if (combinedStats >= 65 && combinedStats <= 84) {
      dmgBonus = -1
    } else if (combinedStats >= 85 && combinedStats <= 124) {
      dmgBonus = 0;
    } else if (combinedStats >= 125 && combinedStats <= 164) {
      dmgBonus = Helpers.rollNumDice(1, 4);
    } else if (combinedStats >= 165 && combinedStats <= 204) {
      dmgBonus = Helpers.rollNumDice(1, 6);
    } else if (combinedStats >= 205 && combinedStats <= 284) {
      dmgBonus = Helpers.rollNumDice(2, 6);
    } else if (combinedStats >= 285 && combinedStats <= 364) {
      dmgBonus = Helpers.rollNumDice(3, 6);
    } else if (combinedStats >= 365 && combinedStats <= 444) {
      dmgBonus = Helpers.rollNumDice(4, 6);
    } else if (combinedStats >= 445 && combinedStats <= 524) {
      dmgBonus = Helpers.rollNumDice(5, 6);
    } else {
      const addedRolls = Math.floor((combinedStats - 524) / 80);
      dmgBonus = Helpers.rollNumDice(5 + addedRolls);
    }

    return dmgBonus;
  }


  generateBuild() : number {
    const combinedStats: number = this.str.base + this.siz.base;
    let build: number;
    if (combinedStats >= 2 && combinedStats <= 64) {
      build = -2;
    } else if (combinedStats >= 65 && combinedStats <= 84){
      build = -1;
    } else if (combinedStats >= 85 && combinedStats <= 124) {
      build = 0;
    } else if (combinedStats >= 125 && combinedStats <= 164) {
      build = 1;
    } else if (combinedStats >= 165 && combinedStats <= 204) {
      build = 2;
    } else if (combinedStats >= 205 && combinedStats <= 284) {
      build = 3;
    } else if (combinedStats >= 285 && combinedStats <= 364) {
      build = 4;
    } else if (combinedStats >= 365 && combinedStats <= 444) {
      build = 5;
    } else if (combinedStats >= 445 && combinedStats <= 524) {
      build = 6;
    } else {
      const addedBonus: number = Math.floor((combinedStats - 524) / 80)
      build = 6 + addedBonus;
    }

    return build;
  }

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

  rollCheck(stat: string, rollType: string) : boolean {
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

  toJSON() : object {
    return Object.getOwnPropertyNames(this).reduce((a, b) => {
      a[b] = this[b];
      return a;
    }, {});
  }
}