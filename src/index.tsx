import {StrictMode} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Pages/Homepage';
import reportWebVitals from './reportWebVitals';
import { useLocation, useRoutes, Route, BrowserRouter } from "react-router-dom";
import Projects from './Pages/Research';
import App from './App';
import Resume from './Pages/Resume';
import WrapperPage from './Pages/WrapperPage';
import { AnimatePresence } from "framer-motion";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);





root.render(

  
<StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
