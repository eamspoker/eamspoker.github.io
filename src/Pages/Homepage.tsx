import * as React from 'react';
import Profile from './Profile';
import AboutMe from './AboutMe';
import { Grid } from '@mui/material';
import Right2Item from '../Components/Right2Item';
import Footer from '../Components/Footer';
import Title2Item from '../Components/Title2Item';
import ResearchInterests from './ResearchInterests';
import News from './News';
import Stacked2Item from '../Components/Stacked2Item';
import Publications from './Publications';
import Tabbar from '../Components/Tabbar';


function Homepage() {


  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const header_style = {
    padding: "48px",
    borderWidth: "0px 0px 2px 0px",
    borderStyle: "none none solid none"
   };

   const hero_image_style = {
    padding: "8px", 
    margin:"0px",
    display: "flex",
    justifyContent: "flex-start",
    gap: "56px"

   };

   const title_style = {
    padding: "8px", 
    margin:"0px",
    display: "flex",
    justifyContent: "flex-end"

   };

  return (
    <div className="Homepage">
        <Tabbar page={0} horizontal={true}/>
        <div style={header_style} className='graph_paper'>
          <div style={hero_image_style}>
            <img src="emily.png"/>
          <div style={{alignContent: "center"}}>
            <h1 style={{paddingBottom: "8px", margin:"0px"}}>HELLO! I'M EMILY :D</h1>
            <p  style={{padding: "0px", margin:"0px"}} className="subtitle">I'm a designer, researcher, and developer.</p>
          </div>
          </div>
        </div>

         <div style={header_style} className='graph_paper'>
          <div style={hero_image_style}>
          <div style={{alignContent: "center"}}>
            
            <p  style={{padding: "0px", margin:"0px"}} className="subtitle">This webpage is currently under construction. Come back for more updates!</p>
          </div>
          </div>
        </div>

    </div>
  );
}


export default Homepage;
