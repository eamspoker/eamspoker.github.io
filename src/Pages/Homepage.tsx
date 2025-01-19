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


function Homepage() {


  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="Homepage">
       <Grid container spacing={2}>
        <Grid item xs={12}>
        <Right2Item optionalTitle={<div className="centered"><h1 style={{margin: "0px"}}>Hi, I'm Emily!</h1><Footer /></div>} 
            smallItem={<Profile/>} 
            bigItem={
                <Title2Item titleItem={<AboutMe/>} 
                            item1={<Stacked2Item item1={<ResearchInterests/>} item2={<Publications/>}/>}  
                            item2={<News/>}/>} page={0}/>
        </Grid>

         <Grid item xs={12} md={1}>
                </Grid>
        
        <Grid item xs={12} md={11}>
      
      </Grid>


      </Grid>
    </div>
  );
}


export default Homepage;
