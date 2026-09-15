import React from 'react';
import Homepage from './Pages/Homepage';
import { useLocation, useRoutes } from "react-router-dom";
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
          element: <Homepage />
        },
        {
          path: "/research",
          element: (
            <Research/>
          )
        }, 
        {
          path: "/games",
          element: (
            <Games/>
          )
        },
        {
          path: "/cv",
          element: (
            <Resume/>
          )
        },
      ]);

      if (!element) return null;


      return ( <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>);
      
}
export default App;