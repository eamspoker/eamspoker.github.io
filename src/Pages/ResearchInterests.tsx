import { BorderAll } from '@mui/icons-material';
import { Paper } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import Card from '../Components/Card';
import { Link } from "react-router-dom";

function ResearchInterests() {

  const descriptionStyle = {
    fontSize: "1.5em",
   paddingRight: "10px",
    textAlign: "left" as "left",
    marginLeft: "30px",
    marginRight: "30px"
    
  }

  const listStyle = {
    fontSize: "1.5em",
   paddingRight: "10px",
    textAlign: "left" as "left",
    marginLeft: "30px",
    marginRight: "30px",
    listStyleType: "none"
    
  }

  const headerStyle = {
    backgroundColor: "white",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  }


  const pfpStyle = {
    width: "100%",
    padding: "0px",
    display: "block",
    justifyContent: "right"

  }

  const cardContentStyle = {
    borderStyle: "solid",
    borderWidth: "2px",
    padding: "0px",
    marginTop: "0px",
    marginLeft: "0px"
};


  return (
    <div style={cardContentStyle}>
        <p style={descriptionStyle}> In my research, I aim to: </p>
        <ul style={listStyle}>
          <li><p style={{fontWeight: "bold"}}>Explore how people engage with informal learning spaces like museums or libraries.</p></li>
          <li><p style={{fontWeight: "bold"}}>Develop ways of making these experiences accessible to diverse learners. </p></li>
          <li><p style={{fontWeight: "bold"}}>Use co-design and participatory design approaches.</p></li>
      </ul>

      <p style={descriptionStyle}>
      Learn more about <Link to={"/research"} style={{textDecoration: "underline"}}> my current research projects.</Link>
      </p>
  </div>
      );
}


export default ResearchInterests;
