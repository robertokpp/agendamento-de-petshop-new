const btnOpen = document.querySelector("#btn-ns");
const modal = document.querySelector("dialog");
const btnClose = document.querySelector("#closeDialog");

btnOpen.addEventListener("click", () => {
  modal.showModal();
});

btnClose.addEventListener("click", () => {
  modal.close();
});
