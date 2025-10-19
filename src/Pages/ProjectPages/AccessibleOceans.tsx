import React from 'react';
import Card from '../../Components/Card';


function AccessibleOceans() {

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
  How can we design auditory displays to facilitate conversations about issues affecting Georgia's coastal and marine ecosystems for both sighted and visually impaired learners in informal environments? 

    </h3>}>
    <div style={updatesStyle}>
    <p style={{fontSize: "1em"}}>Interactive displays of scientific data in museums can be a powerful informal learning experience for supporting data literacy. These displays, however, often rely on communicating information visually, which can be inaccessible for blind and low vision (BLV) learners. In this project, we are prototyping museum displays that use texture and sound-based representations of habitat and temperature data about Gray's Reef National Marine Sanctuary. </p>

      <p style={{fontSize: "1em", fontWeight:"bold"}}>Materials and Updates</p>
    <ul style={{fontSize: "1em"}}>
      <li><b>Fall 2025:</b> We have created several prototypes and are evaluating them this semester. Read more on  <a href="https://tiles.cc.gatech.edu/2025/09/09/a-sanctuary-in-sound/" target="_">the project page</a>. </li>
    </ul>
    </div>
    </Card>
  );
}


export default AccessibleOceans;
