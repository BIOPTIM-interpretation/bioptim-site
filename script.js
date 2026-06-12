const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".accordion-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordion-item");
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelectorAll("form[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector("[data-form-message]");
    if (message) {
      message.textContent = "Merci, votre demande a bien ete prise en compte.";
    }
  });
});
const searchInput = document.getElementById("searchAnalysis");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    document.querySelectorAll(".analysis-card").forEach(card => {

      const keywords = card.dataset.search.toLowerCase();

      if (keywords.includes(value)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });

  });
}