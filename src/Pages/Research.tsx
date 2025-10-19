import * as React from 'react';
import Right2Item from '../Components/Right2Item';
import Right2ItemNoTabbar from '../Components/Right2ItemNoTabbar';
import SeniorThesis from './ProjectPages/SeniorThesis';
import StimObjects from './ProjectPages/StimObjects';
import AccessibleOceans from './ProjectPages/AccessibleOceans';
function Research() {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Right2Item smallItem={<div><h1>Current Projects</h1></div>} bigItem={<div></div>} page={1}/>
        
        <Right2ItemNoTabbar smallItem={<div><h2 style={{margin: "0px"}}> Accessible Human-Data Interaction through Sonification of Ocean Data</h2></div>} bigItem={<AccessibleOceans/>}/>

        <Right2ItemNoTabbar smallItem={<div><h1>Past Projects</h1></div>} bigItem={<div></div>}/>
        
        <Right2ItemNoTabbar smallItem={<div><h2 style={{margin: "0px"}}>Transformational Games for Responsible AI Education</h2></div>} bigItem={<SeniorThesis/>}/>
        <Right2ItemNoTabbar smallItem={<div><h2 style={{margin: "0px"}}>Machine-Knitted Stim Objects</h2></div>} bigItem={<StimObjects/>}/>

    </div>
  );
}


export default Research;
