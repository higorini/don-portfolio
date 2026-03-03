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

  function getListHtml(limit) {
    const visible = allProjects.slice(0, limit);
    const nextNumber = String(allProjects.length + 1).padStart(2, "0");
    const hasMore = allProjects.length > limit;

    return `
      ${visible.map(projectCardHtml).join("")}
      ${
        hasMore
          ? `<div class="projects-page__load-more">
            <button class="btn btn--outline" id="load-more-btn">Ver mais projetos</button>
           </div>`
          : placeholderCardHtml(nextNumber)
      }
    `;
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
          <div class="projects-page__count">
            <span>${allProjects.length}</span> projetos
          </div>
          <div id="all-projects-list">
            ${getListHtml(currentLimit)}
          </div>
        </div>
      </div>
    </div>
  `;

  applyCursorToNewElements();

  container.addEventListener("click", (e) => {
    if (e.target.id === "load-more-btn") {
      currentLimit = allProjects.length;
      const list = document.getElementById("all-projects-list");

      const loadMoreDiv = document.querySelector(".projects-page__load-more");
      if (loadMoreDiv) {
        loadMoreDiv.style.opacity = "0";
        loadMoreDiv.style.transition = "opacity 0.3s";
      }

      setTimeout(() => {
        list.innerHTML = getListHtml(currentLimit);

        const allCards = list.querySelectorAll(".project-item");
        allCards.forEach((card, i) => {
          if (i >= INITIAL_LIMIT) {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            card.style.transition = `opacity 0.5s ease ${(i - INITIAL_LIMIT) * 0.08}s, transform 0.5s ease ${(i - INITIAL_LIMIT) * 0.08}s`;

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              });
            });
          }
        });

        applyCursorToNewElements();
      }, 300);
    }
  });
}

window.renderProjectsPage = renderProjectsPage;

renderProjects();
