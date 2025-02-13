import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GridExample1 from './GridExample1';
import GridExample2 from './GridExample2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GridExample2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
