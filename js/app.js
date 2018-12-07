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
/***/ (function(module, exports) {

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
        this.luck = this.generateStats(3);
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
    }
    else {
        counter++;
    }
}
console.log(statGroupCollection[0]);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxTQUFTLFlBQVksQ0FBQyxHQUFHO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRUQsU0FBUyxhQUFhO0lBQ3BCLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQztJQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLEtBQUssR0FBRyxLQUFLLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxD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QUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckM7UUFDRCxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBYyxHQUFHLEVBQUUsQ0FBQztLQUNyQjtTQUFNO1FBQ0wsT0FBTyxFQUFFLENBQUM7S0FDWDtDQUdGO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvYXBwLnRzXCIpO1xuIiwiZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkgOiBudW1iZXIge1xyXG4gIHJldHVybiAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcm9sbFRocmVlRGljZSgpIHtcclxuICBsZXQgdG90YWw6IG51bWJlciA9IDA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIHRvdGFsID0gdG90YWwgKyBnZXRSYW5kb21JbnQoNik7XHJcbiAgICBpZiAoaSA9PT0gMikge1xyXG4gICAgICByZXR1cm4gdG90YWwgKiA1O1xyXG4gICAgfVxyXG4gIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvbGxUd29EaWNlKCkgOiBudW1iZXIge1xyXG4gIGxldCB0b3RhbDogbnVtYmVyID0gMDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgdG90YWwgPSB0b3RhbCArIGdldFJhbmRvbUludCg2KTtcclxuICAgIGlmIChpID09PSAxKSB7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gKHRvdGFsICsgNikgKiA1O1xyXG4gICAgfVxyXG4gIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkFnZSgpIDogbnVtYmVyIHtcclxuICByZXR1cm4gMTUgKyBnZXRSYW5kb21JbnQoODkpO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdEF0dHJpYnV0ZXMge1xyXG4gIGJhc2U6IG51bWJlcixcclxuICBoYXJkOiBudW1iZXIsXHJcbiAgZGlmZmljdWx0OiBudW1iZXJcclxufVxyXG5cclxuY2xhc3MgQ2hhcmFjdGVyIHtcclxuICBzdHI6IFN0YXRBdHRyaWJ1dGVzO1xyXG4gIGNvbjogU3RhdEF0dHJpYnV0ZXM7XHJcbiAgc2l6OiBTdGF0QXR0cmlidXRlcztcclxuICBkZXg6IFN0YXRBdHRyaWJ1dGVzO1xyXG4gIGFwcDogU3RhdEF0dHJpYnV0ZXM7XHJcbiAgaW50OiBTdGF0QXR0cmlidXRlcztcclxuICBwb3c6IFN0YXRBdHRyaWJ1dGVzO1xyXG4gIGVkdTogU3RhdEF0dHJpYnV0ZXM7XHJcbiAgbHVjazogU3RhdEF0dHJpYnV0ZXM7XHJcbiAgYWdlOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zdHIgPSB0aGlzLmdlbmVyYXRlU3RhdHMoMyk7XHJcbiAgICB0aGlzLmNvbiA9IHRoaXMuZ2VuZXJhdGVTdGF0cygzKTtcclxuICAgIHRoaXMuc2l6ID0gdGhpcy5nZW5lcmF0ZVN0YXRzKDIpO1xyXG4gICAgdGhpcy5kZXggPSB0aGlzLmdlbmVyYXRlU3RhdHMoMyk7XHJcbiAgICB0aGlzLmFwcCA9IHRoaXMuZ2VuZXJhdGVTdGF0cygzKTtcclxuICAgIHRoaXMuaW50ID0gdGhpcy5nZW5lcmF0ZVN0YXRzKDIpO1xyXG4gICAgdGhpcy5wb3cgPSB0aGlzLmdlbmVyYXRlU3RhdHMoMyk7XHJcbiAgICB0aGlzLmVkdSA9IHRoaXMuZ2VuZXJhdGVTdGF0cygyKTtcclxuICAgIHRoaXMubHVjayA9IHRoaXMuZ2VuZXJhdGVTdGF0cygzKTtcclxuICAgIHRoaXMuYWdlID0gZ2VuQWdlKCk7XHJcbiAgfVxyXG5cclxuICBpbXByb3ZlQWdlQ2hlY2soKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVTdGF0cyhudW1EaWNlOiBudW1iZXIpIDogU3RhdEF0dHJpYnV0ZXMge1xyXG4gICAgY29uc3Qgc3RhdHM6IFN0YXRBdHRyaWJ1dGVzID0ge1xyXG4gICAgICBiYXNlOiAwLFxyXG4gICAgICBoYXJkOiAwLFxyXG4gICAgICBkaWZmaWN1bHQ6IDBcclxuICAgIH07XHJcbiAgICBpZiAobnVtRGljZSA9PT0gMykge1xyXG4gICAgICBzdGF0cy5iYXNlICA9IHJvbGxUaHJlZURpY2UoKTtcclxuICAgICAgc3RhdHMuaGFyZCA9IE1hdGguZmxvb3Ioc3RhdHMuYmFzZSAvIDIpO1xyXG4gICAgICBzdGF0cy5kaWZmaWN1bHQgPSBNYXRoLmZsb29yKHN0YXRzLmJhc2UgLyA1KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXRzLmJhc2UgID0gcm9sbFR3b0RpY2UoKTtcclxuICAgICAgc3RhdHMuaGFyZCA9IE1hdGguZmxvb3Ioc3RhdHMuYmFzZSAvIDIpO1xyXG4gICAgICBzdGF0cy5kaWZmaWN1bHQgPSBNYXRoLmZsb29yKHN0YXRzLmJhc2UgLyA1KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0cztcclxuICB9XHJcblxyXG4gIHJvbGxDaGVjayhzdGF0OiBzdHJpbmcsIHJvbGxUeXBlOiBzdHJpbmcpIDogQm9vbGVhbiB7XHJcbiAgICBjb25zdCByb2xsID0gMSArIGdldFJhbmRvbUludCgxMDApO1xyXG4gICAgc3dpdGNoKHJvbGxUeXBlKSB7XHJcbiAgICAgIGNhc2UgXCJiYXNlXCI6XHJcbiAgICAgICAgaWYgKHJvbGwgPD0gdGhpc1tzdGF0XS5iYXNlKSAge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaGFyZFwiOlxyXG4gICAgICAgIGlmIChyb2xsIDw9IHRoaXNbc3RhdF0uaGFyZCkgIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRpZmZpY3VsdFwiOlxyXG4gICAgICAgIGlmIChyb2xsIDw9IHRoaXNbc3RhdF0uZGlmZmljdWx0KSAge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGlmIChyb2xsIDw9IHRoaXNbc3RhdF0uYmFzZSkgIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcclxuICBjb25zb2xlLmxvZyhwcm9wc1tpXSArIFwiIHtcIik7XHJcbiAgY29uc29sZS5sb2coXCJcXHRiYXNlOiBcIiArIGRlc2NyaXB0LnZhbHVlLmJhc2UgK1wiLFxcblwiICsgXCJcXHRoYXJkOiBcIiArIGRlc2NyaXB0LnZhbHVlLmhhcmQgK1wiLFxcblwiICsgXCJcXHRkaWZmaWN1bHQ6IFwiICsgZGVzY3JpcHQudmFsdWUuZGlmZmljdWx0ICtcIlxcbn1cIik7XHJcbn1cclxuKi9cclxuXHJcbmNvbnN0IGNoYXIgPSBuZXcgQ2hhcmFjdGVyKCk7XHJcbmNvbnN0IHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY2hhcik7XHJcblxyXG5jb25zdCBjaGFyU3RhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJTdGF0c1wiKTtcclxubGV0IGNvdW50ZXIgPSAwO1xyXG5sZXQgc3RhdENvbGxlY3Rpb24gPSBbXTtcclxuY29uc3Qgc3RhdEdyb3VwQ29sbGVjdGlvbiA9IFtdO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGggLTE7IGkrKykge1xyXG4gIGNvbnN0IGRlc2NyaXB0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjaGFyLCBwcm9wc1tpXSk7XHJcblxyXG4gIGNvbnN0IHN0YXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHN0YXRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHN0YXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGNvbnN0IHN0YXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBiYXNlU3RhdENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBiYXNlU3RhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNvbnN0IGhhcmRTdGF0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IGhhcmRTdGF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29uc3QgZGlmZlN0YXRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuICBjb25zdCBkaWZmU3RhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICBzdGF0LmNsYXNzTmFtZSA9IFwicHVyZS11LTEtM1wiO1xyXG4gIHN0YXRDb24uY2xhc3NOYW1lID0gXCJzdGF0LWNvblwiO1xyXG4gIHN0YXRMaXN0LmNsYXNzTmFtZSA9IFwiYmFzZS1zdGF0YS1saXN0XCI7XHJcblxyXG5cclxuICBzdGF0VGl0bGUuY2xhc3NOYW1lID0gXCJzdGF0LXRpdGxlXCI7XHJcbiAgc3RhdFRpdGxlLnRleHRDb250ZW50ID0gcHJvcHNbaV07XHJcblxyXG4gIGJhc2VTdGF0Q29uLmNsYXNzTmFtZSA9IFwiYmFzZVwiO1xyXG4gIGJhc2VTdGF0LmNsYXNzTmFtZSA9IFwiYmFzZS1zdGF0IHN0YXQtYm94XCI7XHJcbiAgYmFzZVN0YXQudGV4dENvbnRlbnQgPSBkZXNjcmlwdC52YWx1ZS5iYXNlO1xyXG4gIFxyXG4gIGhhcmRTdGF0Q29uLmNsYXNzTmFtZSA9IFwiaGFyZCBzdWItc3RhdFwiO1xyXG4gIGhhcmRTdGF0LmNsYXNzTmFtZSA9IFwic3RhdC1ib3hcIjtcclxuICBoYXJkU3RhdC50ZXh0Q29udGVudCA9IGRlc2NyaXB0LnZhbHVlLmhhcmQ7XHJcblxyXG4gIGRpZmZTdGF0Q29uLmNsYXNzTmFtZSA9IFwiZGlmZmljdWx0IHN1Yi1zdGF0XCI7XHJcbiAgZGlmZlN0YXQuY2xhc3NOYW1lID0gXCJzdGF0LWJveFwiO1xyXG4gIGRpZmZTdGF0LnRleHRDb250ZW50ID0gZGVzY3JpcHQudmFsdWUuZGlmZmljdWx0O1xyXG5cclxuICBiYXNlU3RhdENvbi5hcHBlbmRDaGlsZChiYXNlU3RhdCk7XHJcbiAgaGFyZFN0YXRDb24uYXBwZW5kQ2hpbGQoaGFyZFN0YXQpO1xyXG4gIGRpZmZTdGF0Q29uLmFwcGVuZENoaWxkKGRpZmZTdGF0KTtcclxuXHJcbiAgc3RhdExpc3QuYXBwZW5kQ2hpbGQoc3RhdFRpdGxlKTtcclxuICBzdGF0TGlzdC5hcHBlbmRDaGlsZChiYXNlU3RhdENvbik7XHJcbiAgc3RhdExpc3QuYXBwZW5kQ2hpbGQoaGFyZFN0YXRDb24pO1xyXG4gIHN0YXRMaXN0LmFwcGVuZENoaWxkKGRpZmZTdGF0Q29uKTtcclxuXHJcbiAgc3RhdENvbi5hcHBlbmRDaGlsZChzdGF0TGlzdCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHN0YXRDb24pO1xyXG4gIHN0YXRDb2xsZWN0aW9uLnB1c2goc3RhdENvbik7XHJcblxyXG5cclxuICBpZiAoKGNvdW50ZXIgKyAxKSAlIDMgPT09IDApIHtcclxuICAgIGxldCBzdGF0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdGF0Q29sbGVjdGlvbi5sZW5ndGg7IGorKykge1xyXG4gICAgICBzdGF0R3JvdXAuYXBwZW5kQ2hpbGQoc3RhdENvbGxlY3Rpb25bal0pO1xyXG4gICAgICBzdGF0R3JvdXBDb2xsZWN0aW9uLnB1c2goc3RhdEdyb3VwKTtcclxuICAgIH1cclxuICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgc3RhdENvbGxlY3Rpb24gPSBbXTtcclxuICB9IGVsc2Uge1xyXG4gICAgY291bnRlcisrO1xyXG4gIH0gXHJcbiAgIFxyXG5cclxufVxyXG5cclxuY29uc29sZS5sb2coc3RhdEdyb3VwQ29sbGVjdGlvblswXSk7Il0sInNvdXJjZVJvb3QiOiIifQ==