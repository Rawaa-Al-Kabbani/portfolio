import { createElementWithId, createElementWithTextNode, createElementWithClass } from './utils.js';

function createAboutPage(content) {
  const aboutContainer = createElementWithClass(content, 'div', 'about-container');
  const raw = createElementWithClass(aboutContainer, 'div', 'raw');
  const col1 = createElementWithClass(raw, 'div', 'col');
  const aboutDetails = createElementWithClass(col1, 'div', 'about-details');
  const h2 = createElementWithTextNode(aboutDetails, 'h2', 'About Rawaa.');
  const paragraph1 = createElementWithTextNode(
    aboutDetails,
    'p',
    'I am a software developer with a deep knowledge in Node.js, JavaScript and Java. I like working on my own open-source projects and developing websites using React.js as the frontend and Express.js in combination with MySQL as the backend. I am a very curious person and I love to learn and use new technologies all the time.',
  );
  const col2 = createElementWithClass(raw, 'div', 'col');
  const aboutImage = createElementWithClass(col2, 'div', 'about-image');
  const imgSelfy = createElementWithClass(aboutImage, 'IMG', 'img');
  imgSelfy.setAttribute('src', 'images/selfy.jpg');
  imgSelfy.setAttribute('alt', 'noooooooooooooooo');
}
export { createAboutPage };
