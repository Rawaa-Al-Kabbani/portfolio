import * as utilsFunctions from './utils.js';

async function createProjectsPage(content) {
  const projectsAll = utilsFunctions.createElementWithTextNode(content, 'h3', 'Projects');
  const projectsContainer = utilsFunctions.createElementWithClass(
    content,
    'div',
    'projectsContainer',
  );

  async function getProjects() {
    let response = await fetch('/getProjects');

    if (response.ok) {
      let json = await response.json();
      json.forEach((project) => {
        const projectDiv = utilsFunctions.createElementWithClass(
          projectsContainer,
          'div',
          'projectDiv',
        );
        const projectTitle = utilsFunctions.createElementWithTextNode(projectDiv, 'a', project.key);
        projectTitle.className = 'projectTitle';
        projectTitle.href = project.link;
        const projectAbout = utilsFunctions.createElementWithTextNode(
          projectDiv,
          'p',
          project.about,
        );
        projectAbout.className = 'projectAbout';
        const projectLink = utilsFunctions.createElementWithTextNode(projectDiv, 'a', project.link);
        projectLink.className = 'projectLink';
        projectLink.href = project.link;
      });
    } else {
      alert('HTTP-Error: ' + response.status);
    }
  }
  getProjects();
}

export { createProjectsPage };
