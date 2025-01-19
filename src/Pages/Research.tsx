import * as React from 'react';
import Profile from './Profile';
import AboutMe from './AboutMe';
import { Grid } from '@mui/material';
import Right2Item from '../Components/Right2Item';
import Footer from '../Components/Footer';
import GridMenu from '../Components/GridMenu';
import Right2ItemNoTabbar from '../Components/Right2ItemNoTabbar';
import SeniorThesis from './ProjectPages/SeniorThesis';
import StimObjects from './ProjectPages/StimObjects';


function Research() {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Right2Item smallItem={<div><h1>Current Projects</h1></div>} bigItem={<div></div>} page={1}/>
        <Right2ItemNoTabbar smallItem={<div><h2 style={{margin: "0px"}}>Transformational Games for Responsible AI Education</h2></div>} bigItem={<SeniorThesis/>}/>
        <Right2ItemNoTabbar smallItem={<div><h2 style={{margin: "0px"}}>Machine-Knitted Stim Objects</h2></div>} bigItem={<StimObjects/>}/>

        <Right2ItemNoTabbar smallItem={<div><h1>Past Projects</h1></div>} bigItem={<div></div>}/>

    </div>
  );
}


export default Research;
