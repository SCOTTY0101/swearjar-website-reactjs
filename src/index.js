import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import './style.css';
import Nav from './nav.js';
import Main from './main.js';
import Article from './Article.js';
import Footer from './Footer.js';
import Time from './time.js';
import Example from './react-hook-test.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Main />
    <Article />
    <Example />
    <Time /> 
    <Footer />
   {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
