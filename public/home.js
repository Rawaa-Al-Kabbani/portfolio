import {
  createElementWithId,
  createElementWithTextNode,
  createElementWithClass,
  createElement,
} from './utils.js';
function createHomePage(content) {
  const home = createElementWithId(content, 'section', 'home');
  home.setAttribute('class', 'home-container');

  // const heading = createElementWithClass(home, 'div', 'heading');
  const header = createElementWithTextNode(home, 'h1', 'Hello I am Rawaa');
  const paragraph = createElementWithTextNode(
    home,
    'p',
    'I am a very curious and creative person that also happens to be a software developer. I am always looking to improve myself and learn something new.',
  );
}
export { createHomePage };
