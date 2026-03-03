const views = Array.from(document.querySelectorAll("[data-view]"));
history.scrollRestoration = "manual";
let isPopState = false;

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
  const project = list.find((p) => p.slug === slug);

  if (!project) {
    container.innerHTML = `
      <section class="project-detail">
        <div class="section-container">
          <h2 class="project-detail__title">Projeto não encontrado</h2>
          <p class="project-detail__desc">O link pode estar incorreto ou o projeto ainda não foi publicado.</p>
          <a href="/" data-link data-back="true" class="btn btn--outline">Voltar</a>
        </div>
      </section>
    `;
    return;
  }

  const tagsHtml = (project.tags || [])
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  container.innerHTML = `
    <section class="project-detail">
      <div class="section-container">
        <div class="section__header">
          <span class="section__number">${project.number || "—"}</span>
          <h2 class="section__title">${project.name}</h2>
          <div class="section__line"></div>
        </div>
        <p class="project-detail__desc">${project.description || ""}</p>
        <div class="project-detail__tags">${tagsHtml}</div>
        <div class="project-detail__actions">
          <a href="/" data-link data-back="true" class="btn btn--outline">Voltar ao portfolio</a>
          ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Ver online</a>` : ""}
          ${project.repo ? `<a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="btn btn--outline">Repositório</a>` : ""}
        </div>
      </div>
    </section>
  `;
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

  navigateTo(href);
});

window.addEventListener("popstate", () => {
  isPopState = true;
  renderRoute();
});

renderRoute();
