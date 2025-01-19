import React from 'react';
import Card from '../../Components/Card';


function StimObjects() {

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
    <Card top={<h3 style={descriptionStyle }>
      How might we leverage machine knitting techniques to support autistic people in their stimming?
    </h3>}>
    <div style={updatesStyle}>
    <p style={{fontSize: "1em"}}>
      I am working as a research assistant on a project focused on (1) <b>understanding the stimming experiences</b> of autistic individuals 
      and (2) using that understanding to <b>fabricate custom stim objects</b> with machine knitting technologies.
      This project is led by Gabrielle Ohlson and is advised by Dr. Andrew Begel and Dr. Jim McCann, with support from Dr. Andrew Hundt.
      </p>
      <p style={{fontSize: "1em", fontWeight:"bold"}}>Materials and Updates</p>
    <ul style={{fontSize: "1em"}}>
      <li><b>Spring 2024:</b> I led the analysis of over 60 survey participants' responses to 9 qualitative questions. I used a constructivist grounded theory approach.</li>
      <li><b>Fall 2023:</b> I helped design and deploy a survey about participants' sensory experiences with stimming, perceptions of stimming, and preferences for stim objects.</li>
      <li><b>Summer 2023:</b> Prior to beginning the study, I gained familiarty with machine knitting techniques by writing code for a project about estimating yarn length for machine-knit objects. <a href="https://dl.acm.org/doi/abs/10.1145/3623263.3623355" target="_">Read the paper from SCF '23 here.</a></li>

    </ul>
    </div>
    </Card>
  );
}


export default StimObjects;
