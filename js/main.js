const statProjects = document.getElementById("stat-projects");
if (statProjects && window.projects) {
  statProjects.textContent = window.projects.length + "+";
}

const statYears = document.getElementById("stat-years");
if (statYears) {
  const years = new Date().getFullYear() - 2019;
  statYears.textContent = years;
}
