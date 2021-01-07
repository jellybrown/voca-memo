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

let word;
let data;
const generateWord = () => {
  const engValue = engInput.value;
  const koValue = koInput.value;
  return new Word(engValue, koValue);
};
const createTag = (tagName) => {
  let newTag = document.createElement(tagName);
  return newTag;
};
const addClassName = (tagName, addName) => {
  tagName.classList.add(addName);
};

const callNewTag = (tagName, addName) => {
  let newTag = createTag(tagName);
  addClassName(newTag, addName);
  return newTag;
};

const makeData = (word) => {
  //   let newData = document.createElement("li");
  //   newData.classList.add("voca_item");
  let newData = callNewTag("li", "voca_item");
  let span = document.createElement("span");
  span.classList.add("letter");
  span.classList.add("english");
  span.innerText = word._eng;
  let span2 = document.createElement("span");
  span2.classList.add("letter");
  span2.classList.add("korean");
  span2.innerText = word._ko;
  newData.append(span);
  newData.append(span2);
  return newData;
  // <a class="trash_icon">~ 도 추가하기
  // 아마 함수로 묶어야할듯
};
const pushList = (data) => {};

const addNewWord = () => {
  word = generateWord();
  data = makeData(word);
  console.log(data);
  // pushList(data);
};

modalAddBtn.addEventListener("click", addNewWord);
//inputs.addEventListener("keypress", inputListener);
