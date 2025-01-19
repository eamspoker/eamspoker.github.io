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
      I'm a senior at <a target="_blank" href="https://www.cmu.edu/">Carnegie Mellon University</a>. I study <a target="_blank" href="https://hcii.cmu.edu/academics/hci-undergrad/bs-human-computer-interaction">Human-Computer Interaction</a>, <a target="_blank" href="https://ideate.cmu.edu/undergraduate-programs/design-for-learning/index.html">Design For Learning</a>, and <a target="_blank" href="https://ideate.cmu.edu/undergraduate-programs/game-design/">Game Design</a>.
    </p>
  
    </div>
    </Card>
  );
}


export default AboutMe;
