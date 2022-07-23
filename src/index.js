import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/glopal.scss"
import './i18n';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

