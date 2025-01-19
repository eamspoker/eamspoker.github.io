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
            
            Thanks for visiting my personal website! I made this website with React using the Material UI Library. Check out the source code <a style={{color:"gray"}} href="https://github.com/eamspoker/myportfolio/tree/master" target="_blank">here</a>.

          </footer>
          
  );
}


export default Footer;
