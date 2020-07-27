import { createElementWithId, createElementWithTextNode, createElementWithClass } from './utils.js';

function createAboutPage(content) {
  const aboutContainer = createElementWithClass(content, 'div', 'about-container');
  const aboutInfo = createElementWithClass(aboutContainer, 'div', 'aboutInfo');
  const aboutLeft = createElementWithClass(aboutInfo, 'div', 'about-col');
  const aboutDetails = createElementWithClass(aboutLeft, 'div', 'about-details');
  const aboutHeader = createElementWithTextNode(aboutDetails, 'h4', 'About Rawaa.');
  const aboutParag = createElementWithTextNode(
    aboutDetails,
    'p',
    'I am a software developer with a deep knowledge in Node.js, JavaScript and Java. I like working on my own open-source projects and developing websites using React.js as the frontend and Express.js in combination with MySQL as the backend. I am a very curious person and I love to learn and use new technologies all the time.',
  );
  const skillsDetails = createElementWithClass(aboutContainer, 'div', 'skill-details');
  const skillsHeader = createElementWithTextNode(skillsDetails, 'h4', 'Skills:');
  
  const titles = ['Programming Languages:', 'Web Development:', 'Databases:', 'Other:'];
  const skills = [
    [`Node.js (avancerad), JavaScript (avancerad), TypeScript (avancerad), Java (avancerad), Python (mellan)`],
    [`Express.js, React.js, HTML5, CSS, Ajax, Material-UI, Rest APIs`],
    [`MySQL, PostgreSQL, Firebase, MongoDB`],
    [`Git, GitHub, Docker, Heroku, JMeter, LoadRunner`]
  ];
   for(let x=0;x<titles.length;x++) {
     const skillsInfo = createElementWithClass(skillsDetails, 'div', 'skills-info');
     const skillsLeft = createElementWithClass(skillsInfo, 'div', 'skills-col-left');
     const skillsRight = createElementWithClass(skillsInfo, 'div', 'skills-col-right');
     createElementWithTextNode(skillsLeft, 'p', titles[x]);
     createElementWithTextNode(skillsRight, 'p', skills[x]);
   }

  const aboutRight = createElementWithClass(aboutInfo, 'div', 'about-col');
  const aboutImage = createElementWithClass(aboutRight, 'div', 'about-image');
  const imgSelfy = createElementWithClass(aboutImage, 'img', 'img');
  imgSelfy.setAttribute('src', 'images/selfy.jpg');
  imgSelfy.setAttribute('alt', 'Rawaa Al Kabbani');
}
export { createAboutPage };
