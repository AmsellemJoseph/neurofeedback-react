import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Font from './utility/Font'
import { HashRouter } from 'react-router-dom'
import 'leaflet/dist/leaflet.css';

ReactDOM.hydrate(
  <HashRouter>
    <App />
    <Font />
  </HashRouter>,
  document.getElementById('root')
);
