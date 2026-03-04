const navHamburger = document.querySelector(".nav__hamburger");
const navEl = document.querySelector(".nav");

if (navHamburger && navEl) {
  navHamburger.addEventListener("click", () => {
    const isOpen = navEl.classList.toggle("nav--open");
    navHamburger.setAttribute("aria-expanded", isOpen);
  });

  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navEl.classList.remove("nav--open");
      navHamburger.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    if (!navEl.contains(e.target)) {
      navEl.classList.remove("nav--open");
      navHamburger.setAttribute("aria-expanded", "false");
    }
  });
}

const statProjects = document.getElementById("stat-projects");
if (statProjects && window.projects) {
  statProjects.textContent = window.projects.length + "+";
}

const statYears = document.getElementById("stat-years");
if (statYears) {
  const years = new Date().getFullYear() - 2019;
  statYears.textContent = years;
}
