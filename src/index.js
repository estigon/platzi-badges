import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

//instalar bootstrap primero desde npm
import 'bootstrap/dist/css/bootstrap.css'

//otros styles globales
import './global.css'

const container = document.getElementById('app');

ReactDOM.render(
    <App />, container
)

