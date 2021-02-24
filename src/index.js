import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge'

//instalar bootstrap primero desde npm
import 'bootstrap/dist/css/bootstrap.css'

//otros styles globales
import './global.css'

// const jsx = <div>
//     <Badge />
//     <h1>Hola, soy estigon</h1>
//     <p>Trabajo como developer</p>
// </div>

const container = document.getElementById('app');

ReactDOM.render( 
<Badge 
    firstName="Elys"
    lastName="Gonzalez"
    job="Junior developer"
    twitter="estigon"
/>, container );

