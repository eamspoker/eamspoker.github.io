import React from 'react';
import Card from '../../Components/Card';


function SeniorThesis() {

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
      How can youth be supported in recognizing how potential harms can be created by the algorithmic systems that they regularly use?
    </h3>}>
    <div style={updatesStyle}>
    <p style={{fontSize: "1em"}}>For my senior thesis, I am co-designing a <b>transformational game</b> with youth to help them recognize and take action against algorithmic harms in social media systems. 
    This project focuses on utilizing game design to support youth <b>computational empowerment</b>. I am being advised by Dr. Jessica Hammer and Dr. Jaemarie Solyst.</p>

      <p style={{fontSize: "1em", fontWeight:"bold"}}>Materials and Updates</p>
    <ul style={{fontSize: "1em"}}>
      <li><b>Fall 2024:</b> Based on the thematic analysis of a preliminary co-design workshop with youth, playing and adding on to a prototype version of game supported youth understanding of 
      biased representations of underrrepresented groups, misinformation, and data privacy/ownership. Read more in my <a href="https://docs.google.com/presentation/d/1aZYrR2qgm9B3f1wVaPb7AtbAHWWwPDj5/edit?usp=sharing&ouid=109394377489740209266&rtpof=true&sd=true" target="_"> poster for CMU's 07-599: Senior Research Thesis class</a>. </li>
    </ul>
    </div>
    </Card>
  );
}


export default SeniorThesis;
