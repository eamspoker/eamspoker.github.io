import Markdown from 'react-markdown'
import { useState, useEffect} from 'react';
import Tabbar from '../Components/Tabbar';
import WrapperPage from './WrapperPage';
import remarkGfm from 'remark-gfm';
import { Grid } from '@mui/material';
import AccessibleOceans from './ProjectPages/AccessibleOceans';

type Props = {
    project: string
}
function ProjectPage(props: Props) {

    // Markdown
   const {project} = props;
   const [description, setDescription] = useState("");
   const projectPageStyle = {
    padding: "48px",
    paddingTop: "16px",
    border: "2px solid",
    borderTop: "0px",


   }

   const headerStyle = {
    textAlign: "center",
    border: "2px solid",
    borderTop: "0px",
   }

   useEffect(() => {
    fetch("/project_descriptions/" + project + ".md")
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.text()
        })
        .then((project_text) => {
            console.log(project_text)
            setDescription(project_text);
        })
        .catch((e) => console.error(e));
   }, []);



   return <div style={{height: "100vh"}}>
            <Tabbar page={2}/>
            <WrapperPage>


    <Grid container spacing={0} sx={{height: "100vh"}}>
   <Grid size={{xs: 12}}  sx={headerStyle}>
    <h1 data-heading="A Sanctuary in Sound" dir="auto">A Sanctuary in Sound</h1>
   </Grid>
    <Grid size={{xs:12, md:6}} sx={{height: "100vh"}}>
            <AccessibleOceans/>
        </Grid>
       <Grid size={{xs:12, md:6}}  >

            
       <iframe style={{border: "0px", overflow: "hidden"}} width="100%" height="600px" src="https://embed.figma.com/deck/dDEWF2J1ODCV1LgxMPm0IS/A-Sanctuary-in-Sound-Overview?node-id=1-140&viewport=-98%2C-70%2C0.48&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share" allowFullScreen></iframe>
        </Grid>

        
        
  
        </Grid>
        
        




            </WrapperPage>
            </div>;

}


export default ProjectPage;
