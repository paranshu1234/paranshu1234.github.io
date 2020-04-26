const openModal = [...document.querySelectorAll("[data-open]")];
const isVisible = "is-visible";

openModal.forEach(item => {
  item.addEventListener("click", () => {
    const modalid = item.dataset.open;
    let test = document.getElementById(modalid);
    let result = test.children;
    document.getElementById(modalid).classList.add(isVisible);
    result[0].classList.add(isVisible);
  });
});

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    document
      .querySelector(".dialog-modal.is-visible")
      .classList.remove(isVisible);
  }
});

const closeModal = [...document.querySelectorAll("[data-close]")];

closeModal.forEach(item => {
  item.addEventListener("click", () => {
    item.parentElement.parentElement.parentElement.classList.remove(isVisible);
    item.parentElement.parentElement.classList.remove(isVisible);
  });
});
