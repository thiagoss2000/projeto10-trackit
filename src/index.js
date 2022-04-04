import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './components/Context';
import App from './App';
import GlobalStyle from './components/GlobalStyle';

ReactDOM.render(
  <AuthProvider>
    <GlobalStyle />
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
