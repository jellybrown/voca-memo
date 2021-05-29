/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LocalStorage\": () => (/* binding */ LocalStorage)\n/* harmony export */ });\nclass LocalStorage {\n  load() {\n    const savedData = localStorage.getItem(\"localWords\");\n    if (savedData === null) return;\n    const parseData = JSON.parse(savedData);\n    return parseData;\n  }\n\n  save(items) {\n    localStorage.setItem(\"localWords\", JSON.stringify(items));\n  }\n\n  delete(wordList, list) {\n    const willDeleteWord = list.childNodes[0].innerText;\n\n    const willUpdateList = wordList.filter(\n      (word) => willDeleteWord !== Object.values(word)[0]\n    );\n    wordList = willUpdateList;\n    this.save(wordList);\n  }\n}\n\n\n//# sourceURL=webpack://voca-memo/./src/localStorage.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n/* harmony import */ var _word_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word.js */ \"./src/word.js\");\n\n\n\nconst plusBtn = document.querySelector(\".voca__add-button\");\nconst modalSection = document.querySelector(\"section.modal\");\nconst closeBtn = document.querySelector(\".close\");\nconst modalAddBtn = document.querySelector(\".modal__add-button\");\nconst engInput = document.querySelector(\"#english\");\nconst koInput = document.querySelector(\"#korean\");\nconst vocaList = document.querySelector(\".voca__list\");\n\nconst storage = new _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.LocalStorage();\n\nconst openModal = () => {\n  modalSection.classList.remove(\"hide\");\n};\n\nconst closeModal = () => {\n  modalSection.classList.add(\"hide\");\n};\n\nplusBtn.addEventListener(\"click\", openModal);\ncloseBtn.addEventListener(\"click\", closeModal);\n\n// 새로운 단어를 생성하는 함수\nconst generateWord = () => {\n  const engValue = engInput.value;\n  const koValue = koInput.value;\n  return new _word_js__WEBPACK_IMPORTED_MODULE_1__.default(engValue, koValue);\n};\n\nconst makeData = (word) => {\n  const li = document.createElement(\"li\");\n  li.setAttribute(\"class\", \"voca__list-item\");\n  li.innerHTML = `<span class=\"voca__english\">${word._eng}</span>\n  <span class=\"voca__korean\">${word._ko}</span>\n  <a class=\"trash-icon\"><i class=\"far fa-trash-alt\"></i></a>\n  `;\n  return li;\n};\n\nconst pushList = (data) => {\n  vocaList.appendChild(data);\n};\n\nlet wordList = [];\n\nconst loadFirst = () => {\n  const parseData = storage.load();\n  parseData?.forEach((item) => {\n    const savedEng = Object.values(item)[0];\n    const savedKo = Object.values(item)[1];\n    const savedWord = new _word_js__WEBPACK_IMPORTED_MODULE_1__.default(savedEng, savedKo);\n    wordList = [...wordList, savedWord];\n    const data = makeData(item);\n    pushList(data);\n  });\n};\n\nconst clearInput = () => {\n  engInput.value = \"\";\n  koInput.value = \"\";\n};\n\n// html & LocalStorage 에 새로운 단어 추가하는 함수\nconst addNewWord = () => {\n  const word = generateWord();\n  wordList.push(word);\n  storage.save(wordList);\n  clearInput();\n  const data = makeData(word);\n  pushList(data);\n  closeModal();\n};\n\nconst deleteWord = (e) => {\n  const trash = e.target;\n  const target = trash.parentNode.parentNode; // li\n  vocaList.removeChild(target);\n  storage.delete(wordList, target);\n};\n\nloadFirst();\n\nmodalAddBtn.addEventListener(\"click\", addNewWord);\nvocaList.addEventListener(\"click\", deleteWord);\n\n\n//# sourceURL=webpack://voca-memo/./src/main.js?");

/***/ }),

/***/ "./src/word.js":
/*!*********************!*\
  !*** ./src/word.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Word {\n  constructor(eng, ko) {\n    this._eng = eng;\n    this._ko = ko;\n  }\n  get eng() {\n    return this._eng;\n  }\n  get ko() {\n    return this._ko;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Word);\n\n\n//# sourceURL=webpack://voca-memo/./src/word.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;