import {remote, ipcRenderer} from "electron";
import * as request from "request";
import {Human} from "./human";
import {Helpers} from "../helpers";
import {Skill} from "./skill";

const firearmSkills: Array<Skill> = [
  new Skill("Handgun", 20),
  new Skill("Heavy Weapons", 10),
  new Skill("Shotgun", 25),
  new Skill("Submachine Gun", 15),
  new Skill("Rifle", 25),
  new Skill("Flamethrower", 10),
  new Skill("Bow", 15),
  new Skill("Machine Gun", 10),
];

const scienceSkills: Array<Skill> = [
  new Skill("Chemistry", 1),
  new Skill("Astronomy", 1),
  new Skill("Biology", 1),
  new Skill("Botany", 1),
  new Skill("Cryptography", 1),
  new Skill("Geology", 1),
  new Skill("Mathematics", 1),
  new Skill("Meteorology", 1),
  new Skill("Pharmacy", 1),
  new Skill("Zoology", 1),
  new Skill("Forensics", 1)
];

const fightingSkills: Array<Skill> = [
  new Skill("Axe", 15),
  new Skill("Brawl", 25),
  new Skill("Chainsaw", 10),
  new Skill("Fail", 10),
  new Skill("Garrote", 15),
  new Skill("Sword", 20),
  new Skill("Whip", 5),
];

const artCraftSkills: Array<Skill> = [
  new Skill("Fine Art", 5),
  new Skill("Forgery", 5),
  new Skill("Photography", 5)
];

const thrownWeaponSkills: Array<Skill> = [
  new Skill("Spear", 20)
];

const skills: Array<Skill> = [
  new Skill("Accounting", 5),
  new Skill("Acting", 5),
  new Skill("Animal Handling", 5),
  new Skill("Anthropology", 1),
  new Skill("Appraise", 5),
  new Skill("Archaelogy", 5),
  new Skill("Art and Craft", 5),
  new Skill("Artillery", 1),
  new Skill("Charm", 15),
  new Skill("Climb", 20),
  new Skill("Computer Use", 5),
  new Skill("Credit Rating", 0),
  new Skill("Cthulhu Mythos", 0),
  new Skill("Demolitions", 1),
  new Skill("Disguise", 5),
  new Skill("Diving", 1),
  new Skill("Dodge", 0),
  new Skill("Drive Auto", 20),
  new Skill("Electrical Repair", 10),
  new Skill("Electronics", 1),
  new Skill("Fast Talk", 5),
  new Skill("First Aid", 30),
  new Skill("History", 5),
  new Skill("Hypnosis", 1),
  new Skill("Intimidate", 15),
  new Skill("Jump", 20),
  new Skill("Language (Other)", 1),
  new Skill("Language (Own)", 0),
  new Skill("Law", 5),
  new Skill("Library Use", 20),
  new Skill("Listen", 20),
  new Skill("Locksmith", 1),
  new Skill("Mechanical Repair", 10),
  new Skill("Medicine", 1),
  new Skill("Natural World", 10),
  new Skill("Navigate", 10),
  new Skill("Occult", 5),
  new Skill("Operate Heavy Machinery", 1),
  new Skill("Persuade", 10),
  new Skill("Physics", 1),
  new Skill("Pilot", 1),
  new Skill("Psychoanalysis", 1),
  new Skill("Psychology", 10),
  new Skill("Read Lips", 1),
  new Skill("Ride", 5),
  new Skill("Science", 1),
  new Skill("Sleight of Hand", 10),
  new Skill("Spot Hidden", 25),
  new Skill("Stealth", 20),
  new Skill("Survival", 10),
  new Skill("Swim", 20),
  new Skill("Throw", 20),
  new Skill("Track", 10),
];

  const possibleSkills: HTMLDataListElement = document.createElement("datalist");
possibleSkills.id = "possibleSkills";

