const header = document.querySelector("[data-header]");
const filters = document.querySelectorAll(".filter");
const dishes = document.querySelectorAll(".dish");

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

function filterDishes(category) {
  dishes.forEach((dish) => {
    const shouldShow = category === "all" || dish.dataset.category === category;
    dish.classList.toggle("is-hidden", !shouldShow);
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((filter) => {
      const isActive = filter === button;
      filter.classList.toggle("is-active", isActive);
      filter.setAttribute("aria-selected", String(isActive));
    });
    filterDishes(button.dataset.filter);
  });
});

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
