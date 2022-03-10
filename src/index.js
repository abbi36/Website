function addProject(name, author, lang) {
  const project = renderProject(name, author, desc);
  const projects = document.getElementById("projects");
  projects.appendChild(project);
}

function renderProject(name, author, lang) {
  const projectDiv = document.getElementById("div");
  const projectName = document.getElementById("h1");
  const projectLang = document.getElementById("p");

  projectDiv.className = "project";

  projectName.innerText = `${author}/${name}`;
  projectLang.innerText = lang;

  projectDiv.append(projectName);
  projectDiv.appendChild(projectLang);
  return projectDiv;
}

async function main() {
  const resp = await fetch("https://api.github.com/users/abbi36/repos");
  const projects = await resp.json();

  if (projects.stargazers_count >= 1) {
    for (const project of projects) {
      addProject(project.name, "abbi36", project.language);
    }
  }
}
