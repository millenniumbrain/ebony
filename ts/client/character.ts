/// <reference path="../stats.ts" />

import StatAttributes = Stats.StatAttributes;

import {Helpers} from "../helpers";
import {Skill} from "./skill";


export class Character {
  gender: string;
  title: string;
  firstName: string;
  lastName: string;
  luck: number;
  age: number;
  build: number;
  dmgBonus: number;
  hp: number;
  mov: number;
  str: StatAttributes;
  con: StatAttributes;
  siz: StatAttributes;
  dex: StatAttributes;
  app: StatAttributes;
  int: StatAttributes;
  pow: StatAttributes;
  edu: StatAttributes;
  skills: Array<Skill>;

  constructor(title: string, firstName: string, lastName: string, gender: string) {
    this.str = Helpers.generateStats(3);
    this.con = Helpers.generateStats(3);
    this.siz = Helpers.generateStats(2);
    this.dex = Helpers.generateStats(3);
    this.app = Helpers.generateStats(3);
    this.int = Helpers.generateStats(2);
    this.pow = Helpers.generateStats(3);
    this.edu = Helpers.generateStats(2);
    this.luck = Helpers.rollNumDice(3) * 5;
    this.mov = this.generateMovement();
    this.dmgBonus = this.generateDmgBns();
    this.build = this.generateBuild();
    this.age = this.generateAge();
    this.hp = this.generateHP();
  }

  generateHP() : number {
    const hp: number = this.con.base + this.siz.base;
    console.log(hp /10);
    return Math.floor(hp / 10);
  }

  // generate a movement number based on a human character's stats
  generateMovement() : number {
    const movNine: boolean = this.str.base > this.siz.base && this.dex.base > this.siz.base; // dex and str > siz
    const movEight: boolean = this.str.base > this.siz.base || this.dex.base > this.siz.base; // dex or str > siz
    const movSeven: boolean = this.str.base < this.siz.base || this.dex.base < this.siz.base; // dex or str < siz
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
      // add rolls above 524 cutoff, every 80 points
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
      // add rolls above 524 cutoff, every 80 points
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

  rollCheck(stat: string, rollType: string) : boolean {
    const roll = Helpers.getRandomInt(100);
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