import React from 'react';
import Homepage from './Pages/Homepage';
import { useLocation, useRoutes } from "react-router-dom";
import Resume from './Pages/Resume';
import { AnimatePresence, motion, type Variant } from "framer-motion";
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import AccessibleOceans from './Pages/ProjectPages/AccessibleOceans';
import ScottyU from './Pages/ProjectPages/ScottyU';
import AccessiblePGH from './Pages/ProjectPages/AccessiblePGH.tsx';

function App() {




const location = useLocation();

    const element = useRoutes([
        {
          path: "/",
          element: <Homepage />
        },
        {
          path: "/projects",
          children: [
            { index: true,
              element: <Projects/>},
             { path: 'Accessible_Oceans',
              element: <AccessibleOceans/>},
              { path: 'ScottyU',
              element: <ScottyU/>},
              { path: 'AccessiblePGH',
              element: <AccessiblePGH/>}
          ]
        }, 
        {
          path: "/about_me",
          element: (
            <AboutMe/>
          )
        },
        {
          path: "/resume",
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