import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import Maschera from './Dati';

import reportWebVitals from './reportWebVitals';

import Listato from './listato'

import Viaggi from './Station/Viaggi'

ReactDOM.render(
  <React.StrictMode>
    <Viaggi></Viaggi>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
