function openModal(card) {
    document.getElementById("modal-img").src = card.dataset.img;
    document.getElementById("modal-title-en").textContent = card.dataset.titleEn;
    document.getElementById("modal-title-ja").textContent = card.dataset.titleJa;
    document.getElementById("modal-body-en").textContent = card.dataset.bodyEn;
    document.getElementById("modal-body-ja").textContent = card.dataset.bodyJa;
  
    document.getElementById("modal").classList.remove("hidden");
  }
  
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
  });
  