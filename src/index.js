import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
ReactGA.initialize("G-FGGN19FGW3");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>


);
const analytics = ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search })

reportWebVitals(analytics)