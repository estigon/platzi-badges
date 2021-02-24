import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge'
import BadgeNew from './pages/BadgeNew'

//instalar bootstrap primero desde npm
import 'bootstrap/dist/css/bootstrap.css'

//otros styles globales
import './global.css'

const container = document.getElementById('app');

// ReactDOM.render( 
// <Badge 
//     firstName="Elys"
//     lastName="Gonzalez"
//     job="Junior developer"
//     twitter="estigon"
// />, container );

ReactDOM.render(
    <BadgeNew />, container
)

