import * as React from 'react';
import Tabbar from '../Components/Tabbar';
import WrapperPage from './WrapperPage';
import { Grid } from '@mui/material';


function Resume() {


  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <div>
      <Tabbar page={3}/>
      <WrapperPage>
      <Grid sx={{margin: "16px"}} container spacing={2}>
        <Grid className="graph_paper callOutStyle" size={{xs: 12, md: 4}}>          
          <h1>Resume</h1>
          <h4>Last updated: 09/15/2026</h4>
        </Grid>

        <Grid size={{xs: 12, md: 8}}>          
        <iframe src="https://drive.google.com/file/d/1-51K77RGPFXJFReirkw-aYuY12bJXxdW/preview" 
        width="100%" max-width="100%" height="800px" allow="autoplay"></iframe>
        </Grid>

     </Grid>
      </WrapperPage>

    </div>
  );
}


export default Resume;
