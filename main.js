import { createTag, addClassName, callNewTag } from "./tagFunction.js";
import Word from "./word.js";

const plusBtn = document.querySelector(".voca__add-button");
const modalSection = document.querySelector("section.modal");
const closeBtn = document.querySelector(".close");
const content = document.querySelector(".input__wrapper");
const modalAddBtn = document.querySelector(".modal__add-button");
const engInput = document.querySelector("#english");
const koInput = document.querySelector("#korean");
const vocaList = document.querySelector(".voca__list");

const openModal = () => {
  modalSection.classList.remove("hide");
};

const closeModal = () => {
  modalSection.classList.add("hide");
};

plusBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// 새로운 단어를 생성하는 함수
const generateWord = () => {
  const engValue = engInput.value;
  const koValue = koInput.value;
  return new Word(engValue, koValue);
};

const makeData = (word) => {
  // <li class="voca__list-item"></li>
  let newData = callNewTag("li", "voca__list-item");

  // <span class="voca__english">${영어}</span>
  let span = callNewTag("span", "letter");
  addClassName(span, "english");
  span.innerText = word._eng;

  // <span class="voca__korean">${한글}</span>
  let span2 = callNewTag("span", "letter");
  addClassName(span2, "korean");
  span2.innerText = word._ko;

  // <a><i class="far fa-trash-alt">${아이콘}</i></a>
  let icon = callNewTag("a", "trash-icon");
  let icon_svg = callNewTag("i", "far");
  addClassName(icon_svg, "fa-trash-alt");
  icon.append(icon_svg);

  // li태그 안에 삽입
  newData.append(span);
  newData.append(span2);
  newData.append(icon);
  return newData;
};

const pushList = (data) => {
  vocaList.append(data);
};

let wordList = [];

const saveLocalStorage = (items) => {
  localStorage.setItem("localWords", JSON.stringify(items));
};

const loadLocalStorage = () => {
  const savedData = localStorage.getItem("localWords");
  // save된 data가 없다면 종료
  if (savedData === null) return;
  const parseData = JSON.parse(savedData);
  parseData.forEach((item) => {
    const savedEng = Object.values(item)[0];
    const savedKo = Object.values(item)[1];
    const savedWord = new Word(savedEng, savedKo);
    wordList = [...wordList, savedWord];
    const data = makeData(item);
    pushList(data);
  });
};

const clearInput = () => {
  engInput.value = "";
  koInput.value = "";
};

// html & LocalStorage 에 새로운 단어 추가하는 함수
const addNewWord = () => {
  const word = generateWord();
  wordList.push(word);
  saveLocalStorage(wordList);
  clearInput();
  const data = makeData(word);
  pushList(data);
};

const deleteInLocalStorage = (list) => {
  const willDeleteWord = list.childNodes[0].innerText;

  const willUpdateList = wordList.filter(
    (word) => willDeleteWord !== Object.values(word)[0]
  );
  wordList = willUpdateList;
  saveLocalStorage(wordList);
};

const deleteWord = (e) => {
  const target = e.target.parentNode;
  const list = target.parentNode;
  if (list.nodeName == "LI") {
    vocaList.removeChild(list);
    deleteInLocalStorage(list);
  }
};

loadLocalStorage();
modalAddBtn.addEventListener("click", addNewWord);
vocaList.addEventListener("click", deleteWord);
