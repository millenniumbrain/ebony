import {Character} from "./character";

/*
for (let i = 0; i < props.length; i++) {
  console.log(props[i] + " {");
  console.log("\tbase: " + descript.value.base +",\n" + "\thard: " + descript.value.hard +",\n" + "\tdifficult: " + descript.value.difficult +"\n}");
}
*/
const rollChar = document.getElementById("rollChar");
const charStats = document.getElementById("charStats");
rollChar.addEventListener("click", (event: Event) => {

  const char = new Character();
  const props = Object.getOwnPropertyNames(char);

  let statCollection = [];

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
    statList.className = "base-stat-list";


    statTitle.className = "stat-title";
    statTitle.textContent = props[i];
    console.log(descript.value);
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
    
    for (let j = 0; j < statCollection.length; j++) {
      statGroup.appendChild(statCollection[j]);
      charStats.appendChild(statGroup);
    }
  }

  

});


