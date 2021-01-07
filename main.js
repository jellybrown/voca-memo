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

const addNewWord = () => {
  const word = generateWord();
  const data = makeData(word);
  pushList(data);
};

modalAddBtn.addEventListener("click", addNewWord);
//inputs.addEventListener("keypress", inputListener);
