function initLightbox(container) {
  const existing = document.getElementById("lightbox");
  if (existing) existing.remove();

  const el = document.createElement("div");
  el.className = "lightbox";
  el.id = "lightbox";
  el.innerHTML = `
    <button class="lightbox__close" id="lightbox-close">✕ Fechar</button>
    <img class="lightbox__img" id="lightbox-img" src="" alt=""/>
  `;
  document.body.appendChild(el);

  const lightboxImg = document.getElementById("lightbox-img");

  container.querySelectorAll("[data-lightbox]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      lightboxImg.src = trigger.dataset.lightbox;
      el.classList.add("is-open");
    });
  });

  document.getElementById("lightbox-close").addEventListener("click", () => {
    el.classList.remove("is-open");
  });

  el.addEventListener("click", (e) => {
    if (e.target === el) el.classList.remove("is-open");
  });

  document.addEventListener("keydown", function escHandler(e) {
    if (e.key === "Escape") {
      el.classList.remove("is-open");
      document.removeEventListener("keydown", escHandler);
    }
  });
}

window.initLightbox = initLightbox;
