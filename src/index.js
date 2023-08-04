import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
if (process.env.NODE_ENV === "development") {
  console.log = function () { };
}
if (process.env.NODE_ENV === "production") {
  console.log = function () { };
}
if (process.env.NODE_ENV === "test") {
  console.log = function () { };
}
console.log(process.env.NODE_ENV);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