function spawnHuman(human: Human) {

  const props = Object.getOwnPropertyNames(human);

  let statCollection = [];

  for (let i = 0; i < props.length - 2; i++) {
    const descript = Object.getOwnPropertyDescriptor(human, props[i]);

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

    stat.className = "pure-u-1-5";
    statCon.className = "stat-con";
    statList.className = "base-stat-list";


    statTitle.className = "stat-title";
    statTitle.textContent = props[i];
    if (typeof descript.value === "object") {
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
    } else {
      baseStatCon.className = "base";
      baseStat.className = "base-stat stat-box";
      baseStat.textContent = descript.value;
      baseStatCon.appendChild(baseStat);
      statList.appendChild(statTitle);
      statList.appendChild(baseStatCon);
    }
    statCon.appendChild(statList);

    stat.appendChild(statCon);
    statCollection.push(stat);

  }

  let statGroup = document.getElementById("statGroup");
  if (statGroup !== null) {
    statGroup = document.getElementById("statGroup");
    statGroup.remove();
    statGroup = document.createElement("div");
    statGroup.id = "statGroup";
    for (let j = 0; j < statCollection.length; j++) {
      statGroup.appendChild(statCollection[j]);
      charStats.appendChild(statGroup);
    }
    
  } else {
    statGroup = document.createElement("div");
    statGroup.id = "statGroup";
    
    for (let i = 0; i < statCollection.length; i++) {
      statGroup.appendChild(statCollection[i]);
      charStats.appendChild(statGroup);
    }
  }
}

const humanStore = window.localStorage;

document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.getElementById("closeButton");
  const maxButton = document.getElementById("maxButton");
  const minusButton = document.getElementById("minusButton");

  minusButton.addEventListener("click", () => {
    remote.BrowserWindow.getFocusedWindow().minimize();
    minusButton.blur();
  })

  maxButton.addEventListener("click", () => {
    const windowMax: boolean = JSON.parse(maxButton.getAttribute("data-maximize")) as boolean;
    if (windowMax === false) {
      remote.BrowserWindow.getFocusedWindow().maximize();
      maxButton.className = "far fa-window-restore";
      maxButton.setAttribute("data-maximize", "true");
      closeButton.blur();
    } else {
      maxButton.setAttribute("data-maximize", "false");
      maxButton.className = "far fa-window-maximize";
      ipcRenderer.send('reset-window-size');
      closeButton.blur();
    }
  });

  closeButton.addEventListener("click", () => {
    remote.BrowserWindow.getFocusedWindow().close();
    closeButton.blur();
  });

  const isMax = remote.BrowserWindow.getFocusedWindow().isMaximized();
  if (isMax === true) {
    maxButton.setAttribute("data-maximize", "true");
    maxButton.className = "far fa-window-restore";
    closeButton.blur();
  }

  request("https://randomuser.me/api/1.2/?nat=us", (error, response, body) => {
    const person = JSON.parse(body as string);
    const gender = person["results"][0]["gender"];
    const name = person["results"][0]["name"];

    const human = new Human(name["title"], 
    Helpers.upcase(name["first"]),
    Helpers.upcase(name["last"]),
    Helpers.upcase(gender));

    spawnHuman(human);
    humanStore.setItem('human', JSON.stringify(human));
    

    const charName = document.getElementById("charName");
    const charAge = document.getElementById("charAge");
    const charHP = document.getElementById("charHP");

    charHP.textContent = String(human.hp);
    charAge.textContent = String(human.age);
    charName.textContent = `${Helpers.upcase(name["title"])}. ${Helpers.upcase(name["first"])} ${Helpers.upcase(name["last"])}`;
  });
});

const rollChar = document.getElementById("rollChar");
const charStats = document.getElementById("charStats");

rollChar.addEventListener("click", (event: Event) => {
  request("https://randomuser.me/api/1.2/?nat=us", (error, response, body) => {
    const person = JSON.parse(body as string);
    const gender = person["results"][0]["gender"];
    const name = person["results"][0]["name"];

    const human = new Human(name["title"], 
      Helpers.upcase(name["first"]),
      Helpers.upcase(name["last"]),
      Helpers.upcase(gender));

    spawnHuman(human);

    humanStore.setItem('human', JSON.stringify(human));

    const charName = document.getElementById("charName");
    const charAge = document.getElementById("charAge");
    const charHP = document.getElementById("charHP");

    charHP.textContent = String(human.hp);
    charAge.textContent = String(human.age);
    charName.textContent = `${Helpers.upcase(name["title"])}. ${Helpers.upcase(name["first"])} ${Helpers.upcase(name["last"])}`
  });
});

const skillList = document.getElementById("skillList");
const addSkill = document.getElementById("addSkill");
addSkill.addEventListener("click", () => {
  const skill = document.createElement("div");
  const skillName = document.createElement("input");
  const skillValue = document.createElement("input");
  const skillRemove = document.createElement("button");

  skill.className = "skill";
  skillName.className = "skill-name";
  skillValue.className = "skill-value";
  skillRemove.className = "skill-remove";

  skillName.type = "text";
  skillValue.type = "text";
  
  skill.appendChild(skillName);
  skill.appendChild(skillValue);
  skill.appendChild(skillRemove);

  skillList.appendChild(skill);
});