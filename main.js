const plusBtn = document.querySelector(".main_add_btn");
const modalSection = document.querySelector(".modal_section");

const modalOpen = () => {
  modalSection.classList.remove("hide");
};

plusBtn.addEventListener("click", modalOpen);
