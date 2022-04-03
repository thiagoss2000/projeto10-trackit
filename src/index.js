import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './components/Context';
import App from './App';
import "./Reset.css"

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
