import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Search } from "./components/route/Search"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from './components/route/Detail';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './style/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail/:key/:id" element={<Detail />} />
        </Routes>

        {/* <App /> */}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
