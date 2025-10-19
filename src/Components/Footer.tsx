import { Grid } from '@mui/material';
import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function Footer() {


    const footerStyle = {
        marginTop: "auto",
        padding: "10px",
        color: "gray"
    };
    const iconStyle = {
      padding: "10px",
    }
  return (
          <footer style={footerStyle}>
            
            Thanks for visiting my personal website! I made this website with React using the Material UI Library.

          </footer>
          
  );
}


export default Footer;
