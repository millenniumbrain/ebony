/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/app.ts":
/*!*******************!*\
  !*** ./ts/app.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = __webpack_require__(/*! ./character */ "./ts/character.ts");
/*
for (let i = 0; i < props.length; i++) {
  console.log(props[i] + " {");
  console.log("\tbase: " + descript.value.base +",\n" + "\thard: " + descript.value.hard +",\n" + "\tdifficult: " + descript.value.difficult +"\n}");
}
*/
const rollChar = document.getElementById("rollChar");
const charStats = document.getElementById("charStats");
rollChar.addEventListener("click", (event) => {
    const char = new character_1.Character();
    const props = Object.getOwnPropertyNames(char);
    let statCollection = [];
    for (let i = 0; i < props.length - 1; i++) {
        const descript = Object.getOwnPropertyDescriptor(char, props[i]);
        const stat = document.createElement("div");
        const statCon = document.createElement("div");
        const statList = document.createElement("ul");
        const statTitle = document.createElement("li");
        const baseStatCon = document.createElement("li");
        const baseStat = document.createElement("span");
        const hardStatCon = document.createElement("li");
        const hardStat = document.createElement("span");
        const diffStatCon = document.createElement("li");
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
        }
        else {
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
    }
    else {
        statGroup = document.createElement("div");
        statGroup.id = "statGroup";
        for (let j = 0; j < statCollection.length; j++) {
            statGroup.appendChild(statCollection[j]);
            charStats.appendChild(statGroup);
        }
    }
});


/***/ }),

