import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './components/Error';
import Results from './components/Results/results';
import Freelances from './components/Freelances';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element= {<Survey />} />
        <Route path="/results" element= {<Results />} />
        <Route path='/freelances' element= {<Freelances />} />
        <Route path="/*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
