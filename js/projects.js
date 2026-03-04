const projects = [
  {
    id: 1,
    number: "01",
    name: "ColorMobile ERP",
    description:
      "Sistema ERP fullstack em produção com ~3.000 usuários simultâneos. Next.js 15, Socket.IO, MongoDB e CI/CD automatizado com rollback.",
    tags: [
      "Next.js",
      "React",
      "Socket.IO",
      "MongoDB",
      "Node.js",
      "PM2",
      "Nginx",
      "GitHub Actions",
    ],
    slug: "colormobile-erp",
    featured: true,
    status: "production",
    role: "Engenheiro Full Stack",
    team: ["Pedro", "Higor"],
    deploy: "VPS · CI/CD com Rollback Automático",
    users: "~3.000 simultâneos",
    images: {
      hero: "/assets/images/projects/colormobile/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/colormobile/clientes.jpg",
          caption: "Gestão de Clientes",
        },
        {
          src: "/assets/images/projects/colormobile/producao.jpg",
          caption: "Módulo de Produção",
        },
        {
          src: "/assets/images/projects/colormobile/auditoria.jpg",
          caption: "Logs de Auditoria",
        },
      ],
    },
    overview: [
      "O ColorMobile ERP nasceu da necessidade de um sistema que não apenas funcionasse, mas que escalasse. Com cerca de 3.000 usuários conectados simultaneamente, cada decisão arquitetural tem peso real — não existe margem para gambiarra em produção.",
      "A aplicação cobre todo o ciclo de gestão empresarial: cadastro de usuários com importação/exportação CSV em batch, notificações em tempo real via Socket.IO, controle de roles centralizado e um sistema de autenticação consolidado após refatoração completa.",
      "A infraestrutura foi reconstruída do zero após um incidente de segurança envolvendo malware de mineração de criptomoeda em VPS comprometidas — o que forçou uma visão mais madura de hardening, monitoramento e resposta a incidentes.",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "Zustand",
      "Socket.IO",
      "MongoDB",
      "Node.js",
      "PM2",
      "Nginx",
      "GitHub Actions",
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Servidor comprometido por malware",
        desc: "VPS infectada com software de mineração de criptomoeda, consumindo 100% de CPU e comprometendo a disponibilidade do sistema para todos os clientes em produção.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Reconstrução com hardening completo",
        desc: "Rebuild completo da VPS com configuração de segurança em camadas: firewall rigoroso, autenticação SSH por chave, monitoramento proativo e processo documentado de resposta a incidentes.",
      },
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-repeat2-icon lucide-repeat-2"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/></svg>`,
        title: "Deploy manual frágil e sem rollback",
        desc: "Processo de deploy artesanal sem automação, sem rollback e sem garantias — qualquer push com bug derrubava o sistema para os 3.000 usuários ativos sem forma rápida de reverter.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
        title: "CI/CD com rollback automático",
        desc: "Pipeline via GitHub Actions com build automatizado, testes, deploy zero-downtime via PM2 e rollback automático em caso de falha — do push ao ar em menos de 3 minutos.",
      },
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-bar-increasing-icon lucide-chart-bar-increasing"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11h8"/><path d="M7 16h12"/><path d="M7 6h3"/></svg>`,
        title: "Importação de ~3K registros sem validação",
        desc: "Necessidade de importar e exportar grandes volumes de dados de clientes via CSV sem travar a UI, sem corromper dados duplicados e com feedback em tempo real.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-icon lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
        title: "Bulk operations com validação em batch",
        desc: "Sistema de import/export com parsing em streaming, validação linha-a-linha, deduplicação inteligente e operações bulk no MongoDB — processando ~3K registros sem impacto na UX.",
      },
    ],
    metrics: [
      {
        value: "~3K",
        unit: "",
        label: "Usuários Simultâneos",
        sub: "em produção ativa",
        color: "var(--gold)",
      },
      {
        value: "99",
        unit: "%",
        label: "Uptime Alvo",
        sub: "após hardening",
        color: "var(--violet-light)",
      },
      {
        value: "<3",
        unit: "min",
        label: "Tempo de Deploy",
        sub: "do push ao ar",
        color: "#27ae60",
      },
      {
        value: "0",
        unit: "",
        label: "Deploys sem Rollback",
        sub: "sempre reversível",
        color: "var(--crimson)",
      },
    ],
    nextProject: {
      name: "FacilityFlow API",
      slug: "facilityflow-api",
    },
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
          <a href="/" data-link class="projects-page__back">
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

  const filtersEl = container.querySelector("#tag-filters");
  if (filtersEl) {
    const select = document.createElement("select");
    select.className = "projects-page__filter-select";
    select.innerHTML =
      `<option value="all">Todos os projetos</option>` +
      allTags.map((t) => `<option value="${t}">${t}</option>`).join("");
    filtersEl.parentNode.insertBefore(select, filtersEl.nextSibling);

    select.addEventListener("change", () => {
      activeTag = select.value === "all" ? null : select.value;
      container.querySelectorAll(".projects-page__filter-tag").forEach((btn) => {
        btn.classList.toggle(
          "projects-page__filter-tag--active",
          btn.dataset.tag === select.value,
        );
      });
      renderList(true, 0);
    });
  }

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
