const projects = [
  {
    id: 1,
    number: "01",
    name: "Project 1",
    description: "Description of Project 1",
    tags: ["JavaScript", "HTML", "CSS"],
    slug: "project-1",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    name: "Project 2",
    description: "Description of Project 2",
    tags: ["React", "Node.js", "MongoDB"],
    slug: "project-2",
    featured: true,
  },
  {
    id: 3,
    number: "03",
    name: "Project 3",
    description: "Description of Project 3",
    tags: ["Python", "Django", "PostgreSQL"],
    slug: "project-3",
    featured: true,
  },
  {
    id: 4,
    number: "04",
    name: "Project 4",
    description: "Description of Project 4",
    tags: ["Java", "Spring Boot", "MySQL"],
    slug: "project-4",
    featured: true,
  },
  {
    id: 5,
    number: "05",
    name: "Project 5",
    description: "Description of Project 5",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    slug: "project-5",
    featured: false,
  },
  {
    id: 6,
    number: "06",
    name: "Project 6",
    description: "Description of Project 6",
    tags: ["Node.js", "Express", "JWT"],
    slug: "project-6",
    featured: false,
  },
  {
    id: 7,
    number: "07",
    name: "Project 7",
    description: "Description of Project 7",
    tags: ["MongoDB", "Mongoose", "Validation"],
    slug: "project-7",
    featured: false,
  },
  {
    id: 8,
    number: "08",
    name: "Project 8",
    description: "Description of Project 8",
    tags: ["PostgreSQL", "SQL", "Migrations"],
    slug: "project-8",
    featured: false,
  },
  {
    id: 9,
    number: "09",
    name: "Project 9",
    description: "Description of Project 9",
    tags: ["Nginx", "PM2", "Linux"],
    slug: "project-9",
    featured: false,
  },
  {
    id: 10,
    number: "10",
    name: "Project 10",
    description: "Description of Project 10",
    tags: ["CI/CD", "GitHub Actions", "Deploy"],
    slug: "project-10",
    featured: false,
  },
  {
    id: 11,
    number: "11",
    name: "Project 11",
    description: "Description of Project 11",
    tags: ["Figma", "Design System", "UI"],
    slug: "project-11",
    featured: false,
  },
  {
    id: 12,
    number: "12",
    name: "Project 12",
    description: "Description of Project 12",
    tags: ["Security", "RBAC", "Rate Limiting"],
    slug: "project-12",
    featured: false,
  },
];

window.projects = projects;

function applyCursorToNewElements() {
  if (window.applyCursorHover) {
    window.applyCursorHover(document.querySelectorAll("a, button"));
  }
}

function getAllTags() {
  const tagSet = new Set();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

function projectCardHtml(project) {
  const tagsHtml = (project.tags || [])
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  return `
    <a href="/projetos/${project.slug}" data-link class="project-item">
      <span class="project-item__number">${project.number}</span>
      <div class="project-item__info">
        <h3 class="project-item__name">${project.name}</h3>
        <p class="project-item__description">${project.description}</p>
        <div class="project-item__tags">${tagsHtml}</div>
      </div>
      <span class="project-item__arrow" aria-hidden="true">→</span>
    </a>
  `;
}

function placeholderCardHtml(number) {
  return `
    <a href="/#contact" data-link class="project-item project-item--placeholder">
      <span class="project-item__number">${number}</span>
      <div class="project-item__info">
        <h3 class="project-item__name">O Seu Projeto</h3>
        <p class="project-item__description">
          Este lugar está reservado. Vamos construir algo que vale a pena colocar aqui.
        </p>
        <div class="project-item__tags">
          <span class="tag">Em aberto</span>
          <span class="tag">Vamos conversar</span>
        </div>
      </div>
      <span class="project-item__arrow" aria-hidden="true">→</span>
    </a>
  `;
}

function emptyStateHtml(tag) {
  return `
    <div class="projects-page__empty">
      <span class="projects-page__empty-icon">◈</span>
      <p class="projects-page__empty-title">Nenhum projeto com a tag <em>${tag}</em></p>
      <p class="projects-page__empty-sub">Tenta outra categoria ou vê todos os projetos.</p>
    </div>
  `;
}

function animateCards(container, startIndex = 0) {
  const cards = container.querySelectorAll(".project-item");
  cards.forEach((card, i) => {
    if (i < startIndex) return;
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = `opacity 0.5s ease ${(i - startIndex) * 0.07}s, transform 0.5s ease ${(i - startIndex) * 0.07}s`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
    });
  });
}

