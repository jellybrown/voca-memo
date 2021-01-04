const plusBtn = document.querySelector(".main_add_btn");
const modalSection = document.querySelector(".modal_section");
const closeBtn = document.querySelector(".close");
const modalOpen = () => {
  modalSection.classList.remove("hide");
};

const closeModal = () => {
  modalSection.classList.add("hide");
};

plusBtn.addEventListener("click", modalOpen);
closeBtn.addEventListener("click", closeModal);
