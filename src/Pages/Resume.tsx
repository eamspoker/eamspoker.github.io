import * as React from 'react';
import Tabbar from '../Components/Tabbar';


function Resume() {


  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const resumePageStyle = {
    display: "flex",
    justifyContent: "flex-start",
    padding: "32px", 
    gap: "8px"
  };

  return (
    <div>
      <Tabbar page={3}/>
      <div style={resumePageStyle}>
        <div style={{width: "fit-content", height: "fit-content",
    padding:"16px", borderStyle: "solid", borderWidth: "2px", borderColor: "#445822"}} className='graph_paper'>
          <h1>Resume</h1>
          <h4>Last updated: 09/15/2026</h4>
        </div>
      <iframe src="https://drive.google.com/file/d/1-51K77RGPFXJFReirkw-aYuY12bJXxdW/preview" 
       width="800em" max-width="100%" height="750em" allow="autoplay"></iframe>
      </div>

    </div>
  );
}


export default Resume;
