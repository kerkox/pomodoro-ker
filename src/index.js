import React from 'react';
import ReactDOM from 'react-dom';
//para estilos bootstrap
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
