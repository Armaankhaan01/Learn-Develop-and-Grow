import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ReactGAImplementation } from 'react-ga4';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
ReactGAImplementation.initialize(process.env.REACT_APP_ANALYTICS_TOKEN);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>


);
const analytics = ReactGAImplementation.send({ hitType: "pageview", page: window.location.pathname + window.location.search })

reportWebVitals(analytics)