import React from 'react';
import Card from '../Components/Card';


function News() {

  const descriptionStyle = {
    textAlign: "left" as const,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  }

  const paperStyle = {
    borderRadius: "2%",
    padding: "10px",
  }

  const updatesStyle = {
    textAlign: "left" as const,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    
  }

  return (
    <Card top={<h2 style={descriptionStyle }>
      News & Updates
    </h2>}>
    <div style={updatesStyle}>

      <p style={{fontSize: "1em", fontWeight:"bold"}}>August 2025</p>
    <ul style={{fontSize: "1em"}}>
      <li>Very excited to announce that I am starting my PhD at Georgia Tech, where I'll be working with Dr. Jessica Roberts in <a target="_blank" href="https://tiles.cc.gatech.edu/">the Tiles Lab</a> :D</li>
    </ul>

      <p style={{fontSize: "1em", fontWeight:"bold"}}>June 2025</p>
    <ul style={{fontSize: "1em"}}>
      <li>Super grateful to announce that I received the NSF's <a target="_" href="https://www.nsfgrfp.org/">Graduate Research Fellowship</a></li>
    </ul>

      <p style={{fontSize: "1em", fontWeight:"bold"}}>January 2025</p>
    <ul style={{fontSize: "1em"}}>
      <li>I received an honorable mention for the <a target="_" href="https://verified.sertifier.com/en/verify/29037133114610">2025 CRA Outstanding Undergraduate Research Award.</a></li>
    </ul>
    </div>
    </Card>
  );
}


export default News;
