import * as React from 'react';
import Profile from './Profile';
import AboutMe from './AboutMe';
import { Grid, IconButton } from '@mui/material';
import Right2Item from '../Components/Right2Item';
import Footer from '../Components/Footer';
import Title2Item from '../Components/Title2Item';
import ResearchInterests from './ResearchInterests';
import News from './News';
import Stacked2Item from '../Components/Stacked2Item';
import Publications from './Publications';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from 'react';


function Navigator(curr : number, max : number, increment : () => void, decrement : () => void){



  return (<Grid container spacing={2}>

<Grid item xs={3}>
  </Grid>

    <Grid item xs={2}>
          <IconButton style={{float:"right"}} onClick = {decrement}>
            <ArrowCircleLeftIcon/>
          </IconButton>
          </Grid>
        
          <Grid item xs={2} className = "centered">
            <p>{curr}/{max}</p>
          </Grid>

        <Grid item xs={2}>
        <IconButton style={{float:"left"}}>
        <ArrowCircleRightIcon onClick = {increment}/>
            </IconButton>
      </Grid>

      <Grid item xs={3}>
      </Grid>

      </Grid>
      );
}
function Games() {


  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [index, setIndex] = useState(0);
  
  let names : string[] = ["Grandpa's Intergalactic Rest Stop", "Suburban Shift"];

  let subtitles : string[] = ["15-466: Computer Game Programming", "60-418 Advanced ETB: Experimental Game Studio"];

  let urls : string[] = ["https://www.youtube.com/embed/AKhp87ojgRw?si=qonBOek5m3LOV7Nq", "https://itch.io/embed-upload/9260872?color=ffffff"];

  let links : string[] = ["https://emilyamspoker.itch.io/code-shop", "https://itch.io/embed-upload/9260872?color=ffffff"];

  let instructions : string[] = ["Visit the Itch.io page, download the game and supporting materials, and follow the instructions on the page.", "Click to start the game\nWASD to move\nCTRL-R or CMD-R to exit and restart"];



  let increment = () => {
    let newIndex = index+1 >= names.length ? 0 : index+1;
    setIndex(newIndex);
  };

  let decrement = () => {
    let newIndex = index-1 < 0 ? names.length-1 : index-1;
    setIndex(newIndex);
  };

  return (
    <div className="Homepage">
       <Grid container spacing={2}>
        <Grid item xs={12}>

            <Right2Item optionalTitle={
              <Stacked2Item
              item1={<div className="centered"><h1 style={{margin: "0px"}}>{names[index]}</h1></div>}
              item2={Navigator(index+1, names.length, increment, decrement)}
            />
            } 
            smallItem = {<div><h2 style={{margin: "0px"}}> <b>Class: </b>{subtitles[index]}</h2>
                      <h2> <b>Link: </b> <a href={links[index]}>Itch.io Page</a></h2>
                      <h2> <b>Instructions: </b>{instructions[index]}</h2></div>}
            bigItem={<iframe style={{border: "none"}} src={urls[index]} width="960" height="570"></iframe>}
            page={2}/>
        </Grid>

         


      </Grid>
    </div>
  );
}


export default Games;
