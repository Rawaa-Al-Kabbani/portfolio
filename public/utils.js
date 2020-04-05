function createElementWithId(parent, element, elementName) {
  let newElement = document.createElement(element);
  parent.appendChild(newElement);
  newElement.setAttribute('id', elementName);
  return newElement;
}

function createElementWithClass(parent, element, elementName) {
  let newElement = document.createElement(element);
  parent.appendChild(newElement);
  newElement.setAttribute('class', elementName);
  return newElement;
}

function createElement(parent, element) {
  let newElement = document.createElement(element);
  parent.appendChild(newElement);
  return newElement;
}

function createElementWithTextNode(parent, element, text) {
  const newElement = document.createElement(element);
  parent.appendChild(newElement);
  const elementContent = document.createTextNode(text);
  newElement.appendChild(elementContent);
  return newElement;
}

function createInputSetAttributes(parent, element, inputType, inputName, elementName) {
  let newElement = document.createElement(element);
  parent.appendChild(newElement);
  newElement.setAttribute('type', inputType);
  newElement.setAttribute('name', inputName);
  newElement.setAttribute('id', elementName);
  return newElement;
}

function createSubmitButton(parent, element, text) {
  const newElement = document.createElement(element);
  parent.appendChild(newElement);
  const elementContent = document.createTextNode(text);
  newElement.appendChild(elementContent);
  return newElement;
}

export {
  createElementWithId,
  createElementWithClass,
  createElement,
  createElementWithTextNode,
  createInputSetAttributes,
  createSubmitButton,
};