function renderProjects() {
  const projectsList = document.getElementById("projects-list");
  if (!projectsList) return;

  projectsList.innerHTML = "";

  const featuredProjects = projects.filter((project) => project.featured);

  featuredProjects.forEach((project) => {
    const projectItem = document.createElement("a");
    projectItem.classList.add("project-item");
    projectItem.href = `/projetos/${project.slug}`;
    projectItem.setAttribute("data-link", "");

    projectItem.innerHTML = `
      <span class="project-item__number">${project.number}</span>
      <div class="project-item__info">
        <h3 class="project-item__name">${project.name}</h3>
        <p class="project-item__description">${project.description}</p>
        <div class="project-item__tags">
          ${(project.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      <span class="project-item__arrow" aria-hidden="true">→</span>
    `;

    projectsList.appendChild(projectItem);
  });

  applyCursorToNewElements();
}

function renderProjectsPage() {
  const container = document.getElementById("projects-page");
  if (!container) return;

  window.scrollTo(0, 0);

  const allProjects = window.projects || [];
  const INITIAL_LIMIT = 6;
  let currentLimit = INITIAL_LIMIT;
  let activeTag = null;

  const allTags = getAllTags();

  const tagsBarHtml = `
    <div class="projects-page__filters" id="tag-filters">
      <button class="projects-page__filter-tag projects-page__filter-tag--active" data-tag="all">
        Todos
      </button>
      ${allTags
        .map(
          (t) => `
        <button class="projects-page__filter-tag" data-tag="${t}">${t}</button>
      `,
        )
        .join("")}
    </div>
  `;

  function getFilteredProjects() {
    if (!activeTag) return allProjects;
    return allProjects.filter((p) => p.tags.includes(activeTag));
  }

  function getListHtml(limit) {
    const filtered = getFilteredProjects();
    const visible = filtered.slice(0, limit);
    const hasMore = filtered.length > limit;
    const nextNumber = String(allProjects.length + 1).padStart(2, "0");

    if (filtered.length === 0) {
      return emptyStateHtml(activeTag);
    }

    return `
      ${visible.map(projectCardHtml).join("")}
      ${
        hasMore
          ? `<div class="projects-page__load-more">
            <button class="btn btn--outline" id="load-more-btn">Ver mais projetos</button>
           </div>`
          : !activeTag
            ? placeholderCardHtml(nextNumber)
            : ""
      }
    `;
  }

  function updateCount() {
    const countEl = document.getElementById("projects-count");
    if (!countEl) return;
    const filtered = getFilteredProjects();
    const total = allProjects.length;
    countEl.innerHTML = activeTag
      ? `<span>${filtered.length}</span> de ${total} projetos`
      : `<span>${total}</span> projetos`;
  }

  function renderList(animate = true, startIndex = 0) {
    const list = document.getElementById("all-projects-list");
    if (!list) return;
    currentLimit = INITIAL_LIMIT;
    list.innerHTML = getListHtml(currentLimit);
    updateCount();
    if (animate) animateCards(list, startIndex);
    applyCursorToNewElements();
  }

  container.innerHTML = `
    <div class="projects-page">
      <div class="projects-page__hero">
        <div class="section-container">
          <a href="/" data-link data-back="true" class="projects-page__back">
            ← Voltar ao Portfolio
          </a>
          <div class="projects-page__hero-content">
            <span class="projects-page__eyebrow">O que eu entreguei</span>
            <h1 class="projects-page__title">Todos os<br/>Projetos</h1>
            <p class="projects-page__sub">Uma visão completa de sistemas, interfaces e infraestrutura — do conceito à produção.</p>
          </div>
        </div>
      </div>

      <div class="projects-page__list">
        <div class="section-container">
          ${tagsBarHtml}
          <div class="projects-page__count" id="projects-count">
            <span>${allProjects.length}</span> projetos
          </div>
          <div id="all-projects-list">
            ${getListHtml(currentLimit)}
          </div>
        </div>
      </div>
    </div>
  `;

  const list = document.getElementById("all-projects-list");
  animateCards(list, 0);
  applyCursorToNewElements();

  container.addEventListener("click", (e) => {
    const filterBtn = e.target.closest("[data-tag]");
    if (filterBtn) {
      const tag = filterBtn.dataset.tag;
      activeTag = tag === "all" ? null : tag;

      container
        .querySelectorAll(".projects-page__filter-tag")
        .forEach((btn) => {
          btn.classList.toggle(
            "projects-page__filter-tag--active",
            btn.dataset.tag === tag,
          );
        });

      renderList(true, 0);
      return;
    }

    if (e.target.id === "load-more-btn") {
      const prevLimit = currentLimit;
      currentLimit = getFilteredProjects().length;
      const listEl = document.getElementById("all-projects-list");

      const loadMoreDiv = container.querySelector(".projects-page__load-more");
      if (loadMoreDiv) {
        loadMoreDiv.style.opacity = "0";
        loadMoreDiv.style.transition = "opacity 0.3s";
      }

      setTimeout(() => {
        listEl.innerHTML = getListHtml(currentLimit);
        animateCards(listEl, prevLimit);
        applyCursorToNewElements();
      }, 300);
    }
  });
}

window.renderProjectsPage = renderProjectsPage;

renderProjects();
