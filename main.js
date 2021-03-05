import { createTag, addClassName, callNewTag } from "./tagFunction.js";
import Word from "./word.js";

const plusBtn = document.querySelector(".voca__add-button");
const modalSection = document.querySelector("section.modal");
const closeBtn = document.querySelector(".close");
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
  const li = document.createElement("li");
  li.setAttribute("class", "voca__list-item");
  li.innerHTML = `<span class="voca__english">${word._eng}</span>
  <span class="voca__korean">${word._ko}</span>
  <a class="trash-icon"><i class="far fa-trash-alt"></i></a>
  `;
  return li;
};

const pushList = (data) => {
  vocaList.appendChild(data);
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
  const trash = e.target;
  const target = trash.parentNode.parentNode; // li
  console.log(target);
  vocaList.removeChild(target);
  deleteInLocalStorage(target);
};

loadLocalStorage();
modalAddBtn.addEventListener("click", addNewWord);
vocaList.addEventListener("click", deleteWord);
