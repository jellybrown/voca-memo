import { createTag, addClassName, callNewTag } from "./tagFunction.js";
import Word from "./word.js";

const plusBtn = document.querySelector(".main_add_btn");
const modalSection = document.querySelector(".modal_section");
const closeBtn = document.querySelector(".close");
const content = document.querySelector(".content");
const modalAddBtn = document.querySelector(".modal_add_btn");
const engInput = document.querySelector("#eng_input");
const koInput = document.querySelector("#ko_input");
const vocaList = document.querySelector(".voca_list");

const openModal = () => {
  modalSection.classList.remove("hide");
};

const closeModal = () => {
  modalSection.classList.add("hide");
};

plusBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

const generateWord = () => {
  const engValue = engInput.value;
  const koValue = koInput.value;
  return new Word(engValue, koValue);
};

const makeData = (word) => {
  let newData = callNewTag("li", "voca_item");
  let span = callNewTag("span", "letter");
  addClassName(span, "english");
  span.innerText = word._eng;
  let span2 = callNewTag("span", "letter");
  addClassName(span2, "korean");
  span2.innerText = word._ko;
  let icon = callNewTag("a", "trash_icon");
  let icon_svg = callNewTag("i", "far");
  addClassName(icon_svg, "fa-trash-alt");
  icon.append(icon_svg);
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

const addNewWord = () => {
  const word = generateWord();
  wordList.push(word);
  saveLocalStorage(wordList);
  clearInput();
  const data = makeData(word);
  pushList(data);
  console.log(word.eng);

  //로컬스토리지에 담기
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
//inputs.addEventListener("keypress", inputListener);
vocaList.addEventListener("click", deleteWord);
