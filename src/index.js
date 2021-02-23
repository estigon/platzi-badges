//sin usar react
// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

//usando react
import React from 'react';
import ReactDOM from 'react-dom';

const nameSite = 'Platzi'
const element = React.createElement('a', {href:'https://platzi.com'}, `Ir a ${nameSite}`)

const jsx = <h1>Hello, {nameSite} Badges!</h1>;

const sum = (a , b) => a + b
const jsx2 = <h1>pueden usarse entre expresiones { 5 + 3} o llamado a funciones { sum(5, 4) }</h1>

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx2, container);

