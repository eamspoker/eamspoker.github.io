import React from 'react';
import Card from '../Components/Card';


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
    <Card top={<h2 style={descriptionStyle }>
      About Me
    </h2>}>
    <div style={aboutMeStyle}>
    <p style={descriptionStyle}>
      I'm a current PhD Student at <a target="_blank" href="https://www.gatech.edu/">Georgia Tech</a> 
       in the <a target="_blank" href="https://www.cc.gatech.edu/degree-programs/phd-human-centered-computing">Human-Centered Computing program</a>. 
      Specifically, I am advised by Dr. Jessica Roberts in the <a target="_blank" href="https://tiles.cc.gatech.edu/">Tiles Lab</a>.
    </p>
  
    </div>
    </Card>
  );
}


export default AboutMe;
