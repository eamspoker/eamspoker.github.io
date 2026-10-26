import Card from '../Components/Card';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';
import Tabbar from '../Components/Tabbar';
import WrapperPage from './WrapperPage';

function AboutMe() {

  const descriptionStyle = {
    textAlign: "left" as const,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    fontSize: "1.5em"
  }

  const paperStyle = {
    borderRadius: "2%",
    padding: "10px",
  }



  const aboutMeStyle = {
    backgroundColor: "transparent !important",


  }

  return (
<div>
  <Tabbar page={1}/>
  <WrapperPage>

   <Grid container spacing={2} sx={{margin: "16px"}} >
    <Grid size={{xs: 12, lg:4}}>
      <img alt="Emily in her graduation robes looking forward and smiling." src={"/emily.jpg"}></img>
      </Grid>
      <Grid size={{xs: 12, lg:8}}>
      <div className='callOutStyle graph_paper'>
        <p className="no_bg" >
          Hi! My name is Emily and I'm originally from Denver, Colorado.
        </p>
<p className="no_bg" >I'm currently a Master's of Computer Science student at Georgia Tech. I'm specializing in Human-Computer Interaction and am grateful to be supported by the National Science Foundation's Graduate Research Fellowship.
</p>
 
<p className="no_bg"  >
In my practice, I draw on <b>user-centered research and design methods</b> to create technology that is <b>accessible, effective, and equitable</b>.
        </p>
        <Grid container spacing={1}>
        <Grid size={{md: 1}}>
          <IconButton aria-label="Linkedin.com" style={{ color: 'black', backgroundColor: 'transparent' }}
      onClick={() => window.open("https://www.linkedin.com/in/emily-amspoker-52944b18a/")}>

      <LinkedInIcon fontSize="large" />
      </IconButton>
        </Grid>
        <Grid size={{md: 1}}>
           <IconButton aria-label="Github.com" style={{ color: 'black', backgroundColor: 'transparent' }}
      onClick={() => window.open("https://github.com/eamspoker")}>

      <GitHubIcon fontSize="large"/>
      </IconButton>
        </Grid>
        <Grid size={{md: 1}}>
           <IconButton aria-label="Google Scholar" 
      style={{ color: 'black', backgroundColor: 'transparent' }} onClick={() => window.open("https://scholar.google.com/citations?user=1ZFxIeoAAAAJ&hl=en&oi=ao")}>
      <SchoolIcon fontSize="large" />
      </IconButton>
        </Grid>
        </Grid>
      </div>
      </Grid>
      
   </Grid>
    

      </WrapperPage>
      </div> 
  );
}


export default AboutMe;
