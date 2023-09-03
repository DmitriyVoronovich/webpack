import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, ErrorBoundary } from 'components';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
reportWebVitals();
