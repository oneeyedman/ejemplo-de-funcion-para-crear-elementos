'use strict';

const container = document.querySelector('.container');

function addElement(element,text,target) {
  const myElement = document.createElement(element);
  const myContent = document.createTextNode(text);
  myElement.appendChild(myContent);
  target.appendChild(myElement);
}

addElement('h1','Soy un título elegante', container);

addElement('h2','Soy un título 2 y elegante', container);

addElement('ul','', container);

const list = document.querySelector('ul');

for (let i=0;i<4;i++) {
  addElement('li',i, list);
}

/*
const element = document.createElement('h1');
const content = document.createTextNode('Soy un titulo');
element.appendChild(content);
container.appendChild(element);

const element2 = document.createElement('h2');
const content2 = document.createTextNode('Soy un titulo de nivel 2');
element2.appendChild(content2);
container.appendChild(element2);
*/

