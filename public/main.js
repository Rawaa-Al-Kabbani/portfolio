import * as homeFunctions from './home.js';
import * as aboutFunctions from './about.js';
import * as projectsFunctions from './projects.js';
import * as adminFunctions from './admin.js';
import * as editFunctions from './editProject.js';
import * as utilsFunctions from './utils.js';

const doc = window.document;
const nav = doc.getElementsByClassName('nav-link');
const content = doc.getElementById('content');

document.addEventListener('DOMContentLoaded', function () {
  $('.dropdown-trigger').dropdown();
});

// Add event listener on click
[...Array(nav.length)].map((item, index) => {
  nav[index].addEventListener('click', (event) => {
    history.pushState(null, null, event.target.href);
    content.innerHTML = '';
    changePage();
    event.preventDefault();
  });
});

const changePage = () => {
  switch (doc.location.pathname) {
    case '/home':
      homeFunctions.createHomePage(content);
      break;
    case '/projects':
      //document.getElementById('content').css = 'background:#ffffff';
      projectsFunctions.createProjectsPage(content);
      break;
    case '/about':
      aboutFunctions.createAboutPage(content);
      break;
    case '/admin':
      adminFunctions.createAdminPage(content);
      break;
    case '/editProject':
      editFunctions.editProjectPage(content);
      break;
    default:
      homeFunctions.createHomePage(content);
      aboutFunctions.createAboutPage(content);
      projectsFunctions.createProjectsPage(content);
      break;
  }
};

changePage();