/***/ "./ts/character.ts":
/*!*************************!*\
  !*** ./ts/character.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getRandomInt(max) {
    return 1 + Math.floor(Math.random() * Math.floor(max));
}
function rollThreeDice() {
    let total = 0;
    for (let i = 0; i < 3; i++) {
        total = total + getRandomInt(6);
        if (i === 2) {
            return total * 5;
        }
    }
}
function rollTwoDice() {
    let total = 0;
    for (let i = 0; i < 2; i++) {
        total = total + getRandomInt(6);
        if (i === 1) {
            return (total + 6) * 5;
        }
    }
}
function genAge() {
    return 15 + getRandomInt(89);
}
class Character {
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
    generateStats(numDice) {
        const stats = {
            base: 0,
            hard: 0,
            difficult: 0
        };
        if (numDice === 3) {
            stats.base = rollThreeDice();
            stats.hard = Math.floor(stats.base / 2);
            stats.difficult = Math.floor(stats.base / 5);
        }
        else {
            stats.base = rollTwoDice();
            stats.hard = Math.floor(stats.base / 2);
            stats.difficult = Math.floor(stats.base / 5);
        }
        return stats;
    }
    rollCheck(stat, rollType) {
        const roll = 1 + getRandomInt(100);
        switch (rollType) {
            case "base":
                if (roll <= this[stat].base) {
                    return true;
                }
                break;
            case "hard":
                if (roll <= this[stat].hard) {
                    return true;
                }
                break;
            case "difficult":
                if (roll <= this[stat].difficult) {
                    return true;
                }
                break;
            default:
                if (roll <= this[stat].base) {
                    return true;
                }
                break;
        }
        return false;
    }
}
exports.Character = Character;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBwLnRzIiwid2VicGFjazovLy8uL3RzL2NoYXJhY3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsZ0ZBQXNDO0FBRXRDOzs7OztFQUtFO0FBQ0YsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyRCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFZLEVBQUUsRUFBRTtJQUVsRCxNQUFNLElBQUksR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztJQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsbUJB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LEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRjtBQXpFRCw4QkF5RUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90cy9hcHAudHNcIik7XG4iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVyXCI7XHJcblxyXG4vKlxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XHJcbiAgY29uc29sZS5sb2cocHJvcHNbaV0gKyBcIiB7XCIpO1xyXG4gIGNvbnNvbGUubG9nKFwiXFx0YmFzZTogXCIgKyBkZXNjcmlwdC52YWx1ZS5iYXNlICtcIixcXG5cIiArIFwiXFx0aGFyZDogXCIgKyBkZXNjcmlwdC52YWx1ZS5oYXJkICtcIixcXG5cIiArIFwiXFx0ZGlmZmljdWx0OiBcIiArIGRlc2NyaXB0LnZhbHVlLmRpZmZpY3VsdCArXCJcXG59XCIpO1xyXG59XHJcbiovXHJcbmNvbnN0IHJvbGxDaGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb2xsQ2hhclwiKTtcclxuY29uc3QgY2hhclN0YXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFyU3RhdHNcIik7XHJcbnJvbGxDaGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcblxyXG4gIGNvbnN0IGNoYXIgPSBuZXcgQ2hhcmFjdGVyKCk7XHJcbiAgY29uc3QgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjaGFyKTtcclxuXHJcbiAgbGV0IHN0YXRDb2xsZWN0aW9uID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoIC0xOyBpKyspIHtcclxuICAgIGNvbnN0IGRlc2NyaXB0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjaGFyLCBwcm9wc1tpXSk7XHJcblxyXG4gICAgY29uc3Qgc3RhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBzdGF0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHN0YXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3Qgc3RhdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgYmFzZVN0YXRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBiYXNlU3RhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY29uc3QgaGFyZFN0YXRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBoYXJkU3RhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY29uc3QgZGlmZlN0YXRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuICAgIGNvbnN0IGRpZmZTdGF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gICAgc3RhdC5jbGFzc05hbWUgPSBcInB1cmUtdS0xLTNcIjtcclxuICAgIHN0YXRDb24uY2xhc3NOYW1lID0gXCJzdGF0LWNvblwiO1xyXG4gICAgc3RhdExpc3QuY2xhc3NOYW1lID0gXCJiYXNlLXN0YXQtbGlzdFwiO1xyXG5cclxuXHJcbiAgICBzdGF0VGl0bGUuY2xhc3NOYW1lID0gXCJzdGF0LXRpdGxlXCI7XHJcbiAgICBzdGF0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9wc1tpXTtcclxuICAgIGNvbnNvbGUubG9nKGRlc2NyaXB0LnZhbHVlKTtcclxuICAgIGlmICh0eXBlb2YgZGVzY3JpcHQudmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgYmFzZVN0YXRDb24uY2xhc3NOYW1lID0gXCJiYXNlXCI7XHJcbiAgICAgIGJhc2VTdGF0LmNsYXNzTmFtZSA9IFwiYmFzZS1zdGF0IHN0YXQtYm94XCI7XHJcbiAgICAgIGJhc2VTdGF0LnRleHRDb250ZW50ID0gZGVzY3JpcHQudmFsdWUuYmFzZTtcclxuICAgICAgXHJcbiAgICAgIGhhcmRTdGF0Q29uLmNsYXNzTmFtZSA9IFwiaGFyZCBzdWItc3RhdFwiO1xyXG4gICAgICBoYXJkU3RhdC5jbGFzc05hbWUgPSBcInN0YXQtYm94XCI7XHJcbiAgICAgIGhhcmRTdGF0LnRleHRDb250ZW50ID0gZGVzY3JpcHQudmFsdWUuaGFyZDtcclxuXHJcbiAgICAgIGRpZmZTdGF0Q29uLmNsYXNzTmFtZSA9IFwiZGlmZmljdWx0IHN1Yi1zdGF0XCI7XHJcbiAgICAgIGRpZmZTdGF0LmNsYXNzTmFtZSA9IFwic3RhdC1ib3hcIjtcclxuICAgICAgZGlmZlN0YXQudGV4dENvbnRlbnQgPSBkZXNjcmlwdC52YWx1ZS5kaWZmaWN1bHQ7XHJcblxyXG4gICAgICBiYXNlU3RhdENvbi5hcHBlbmRDaGlsZChiYXNlU3RhdCk7XHJcbiAgICAgIGhhcmRTdGF0Q29uLmFwcGVuZENoaWxkKGhhcmRTdGF0KTtcclxuICAgICAgZGlmZlN0YXRDb24uYXBwZW5kQ2hpbGQoZGlmZlN0YXQpO1xyXG5cclxuICAgICAgc3RhdExpc3QuYXBwZW5kQ2hpbGQoc3RhdFRpdGxlKTtcclxuICAgICAgc3RhdExpc3QuYXBwZW5kQ2hpbGQoYmFzZVN0YXRDb24pO1xyXG4gICAgICBzdGF0TGlzdC5hcHBlbmRDaGlsZChoYXJkU3RhdENvbik7XHJcbiAgICAgIHN0YXRMaXN0LmFwcGVuZENoaWxkKGRpZmZTdGF0Q29uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhc2VTdGF0Q29uLmNsYXNzTmFtZSA9IFwiYmFzZVwiO1xyXG4gICAgICBiYXNlU3RhdC5jbGFzc05hbWUgPSBcImJhc2Utc3RhdCBzdGF0LWJveFwiO1xyXG4gICAgICBiYXNlU3RhdC50ZXh0Q29udGVudCA9IGRlc2NyaXB0LnZhbHVlO1xyXG4gICAgICBiYXNlU3RhdENvbi5hcHBlbmRDaGlsZChiYXNlU3RhdCk7XHJcbiAgICAgIHN0YXRMaXN0LmFwcGVuZENoaWxkKHN0YXRUaXRsZSk7XHJcbiAgICAgIHN0YXRMaXN0LmFwcGVuZENoaWxkKGJhc2VTdGF0Q29uKTtcclxuICAgIH1cclxuICAgIHN0YXRDb24uYXBwZW5kQ2hpbGQoc3RhdExpc3QpO1xyXG5cclxuICAgIHN0YXQuYXBwZW5kQ2hpbGQoc3RhdENvbik7XHJcbiAgICBzdGF0Q29sbGVjdGlvbi5wdXNoKHN0YXQpO1xyXG5cclxuICB9XHJcblxyXG4gIGxldCBzdGF0R3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXRHcm91cFwiKTtcclxuICBpZiAoc3RhdEdyb3VwICE9PSBudWxsKSB7XHJcbiAgICBzdGF0R3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXRHcm91cFwiKTtcclxuICAgIHN0YXRHcm91cC5yZW1vdmUoKTtcclxuICAgIHN0YXRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdGF0R3JvdXAuaWQgPSBcInN0YXRHcm91cFwiO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdGF0Q29sbGVjdGlvbi5sZW5ndGg7IGorKykge1xyXG4gICAgICBzdGF0R3JvdXAuYXBwZW5kQ2hpbGQoc3RhdENvbGxlY3Rpb25bal0pO1xyXG4gICAgICBjaGFyU3RhdHMuYXBwZW5kQ2hpbGQoc3RhdEdyb3VwKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3RhdEdyb3VwLmlkID0gXCJzdGF0R3JvdXBcIjtcclxuICAgIFxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdGF0Q29sbGVjdGlvbi5sZW5ndGg7IGorKykge1xyXG4gICAgICBzdGF0R3JvdXAuYXBwZW5kQ2hpbGQoc3RhdENvbGxlY3Rpb25bal0pO1xyXG4gICAgICBjaGFyU3RhdHMuYXBwZW5kQ2hpbGQoc3RhdEdyb3VwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG5cclxufSk7XHJcblxyXG5cclxuIiwiZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkgOiBudW1iZXIge1xyXG4gIHJldHVybiAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcm9sbFRocmVlRGljZSgpIHtcclxuICBsZXQgdG90YWw6IG51bWJlciA9IDA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIHRvdGFsID0gdG90YWwgKyBnZXRSYW5kb21JbnQoNik7XHJcbiAgICBpZiAoaSA9PT0gMikge1xyXG4gICAgICByZXR1cm4gdG90YWwgKiA1O1xyXG4gICAgfVxyXG4gIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvbGxUd29EaWNlKCkgOiBudW1iZXIge1xyXG4gIGxldCB0b3RhbDogbnVtYmVyID0gMDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgdG90YWwgPSB0b3RhbCArIGdldFJhbmRvbUludCg2KTtcclxuICAgIGlmIChpID09PSAxKSB7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gKHRvdGFsICsgNikgKiA1O1xyXG4gICAgfVxyXG4gIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkFnZSgpIDogbnVtYmVyIHtcclxuICByZXR1cm4gMTUgKyBnZXRSYW5kb21JbnQoODkpO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdEF0dHJpYnV0ZXMge1xyXG4gIGJhc2U6IG51bWJlcixcclxuICBoYXJkOiBudW1iZXIsXHJcbiAgZGlmZmljdWx0OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XHJcbiAgc3RyOiBTdGF0QXR0cmlidXRlcztcclxuICBjb246IFN0YXRBdHRyaWJ1dGVzO1xyXG4gIHNpejogU3RhdEF0dHJpYnV0ZXM7XHJcbiAgZGV4OiBTdGF0QXR0cmlidXRlcztcclxuICBhcHA6IFN0YXRBdHRyaWJ1dGVzO1xyXG4gIGludDogU3RhdEF0dHJpYnV0ZXM7XHJcbiAgcG93OiBTdGF0QXR0cmlidXRlcztcclxuICBlZHU6IFN0YXRBdHRyaWJ1dGVzO1xyXG4gIGx1Y2s6IG51bWJlcjtcclxuICBhZ2U6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN0ciA9IHRoaXMuZ2VuZXJhdGVTdGF0cygzKTtcclxuICAgIHRoaXMuY29uID0gdGhpcy5nZW5lcmF0ZVN0YXRzKDMpO1xyXG4gICAgdGhpcy5zaXogPSB0aGlzLmdlbmVyYXRlU3RhdHMoMik7XHJcbiAgICB0aGlzLmRleCA9IHRoaXMuZ2VuZXJhdGVTdGF0cygzKTtcclxuICAgIHRoaXMuYXBwID0gdGhpcy5nZW5lcmF0ZVN0YXRzKDMpO1xyXG4gICAgdGhpcy5pbnQgPSB0aGlzLmdlbmVyYXRlU3RhdHMoMik7XHJcbiAgICB0aGlzLnBvdyA9IHRoaXMuZ2VuZXJhdGVTdGF0cygzKTtcclxuICAgIHRoaXMuZWR1ID0gdGhpcy5nZW5lcmF0ZVN0YXRzKDIpO1xyXG4gICAgdGhpcy5sdWNrID0gcm9sbFRocmVlRGljZSgpO1xyXG4gICAgdGhpcy5hZ2UgPSBnZW5BZ2UoKTtcclxuICB9XHJcblxyXG4gIGltcHJvdmVBZ2VDaGVjaygpIHtcclxuXHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVN0YXRzKG51bURpY2U6IG51bWJlcikgOiBTdGF0QXR0cmlidXRlcyB7XHJcbiAgICBjb25zdCBzdGF0czogU3RhdEF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgIGJhc2U6IDAsXHJcbiAgICAgIGhhcmQ6IDAsXHJcbiAgICAgIGRpZmZpY3VsdDogMFxyXG4gICAgfTtcclxuICAgIGlmIChudW1EaWNlID09PSAzKSB7XHJcbiAgICAgIHN0YXRzLmJhc2UgID0gcm9sbFRocmVlRGljZSgpO1xyXG4gICAgICBzdGF0cy5oYXJkID0gTWF0aC5mbG9vcihzdGF0cy5iYXNlIC8gMik7XHJcbiAgICAgIHN0YXRzLmRpZmZpY3VsdCA9IE1hdGguZmxvb3Ioc3RhdHMuYmFzZSAvIDUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhdHMuYmFzZSAgPSByb2xsVHdvRGljZSgpO1xyXG4gICAgICBzdGF0cy5oYXJkID0gTWF0aC5mbG9vcihzdGF0cy5iYXNlIC8gMik7XHJcbiAgICAgIHN0YXRzLmRpZmZpY3VsdCA9IE1hdGguZmxvb3Ioc3RhdHMuYmFzZSAvIDUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRzO1xyXG4gIH1cclxuXHJcbiAgcm9sbENoZWNrKHN0YXQ6IHN0cmluZywgcm9sbFR5cGU6IHN0cmluZykgOiBCb29sZWFuIHtcclxuICAgIGNvbnN0IHJvbGwgPSAxICsgZ2V0UmFuZG9tSW50KDEwMCk7XHJcbiAgICBzd2l0Y2gocm9sbFR5cGUpIHtcclxuICAgICAgY2FzZSBcImJhc2VcIjpcclxuICAgICAgICBpZiAocm9sbCA8PSB0aGlzW3N0YXRdLmJhc2UpICB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJoYXJkXCI6XHJcbiAgICAgICAgaWYgKHJvbGwgPD0gdGhpc1tzdGF0XS5oYXJkKSAge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGlmZmljdWx0XCI6XHJcbiAgICAgICAgaWYgKHJvbGwgPD0gdGhpc1tzdGF0XS5kaWZmaWN1bHQpICB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaWYgKHJvbGwgPD0gdGhpc1tzdGF0XS5iYXNlKSAge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=