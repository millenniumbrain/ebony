function getRandomInt(max) : number {
  return 1 + Math.floor(Math.random() * Math.floor(max));
}

function rollThreeDice() {
  let total: number = 0;
  for (let i = 0; i < 3; i++) {
    total = total + getRandomInt(6);
    if (i === 2) {
      return total * 5;
    }
  } 
}

function rollTwoDice() : number {
  let total: number = 0;
  for (let i = 0; i < 2; i++) {
    total = total + getRandomInt(6);
    if (i === 1) {
      
      return (total + 6) * 5;
    }
  } 
}

function genAge() : number {
  return 15 + getRandomInt(89);
}

interface StatAttributes {
  base: number,
  hard: number,
  difficult: number
}

export class Character {
  str: StatAttributes;
  con: StatAttributes;
  siz: StatAttributes;
  dex: StatAttributes;
  app: StatAttributes;
  int: StatAttributes;
  pow: StatAttributes;
  edu: StatAttributes;
  luck: number;
  age: number;

  constructor() {
    this.str = this.generateStats(3);
    this.con = this.generateStats(3);
    this.siz = this.generateStats(2);
    this.dex = this.generateStats(3);
    this.app = this.generateStats(3);
    this.int = this.generateStats(2);
    this.pow = this.generateStats(3);
    this.edu = this.generateStats(2);
    this.luck = rollThreeDice();
    this.age = genAge();
  }

  improveAgeCheck() {

  }

  generateStats(numDice: number) : StatAttributes {
    const stats: StatAttributes = {
      base: 0,
      hard: 0,
      difficult: 0
    };
    if (numDice === 3) {
      stats.base  = rollThreeDice();
      stats.hard = Math.floor(stats.base / 2);
      stats.difficult = Math.floor(stats.base / 5);
    } else {
      stats.base  = rollTwoDice();
      stats.hard = Math.floor(stats.base / 2);
      stats.difficult = Math.floor(stats.base / 5);
    }
    return stats;
  }

  rollCheck(stat: string, rollType: string) : Boolean {
    const roll = 1 + getRandomInt(100);
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
}