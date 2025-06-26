function openModal(card) {
    document.getElementById("modal-img").src = card.dataset.img;
    document.getElementById("modal-title-en").textContent = card.dataset.titleEn;
    document.getElementById("modal-title-ja").textContent = card.dataset.titleJa;
    document.getElementById("modal-body-en").textContent = card.dataset.bodyEn;
    document.getElementById("modal-body-ja").textContent = card.dataset.bodyJa;

    const extraImagesContainer = document.getElementById("modal-extra-images");
    extraImagesContainer.innerHTML = ""; // clear previous images

    if (card.dataset.extraImgs) {
      const urls = card.dataset.extraImgs.split(',');
      urls.forEach(url => {
        const img = document.createElement("img");
        img.src = url.trim();
        img.alt = "Additional view";
        img.classList.add("extra-img");
        extraImagesContainer.appendChild(img);
      });
  }
    document.getElementById("modal").classList.remove("hidden");
  }

  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
  });
  