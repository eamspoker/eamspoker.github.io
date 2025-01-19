import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Pages/Homepage';
import reportWebVitals from './reportWebVitals';
import { useLocation, useRoutes, Route, HashRouter } from "react-router-dom";
import Resume from './Pages/Resume';
import WrapperPage from './Pages/WrapperPage';
import { AnimatePresence } from "framer-motion";
import Research from './Pages/Research';
import Games from './Pages/Games';

function App() {


const location = useLocation();

    const element = useRoutes([
        {
          path: "/",
          element: <WrapperPage element={<Homepage />}/>
        },
        {
          path: "/research",
          element: (
            <WrapperPage element={<Research/>}/>
          )
        }, 
        {
          path: "/games",
          element: (
            <WrapperPage element={<Games/>}/>
          )
        },
        {
          path: "/cv",
          element: (
            <WrapperPage element={<Resume/>}/>
          )
        },
      ]);

      if (!element) return null;


      return ( <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>);
      
}
export default App;