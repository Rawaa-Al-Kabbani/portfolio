import * as utilsFunctions from './utils.js';

async function createProject(data) {
  let response = await fetch('/createProject', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    alert('The project was created');
  } else {
    alert('Failed to create the project');
  }
}

function editProjectPage(content) {
  const adminContainer = utilsFunctions.createElementWithId(content, 'div', 'adminDiv');

  // create project Div h3
  const adminContainerH2 = utilsFunctions.createElementWithTextNode(
    adminContainer,
    'h5',
    'Add Project',
  );
  // create project Div form
  const projectForm = utilsFunctions.createElementWithId(adminContainer, 'form', 'projectForm');
  // projectForm.action = 'http://localhost:5000/createProject';
  // projectForm.method = 'POST';
  projectForm.onsubmit = function (event) {
    let titleValue = getInputValue('title');
    let aboutValue = getInputValue('about');
    let linkValue = getInputValue('link');
    createProject({
      title: titleValue,
      about: aboutValue,
      link: linkValue,
    });
    event.preventDefault();
  };
  // create projectForm p1, p2, p3
  const pTitleProject = utilsFunctions.createElementWithId(projectForm, 'p', 'pTitleProject');
  const pAboutProject = utilsFunctions.createElementWithId(projectForm, 'p', 'pAboutProject');
  const pLinkProject = utilsFunctions.createElementWithId(projectForm, 'p', 'pLinkProject');
  const pFullProject = utilsFunctions.createElementWithId(projectForm, 'p', 'pFullProject');
  // create projectForm p labels
  const labelTitleProject = utilsFunctions.createElementWithTextNode(
    pTitleProject,
    'label',
    'Title',
  );
  labelTitleProject.setAttribute('class', 'inputLabel');
  const labelAboutProject = utilsFunctions.createElementWithTextNode(
    pAboutProject,
    'label',
    'About',
  );
  labelAboutProject.setAttribute('class', 'inputLabel');

  const labelLinkProject = utilsFunctions.createElementWithTextNode(pLinkProject, 'label', 'Link');
  labelLinkProject.setAttribute('class', 'inputLabel');

  // create projectForm p inputs
  const inputTitleProject = utilsFunctions.createInputSetAttributes(
    pTitleProject,
    'INPUT',
    'text',
    'title',
    'title',
  );

  const inputAboutProject = utilsFunctions.createInputSetAttributes(
    pAboutProject,
    'INPUT',
    'text',
    'about',
    'about',
  );
  const inputLinkProject = utilsFunctions.createInputSetAttributes(
    pLinkProject,
    'INPUT',
    'text',
    'link',
    'link',
  );
  const submitProject = utilsFunctions.createElementWithTextNode(pFullProject, 'BUTTON', 'Submit');
  submitProject.setAttribute('type', 'submit');
  const submit = submitProject.setAttribute('class', 'submit');
}

// // listen for form submit
function getInputValue(id) {
  return document.getElementById(id).value;
}

export { editProjectPage };
