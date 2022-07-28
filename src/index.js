import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/glopal.scss"
import './i18n';
import {BrowserRouter} from "react-router-dom";
import { ToastProvider, useToasts } from 'react-toast-notifications';

ReactDOM.render(
  <ToastProvider     
  autoDismiss
  autoDismissTimeout={4000}
  placement="bottom-center" >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ToastProvider>,
  document.getElementById('root')
);

