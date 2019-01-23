import {Character} from "./character";
import {remote, ipcRenderer} from "electron";
import {Helpers} from "../helpers";
import * as request from "request";

const characterStore = window.localStorage;


function generateCharateristics(character: Character) {

  const props = Object.getOwnPropertyNames(character);

  let statCollection = [];

  for (let i = 0; i < props.length - 1; i++) {
    const descript = Object.getOwnPropertyDescriptor(character, props[i]);

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

    stat.className = "pure-u-1-4";
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

document.addEventListener("DOMContentLoaded", () => {

const closeButton = document.getElementById("closeButton");
const maxButton = document.getElementById("maxButton");
const minusButton = document.getElementById("minusButton");

minusButton.addEventListener("click", (event: Event) => {
  remote.BrowserWindow.getFocusedWindow().minimize();
  minusButton.blur();
})

maxButton.addEventListener("click", (event: Event) => {
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

closeButton.addEventListener("click", (event: Event) => {
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

    const character = new Character(name["title"], 
      Helpers.upcase(name["first"]),
      Helpers.upcase(name["last"]),
      Helpers.upcase(gender));

    generateCharateristics(character);
    characterStore.setItem('character', JSON.stringify(character));
    

    const charName = document.getElementById("charName");
    const charAge = document.getElementById("charAge");

    charAge.textContent = String(character.age);
    charName.textContent = `${Helpers.upcase(name["title"])}. ${Helpers.upcase(name["first"])} ${Helpers.upcase(name["last"])}`
  });
});

const rollChar = document.getElementById("rollChar");
const charStats = document.getElementById("charStats");
rollChar.addEventListener("click", (event: Event) => {
  request("https://randomuser.me/api/1.2/?nat=us", (error, response, body) => {
    const person = JSON.parse(body as string);
    const gender = person["results"][0]["gender"];
    const name = person["results"][0]["name"];

    const character = new Character(name["title"], 
      Helpers.upcase(name["first"]),
      Helpers.upcase(name["last"]),
      Helpers.upcase(gender));

    generateCharateristics(character);

    characterStore.setItem('character', JSON.stringify(character));

    const charName = document.getElementById("charName");
    const charAge = document.getElementById("charAge");

    charAge.textContent = String(character.age);
    charName.textContent = `${Helpers.upcase(name["title"])}. ${Helpers.upcase(name["first"])} ${Helpers.upcase(name["last"])}`
  });
});

/*
const getStorage = document.getElementById("getStorage");
getStorage.addEventListener("click", () => {
  const storedCharacter = characterStore.getItem("character")
  ipcRenderer.send('save-character', storedCharacter);

  ipcRenderer.on('character-saved', (event, arg) => {
    console.log(arg);
  });



});
*/