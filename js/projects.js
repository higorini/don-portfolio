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
];

function renderProjects() {
  const projectsList = document.getElementById("projects-list");

  if (!projectsList) return;

  projectsList.innerHTML = "";

  const featuredProjects = projects.filter((project) => project.featured);

  featuredProjects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");

    projectItem.innerHTML = `
      <span class="project-item__number">${project.number}</span>
      <div class="project-item__info">
        <h3 class="project-item__name">${project.name}</h3>
        <p class="project-item__description">${project.description}</p>
        <div class="project-item__tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="project-item__arrow">→</div>
    `;

    projectsList.appendChild(projectItem);
  });
}

renderProjects();
