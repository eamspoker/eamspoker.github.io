import Card from '../Components/Card';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';
import Tabbar from '../Components/Tabbar';

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

  }

  return (
<div>
  <Tabbar page={1}/>
   <div className="graph_paper" style={{alignContent: "center", margin: "8px", height: "100%"}}>
            <h1 style={{paddingBottom: "8px", margin:"0px"}}>This page is under construction...</h1>
            <h4  style={{padding: "0px", margin:"0px"}} className="subtitle">Check back later for more updates!</h4>
     </div>
    {/* <img alt="Emily in her graduation robes looking forward and smiling." src={"/emily.png"}></img>

      <IconButton aria-label="Google Scholar" 
      style={{ backgroundColor: 'transparent' }} onClick={() => window.open("https://scholar.google.com/citations?user=1ZFxIeoAAAAJ&hl=en&oi=ao")}>
      <SchoolIcon fontSize="large" />
      </IconButton>


      <IconButton aria-label="Github.com" style={{ backgroundColor: 'transparent' }}
      onClick={() => window.open("https://github.com/eamspoker")}>

      <GitHubIcon fontSize="large"/>
      </IconButton>
     
      <IconButton aria-label="Linkedin.com" style={{ backgroundColor: 'transparent' }}
      onClick={() => window.open("https://www.linkedin.com/in/emily-amspoker-52944b18a/")}>

      <LinkedInIcon fontSize="large" />
      </IconButton> */}
 
      </div> 
  );
}


export default AboutMe;
