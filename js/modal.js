(() => {
  const modal = document.querySelector("[data-modal]");
  const backdrop = document.querySelector(".backdrop");

  document.querySelector("[data-modal-open]").addEventListener("click", toggleModal);
  document.querySelector("[data-modal-close]").addEventListener("click", toggleModal);
  backdrop.addEventListener("click", closeModalOnClick);
  document.addEventListener("keydown", closeModalOnEsc);

  function toggleModal() {
    modal.classList.toggle("is-hidden");
  }

  function closeModalOnClick(event) {
    if (event.target === backdrop) closeModal();
  }

  function closeModalOnEsc(event) {
    if (event.key === "Escape") closeModal();
  }

  function closeModal() {
    modal.classList.add("is-hidden");
  }
})();

