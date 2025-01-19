
import SchoolIcon from '@mui/icons-material/School';
import React from 'react';
import Card from '../Components/Card';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';

function Profile() {

  const iconStyle = {
    paddingTop: "30px",
    paddingBottom: "30px",
    margin: "10px",
    color: "black"


  }

  const headerStyle = {
    backgroundColor: "white",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  }


  const pfpStyle = {
    width: "100%",
    padding: "0px",
    display: "block",
    justifyContent: "right"

  }



  return (
    <Card top={<img alt="Emily looking forward and smiling." src={require("./pfp.jpg")} style={pfpStyle}></img>
  } style={headerStyle}>
     <Grid container spacing={0}>


      <Grid className='centered 'item xs={4}>
      <IconButton aria-label="Google Scholar" 
      style={{ backgroundColor: 'transparent' }} onClick={() => window.open("https://scholar.google.com/citations?user=T4sy0-4AAAAJ&hl=en")}>
      <SchoolIcon fontSize="large" style={iconStyle} />
      </IconButton>
      </Grid>


      <Grid className='centered ' item xs={4}>
      <IconButton aria-label="Github.com" style={{ backgroundColor: 'transparent' }}
      onClick={() => window.open("https://github.com/eamspoker")}>

      <GitHubIcon fontSize="large" style={iconStyle}/>
      </IconButton>
      </Grid>
     
      <Grid className='centered ' item xs={4}>
      <IconButton aria-label="Linkedin.com" style={{ backgroundColor: 'transparent' }}
      onClick={() => window.open("https://www.linkedin.com/in/emily-amspoker-52944b18a/")}>

      <LinkedInIcon fontSize="large" style={iconStyle} />
      </IconButton>
      </Grid>


      
     </Grid>

        
      </Card>
  );
}


export default Profile;
