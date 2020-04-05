import * as utilsFunctions from './utils.js';

function createAdminPage(content) {
  const authContainer = utilsFunctions.createElementWithId(content, 'div', 'authDiv');

  // create project Div h3
  const authContainerH2 = utilsFunctions.createElementWithTextNode(
    authContainer,
    'h5',
    'Enter Email and Password',
  );
  // create project Div form
  const authForm = utilsFunctions.createElementWithId(authContainer, 'form', 'authForm');
  authForm.method = 'POST';
  authForm.action = '/verifyUser';

  const pUserName = utilsFunctions.createElementWithId(authForm, 'p', 'pUserName');
  const pUserPassword = utilsFunctions.createElementWithId(authForm, 'p', 'pUserPassword');
  const pSubmit = utilsFunctions.createElementWithId(authForm, 'p', 'pSubmit');
  const labelTitleProject = utilsFunctions.createElementWithTextNode(
    pUserName,
    'label',
    'User Name',
  );
  labelTitleProject.setAttribute('class', 'inputLabel');
  const labelAboutProject = utilsFunctions.createElementWithTextNode(
    pUserPassword,
    'label',
    'Password',
  );
  // create projectForm p inputs
  const inputUserName = utilsFunctions.createInputSetAttributes(
    pUserName,
    'INPUT',
    'text',
    'user',
    'user',
  );

  const inputUserPassword = utilsFunctions.createInputSetAttributes(
    pUserPassword,
    'INPUT',
    'text',
    'password',
    'password',
  );
  const submitUser = utilsFunctions.createElementWithTextNode(pSubmit, 'BUTTON', 'Submit');
  submitUser.setAttribute('type', 'submit');
  const submit = submitUser.setAttribute('class', 'submit');
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

export { createAdminPage };
