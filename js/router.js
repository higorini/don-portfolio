const views = Array.from(document.querySelectorAll("[data-view]"));
history.scrollRestoration = "manual";
let isPopState = false;
let activeRevealObserver = null;

function applyCursorToNewElements() {
  if (window.applyCursorHover) {
    window.applyCursorHover(document.querySelectorAll("a, button"));
  }
}

function activateView(viewName) {
  const current = views.find((v) => v.classList.contains("is-active"));
  const target = document.querySelector(`[data-view="${viewName}"]`);

  if (!target || current === target) return;

  if (!current) {
    target.classList.add("is-active");
    return;
  }

  current.classList.add("is-leaving");
  current.classList.remove("is-active");

  setTimeout(() => {
    current.classList.remove("is-leaving");
  }, 400);

  target.classList.add("is-active");
}

function getSlugFromPath(pathname) {
  return pathname.replace(/^\/projetos\//, "");
}

function renderProjectDetail(slug) {
  const container = document.getElementById("project-detail");
  if (!container) return;

  const list = Array.isArray(window.projects) ? window.projects : [];
  const currentIndex = list.findIndex((p) => p.slug === slug);
  const project = list[currentIndex];

  if (!project) {
    container.innerHTML = `
      <section class="project-detail">
        <div class="section-container">
          <h2 style="font-family:var(--font-heading);color:var(--text);margin-bottom:16px;">Projeto não encontrado</h2>
          <p style="color:var(--text-muted);margin-bottom:32px;">O link pode estar incorreto ou o projeto ainda não foi publicado.</p>
          <a href="/" data-link class="btn btn--outline">← Voltar</a>
        </div>
      </section>
    `;
    return;
  }

  const prevProject = currentIndex > 0 ? list[currentIndex - 1] : null;
  const nextProject = list[currentIndex + 1] || null;

  const screenshotsHtml = project.images?.screenshots?.length
    ? `
    <section class="project-screenshots">
      <div class="section-container">
        <div class="project-screenshots__header">
          <div>
            <div class="project-section-label">Interface</div>
            <h2 class="project-screenshots__title">Capturas de Tela</h2>
          </div>
        </div>
        <div class="project-screenshots__hero" data-lightbox="${project.images.screenshots[0].src}">
          <img src="${project.images.screenshots[0].src}" alt="${project.images.screenshots[0].caption}"/>
          <span class="project-screenshots__hero-label">${project.images.screenshots[0].caption}</span>
        </div>
        <div class="project-screenshots__grid">
          ${project.images.screenshots
            .slice(1)
            .map(
              (s) => `
            <div class="project-screenshots__thumb" data-lightbox="${s.src}">
              <img src="${s.src}" alt="${s.caption}"/>
              <div class="project-screenshots__thumb-caption">${s.caption}</div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `
    : "";

  const challengesHtml = project.challenges?.length
    ? `
    <section class="project-challenges">
      <div class="section-container">
        <div class="project-section-label">Desafios & Soluções</div>
        <div class="project-challenges__grid">
          ${project.challenges
            .map(
              (c) => `
            <div class="challenge-card challenge-card--${c.type}">
              <div class="challenge-card__icon">${c.icon}</div>
              <div class="challenge-card__type">${c.type === "problem" ? "Problema" : "Solução"}</div>
              <div class="challenge-card__title">${c.title}</div>
              <div class="challenge-card__desc">${c.desc}</div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `
    : "";

  const metricsHtml = project.metrics?.length
    ? `
    <section class="project-metrics">
      <div class="section-container">
        <div class="project-section-label">Métricas</div>
        <div class="project-metrics__grid">
          ${project.metrics
            .map(
              (m) => `
            <div class="metric-block">
              <div class="metric-block__value" style="color:${m.color}">
                ${m.value}<span class="metric-block__unit">${m.unit}</span>
              </div>
              <div class="metric-block__label">${m.label}</div>
              <div class="metric-block__sub">${m.sub}</div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `
    : "";

  const nextHtml =
    prevProject || nextProject
      ? `
    <section class="project-next">
      <div class="section-container">
        <div class="project-next__nav">
          ${
            prevProject
              ? `
            <a href="/projetos/${prevProject.slug}" data-link class="project-next__item project-next__item--prev">
              <span class="project-next__dir">← Projeto Anterior</span>
              <span class="project-next__name">${prevProject.name}</span>
              <span class="project-next__arrow">←</span>
            </a>
          `
              : `<div></div>`
          }
          ${
            nextProject
              ? `
            <a href="/projetos/${nextProject.slug}" data-link class="project-next__item project-next__item--next">
              <span class="project-next__dir">Próximo Projeto →</span>
              <span class="project-next__name">${nextProject.name}</span>
              <span class="project-next__arrow">→</span>
            </a>
          `
              : `<div></div>`
          }
        </div>
      </div>
    </section>
  `
      : "";

  container.innerHTML = `
    <div class="project-page">

      <section class="project-hero">
        <div class="project-hero__bg">
          ${project.images?.hero ? `<img src="${project.images.hero}" alt="${project.name}"/>` : ""}
        </div>
        <div class="project-hero__grid"></div>
        <div class="project-hero__content">
          <div class="project-hero__breadcrumb">
            <a href="/" data-link>Portfolio</a>
            <span>›</span>
            <a href="/projetos" data-link>Projetos</a>
            <span>›</span>
            <span style="color:var(--text)">${project.name}</span>
          </div>
          ${
            project.status === "production"
              ? `
            <div class="project-hero__status">
              <div class="project-hero__status-dot"></div>
              Em produção ativa
            </div>
          `
              : ""
          }
          <div class="project-hero__category">ERP · Full Stack · Real-time</div>
          <h1 class="project-hero__title">${project.name}</h1>
          <p class="project-hero__tagline">${project.description}</p>
          <div class="project-hero__meta">
            ${
              project.role
                ? `
              <div>
                <div class="project-hero__meta-label">Função</div>
                <div class="project-hero__meta-value">${project.role}</div>
              </div>
            `
                : ""
            }
            ${
              project.stack
                ? `
              <div>
                <div class="project-hero__meta-label">Stack Principal</div>
                <div class="project-hero__meta-value">${project.stack.slice(0, 3).join(" · ")}</div>
              </div>
            `
                : ""
            }
            ${
              project.status
                ? `
              <div>
                <div class="project-hero__meta-label">Status</div>
                <div class="project-hero__meta-value" style="color:#27ae60">Produção Ativa</div>
              </div>
            `
                : ""
            }
            ${
              project.users
                ? `
              <div>
                <div class="project-hero__meta-label">Usuários Ativos</div>
                <div class="project-hero__meta-value">${project.users}</div>
              </div>
            `
                : ""
            }
          </div>
        </div>
      </section>

      <section class="project-overview">
        <div class="section-container">
          <div class="project-overview__grid">
            <div class="project-overview__text">
              <div class="project-section-label">Visão Geral</div>
              <h2 class="project-overview__title">Um ERP construído para <em>resistir</em> sob carga real</h2>
              ${(project.overview || []).map((p) => `<p>${p}</p>`).join("")}
            </div>
            <div class="project-sidebar">
              <div class="project-sidebar__card">
                <div class="project-sidebar__label">Usuários Simultâneos</div>
                <div class="project-sidebar__value project-sidebar__value--highlight">${project.users || project.clients || "—"}</div>
              </div>
              <div class="project-sidebar__card">
                <div class="project-sidebar__label">Stack Completa</div>
                <div class="project-sidebar__tags">
                  ${(project.stack || []).map((t) => `<span class="tag">${t}</span>`).join("")}
                </div>
              </div>
              ${
                project.team
                  ? `
                <div class="project-sidebar__card">
                  <div class="project-sidebar__label">Colaboradores</div>
                  <div class="project-sidebar__value">${project.team.join(" · ")}</div>
                </div>
              `
                  : ""
              }
              ${
                project.deploy
                  ? `
                <div class="project-sidebar__card">
                  <div class="project-sidebar__label">Deploy</div>
                  <div class="project-sidebar__value">${project.deploy}</div>
                </div>
              `
                  : ""
              }
            </div>
          </div>
        </div>
      </section>

      ${screenshotsHtml}

      <section class="project-architecture">
        <div class="section-container">
          <div class="project-architecture__grid">
            <div class="project-architecture__text">
              <div class="project-section-label">Arquitetura</div>
              <h2 class="project-architecture__title">Decisões que importam em produção</h2>
              <p>O sistema usa uma arquitetura <strong>fullstack unificada no Next.js 15</strong>, com App Router e Server Components para renderização híbrida onde performance é crítica.</p>
              <p>O estado global é gerenciado pelo <strong>Zustand</strong> — escolha deliberada sobre Redux pela leveza e pelo modelo mental mais limpo em sistemas com muitas slices de estado independentes.</p>
              <p>A camada real-time via <strong>Socket.IO</strong> gerencia notificações, atualizações de status e sincronização entre usuários sem polling — fundamental quando você tem 3K conexões ativas.</p>
            </div>
            <div class="arch-diagram">
              <div class="arch-layer arch-layer--frontend">
                <div class="arch-layer__label">Frontend</div>
                <div class="arch-layer__items">
                  <span class="arch-layer__item">Next.js 15</span>
                  <span class="arch-layer__item">React 19</span>
                  <span class="arch-layer__item">App Router</span>
                  <span class="arch-layer__item">Server Components</span>
                </div>
              </div>
              <div class="arch-arrow">↕</div>
              <div class="arch-layer arch-layer--state">
                <div class="arch-layer__label">State Management</div>
                <div class="arch-layer__items">
                  <span class="arch-layer__item">Zustand</span>
                  <span class="arch-layer__item">React Query</span>
                  <span class="arch-layer__item">Context API</span>
                </div>
              </div>
              <div class="arch-arrow">↕</div>
              <div class="arch-layer arch-layer--realtime">
                <div class="arch-layer__label">Real-time</div>
                <div class="arch-layer__items">
                  <span class="arch-layer__item">Socket.IO</span>
                  <span class="arch-layer__item">WebSockets</span>
                  <span class="arch-layer__item">Eventos</span>
                </div>
              </div>
              <div class="arch-arrow">↕</div>
              <div class="arch-layer arch-layer--backend">
                <div class="arch-layer__label">Backend / API</div>
                <div class="arch-layer__items">
                  <span class="arch-layer__item">Node.js</span>
                  <span class="arch-layer__item">API Routes</span>
                  <span class="arch-layer__item">Auth JWT</span>
                </div>
              </div>
              <div class="arch-arrow">↕</div>
              <div class="arch-layer arch-layer--db">
                <div class="arch-layer__label">Database</div>
                <div class="arch-layer__items">
                  <span class="arch-layer__item">MongoDB</span>
                  <span class="arch-layer__item">Mongoose</span>
                  <span class="arch-layer__item">Índices</span>
                </div>
              </div>
              <div class="arch-arrow">↕</div>
              <div class="arch-layer arch-layer--infra">
                <div class="arch-layer__label">Infraestrutura</div>
                <div class="arch-layer__items">
                  <span class="arch-layer__item">VPS</span>
                  <span class="arch-layer__item">PM2</span>
                  <span class="arch-layer__item">Nginx</span>
                  <span class="arch-layer__item">GitHub Actions</span>
                  <span class="arch-layer__item">Rollback</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${challengesHtml}
      ${metricsHtml}
      ${nextHtml}

    </div>
  `;

  setTimeout(() => {
    if (activeRevealObserver) {
      activeRevealObserver.disconnect();
      activeRevealObserver = null;
    }

    const revealEls = container.querySelectorAll(`
    .project-overview__grid,
    .project-screenshots__header,
    .project-screenshots__hero,
    .project-screenshots__grid,
    .project-architecture__grid,
    .project-section-label,
    .project-challenges__grid,
    .challenge-card,
    .project-metrics__grid,
    .metric-block,
    .project-next__nav
  `);

    revealEls.forEach((el) => el.classList.add("reveal"));

    activeRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), 80);
            activeRevealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    revealEls.forEach((el) => activeRevealObserver.observe(el));
  }, 450);

  if (typeof window.initLightbox === "function") {
    window.initLightbox(container);
  }

  applyCursorToNewElements();
}

function scrollToSectionFromHash(hash) {
  if (!hash || hash === "#") return;
  requestAnimationFrame(() => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function renderRoute() {
  const { pathname, hash } = window.location;

  if (pathname === "/") {
    activateView("home");

    if (isPopState) {
      const savedScroll = history.state?.scrollY;
      if (savedScroll !== undefined) {
        setTimeout(() => window.scrollTo(0, savedScroll), 420);
      }
    } else {
      window.scrollTo(0, 0);
      scrollToSectionFromHash(hash);
    }

    isPopState = false;
    return;
  }

  if (pathname === "/projetos") {
    activateView("projects-list-view");
    if (!isPopState && typeof window.renderProjectsPage === "function") {
      window.renderProjectsPage();
    } else if (isPopState) {
      const savedScroll = history.state?.scrollY;
      if (typeof window.renderProjectsPage === "function") {
        window.renderProjectsPage();
      }
      if (savedScroll !== undefined) {
        setTimeout(() => window.scrollTo(0, savedScroll), 420);
      }
    }
    isPopState = false;
    return;
  }

  if (pathname.startsWith("/projetos/")) {
    const slug = getSlugFromPath(pathname);
    renderProjectDetail(slug);
    activateView("project");
    if (!isPopState) window.scrollTo(0, 0);
    isPopState = false;
    return;
  }

  isPopState = false;
  history.replaceState({}, "", "/");
  activateView("home");
}

function navigateTo(path) {
  if (path === window.location.pathname + window.location.hash) return;

  history.replaceState(
    { scrollY: window.scrollY },
    "",
    window.location.pathname,
  );

  history.pushState({}, "", path);
  renderRoute();
}

document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-link]");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href) return;

  if (href.startsWith("http")) return;
  if (href.startsWith("#")) return;

  e.preventDefault();

  if (link.dataset.back === "true") {
    history.back();
    return;
  }

  if (link.classList.contains("nav__logo")) {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  }

  navigateTo(href);
});

window.addEventListener("popstate", () => {
  isPopState = true;
  renderRoute();
});

renderRoute();
