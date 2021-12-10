import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import Maschera from './Dati';

import reportWebVitals from './reportWebVitals';

import Listato from './listato'

ReactDOM.render(
  <React.StrictMode>
    <Maschera />
    <br /><br />
    <Listato></Listato>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
