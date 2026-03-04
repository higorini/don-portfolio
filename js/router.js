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
  const nextProject = project.nextProject || null;

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
          ${project.category ? `<div class="project-hero__category">${project.category}</div>` : ""}
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
              project.status === "production"
                ? `
              <div>
                <div class="project-hero__meta-label">Status</div>
                <div class="project-hero__meta-value" style="color:#27ae60">Produção Ativa</div>
              </div>
            `
                : project.status === "development"
                  ? `
              <div>
                <div class="project-hero__meta-label">Status</div>
                <div class="project-hero__meta-value" style="color:var(--gold)">Em Desenvolvimento</div>
              </div>
            `
                  : ""
            }
            ${
              project.users
                ? `
              <div>
                ${project.usersLabel ? `<div class="project-hero__meta-label">${project.usersLabel}</div>` : ""}
                <div class="project-hero__meta-value">${project.users}</div>
              </div>
            `
                : ""
            }
          </div>
          ${
            project.github || project.link
              ? `
            <div class="project-hero__actions">
              ${
                project.github === "restrito"
                  ? `<span class="project-hero__action-btn--restricted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Repositório Privado
                </span>`
                  : project.github
                    ? `<a href="${project.github}" class="btn btn--outline" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  Ver Código
                </a>`
                    : ""
              }
              ${
                project.link === "restrito"
                  ? `<span class="project-hero__action-btn--restricted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Deploy Privado
                </span>`
                  : project.link
                    ? `<a href="${project.link}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                  Ver ao Vivo
                </a>`
                    : ""
              }
            </div>
          `
              : ""
          }
        </div>
      </section>

      <section class="project-overview">
        <div class="section-container">
          <div class="project-overview__grid">
            <div class="project-overview__text">
              <div class="project-section-label">Visão Geral</div>
              ${project.overviewTitle ? `<h2 class="project-overview__title">${project.overviewTitle}</h2>` : ""}
              ${(project.overview || []).map((p) => `<p>${p}</p>`).join("")}
            </div>
            <div class="project-sidebar">
              ${
                project.users
                  ? `
              <div class="project-sidebar__card">
                ${project.usersLabel ? `<div class="project-sidebar__label">${project.usersLabel}</div>` : ""}
                <div class="project-sidebar__value project-sidebar__value--highlight">${project.users}</div>
              </div>
            `
                  : ""
              }
              <div class="project-sidebar__card">
                <div class="project-sidebar__label">Stack Completa</div>
                <div class="project-sidebar__tags">
                  ${(project.stack || []).map((t) => `<span class="tag">${t}</span>`).join("")}
                </div>
              </div>
              ${
                project.team?.length
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

      ${
        project.archLayers?.length
          ? `
      <section class="project-architecture">
        <div class="section-container">
          <div class="project-architecture__grid">
            <div class="project-architecture__text">
              <div class="project-section-label">Arquitetura</div>
              <h2 class="project-architecture__title">${project.archTitle || ""}</h2>
              ${(project.archText || []).map((p) => `<p>${p}</p>`).join("")}
            </div>
            <div class="arch-diagram">
              ${project.archLayers
                .map(
                  (layer, i) => `
              <div class="arch-layer arch-layer--${layer.type}">
                <div class="arch-layer__label">${layer.label}</div>
                <div class="arch-layer__items">
                  ${layer.items.map((item) => `<span class="arch-layer__item">${item}</span>`).join("")}
                </div>
              </div>
              ${i < project.archLayers.length - 1 ? `<div class="arch-arrow">↕</div>` : ""}`,
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `
          : ""
      }

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
  if (href.startsWith("#")) {
    e.preventDefault();
    if (window.location.pathname === "/") {
      scrollToSectionFromHash(href);
    } else {
      navigateTo("/" + href);
    }
    return;
  }

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
