import Word from "./word.js";

const plusBtn = document.querySelector(".main_add_btn");
const modalSection = document.querySelector(".modal_section");
const closeBtn = document.querySelector(".close");
const content = document.querySelector(".content");
const modalAddBtn = document.querySelector(".modal_add_btn");
const engInput = document.querySelector("#eng_input");
const koInput = document.querySelector("#ko_input");

const openModal = () => {
  modalSection.classList.remove("hide");
};

const closeModal = () => {
  modalSection.classList.add("hide");
};

plusBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

let word;
const generateWord = () => {
  const engValue = engInput.value;
  const koValue = koInput.value;
  return new Word(engValue, koValue);
};

const addNewWord = () => {
  word = generateWord();
  console.log(word);
};

modalAddBtn.addEventListener("click", addNewWord);
//inputs.addEventListener("keypress", inputListener);
