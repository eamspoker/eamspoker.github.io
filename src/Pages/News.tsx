import Card from '../Components/Card';
import Stacked2Item from '../Components/Stacked2Item';


function News() {

  const descriptionStyle = {
    padding: "16px",
    borderWidth: "2px",
    borderStyle: "solid solid solid solid",
    marginTop: "0px"
  }
  const descriptionStyle2 = {
    padding: "16px",
    borderWidth: "2px",
    borderStyle: "none none solid none",
    marginTop: "0px",
    textAlign: "center" as any
  }

  const paperStyle = {
    borderWidth: "2px",
    borderStyle: "none solid solid solid",
    marginTop: "0px",
    paddingTop: "0px",
    height: "100%"
  }

  const updatesStyle = {
    textAlign: "left" as const,
    marginLeft: 32,
    marginRight: 32,

    
  }

  return (
    <div style={paperStyle}>
      <h2 className="graph_paper" style={descriptionStyle2} >
      News & Updates
    </h2>
    <div style={updatesStyle}>

      <h4 style={descriptionStyle} className='graph_paper'>June 2026</h4>
    <ul style={{fontSize: "1em"}}>
      <li>I'm very excited to start my internship at Pixar Animation Studios, where I will be working as a <b>Product Design Intern</b>.</li>
    </ul>

      <h4 style={descriptionStyle} className='graph_paper'>August 2025</h4>
    <ul style={{fontSize: "1em"}}>
      <li>I started graduate school at <b>Georgia Tech</b>!</li>
    </ul>

      <h4 style={descriptionStyle} className='graph_paper'>June 2025</h4>
    <ul style={{fontSize: "1em"}}>
      <li>I'm super grateful to announce that I received the NSF's <b><a target="_" href="https://www.nsfgrfp.org/">Graduate Research Fellowship</a></b> to support my graduate research in Human-Computer Interaction.</li>
    </ul>

      <h4 style={descriptionStyle}  className='graph_paper'>January 2025</h4>
    <ul style={{fontSize: "1em"}}>
      <li>I received an honorable mention for the <b><a target="_" href="https://verified.sertifier.com/en/verify/29037133114610">2025 CRA Outstanding Undergraduate Research Award.</a></b></li>
    </ul>
    </div>
    </div>
  );
}


export default News;
