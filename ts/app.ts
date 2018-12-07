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

class Character {
  str: StatAttributes;
  con: StatAttributes;
  siz: StatAttributes;
  dex: StatAttributes;
  app: StatAttributes;
  int: StatAttributes;
  pow: StatAttributes;
  edu: StatAttributes;
  luck: StatAttributes;
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
    this.luck = this.generateStats(3);
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

/*
for (let i = 0; i < props.length; i++) {
  console.log(props[i] + " {");
  console.log("\tbase: " + descript.value.base +",\n" + "\thard: " + descript.value.hard +",\n" + "\tdifficult: " + descript.value.difficult +"\n}");
}
*/

const char = new Character();
const props = Object.getOwnPropertyNames(char);

const charStats = document.getElementById("charStats");
let counter = 0;
let statCollection = [];
const statGroupCollection = [];

for (let i = 0; i < props.length -1; i++) {
  const descript = Object.getOwnPropertyDescriptor(char, props[i]);

  const stat = document.createElement("div");
  const statCon = document.createElement("div");
  const statList = document.createElement("ul");
  const statTitle = document.createElement("li");
  const baseStatCon = document.createElement("li");
  const baseStat = document.createElement("span");
  const hardStatCon = document.createElement("li");
  const hardStat = document.createElement("span");
  const diffStatCon = document.createElement("li")
  const diffStat = document.createElement("span");

  stat.className = "pure-u-1-3";
  statCon.className = "stat-con";
  statList.className = "base-stata-list";


  statTitle.className = "stat-title";
  statTitle.textContent = props[i];

  baseStatCon.className = "base";
  baseStat.className = "base-stat stat-box";
  baseStat.textContent = descript.value.base;
  
  hardStatCon.className = "hard sub-stat";
  hardStat.className = "stat-box";
  hardStat.textContent = descript.value.hard;

  diffStatCon.className = "difficult sub-stat";
  diffStat.className = "stat-box";
  diffStat.textContent = descript.value.difficult;

  baseStatCon.appendChild(baseStat);
  hardStatCon.appendChild(hardStat);
  diffStatCon.appendChild(diffStat);

  statList.appendChild(statTitle);
  statList.appendChild(baseStatCon);
  statList.appendChild(hardStatCon);
  statList.appendChild(diffStatCon);

  statCon.appendChild(statList);

  console.log(statCon);
  statCollection.push(statCon);


  if ((counter + 1) % 3 === 0) {
    let statGroup = document.createElement("div");
    for (let j = 0; j < statCollection.length; j++) {
      statGroup.appendChild(statCollection[j]);
      statGroupCollection.push(statGroup);
    }
    counter = 0;
    statCollection = [];
  } else {
    counter++;
  } 
   

}

console.log(statGroupCollection[0]);