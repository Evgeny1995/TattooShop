import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {index} from './store';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={index}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>

);
