import { Grid } from '@mui/material';
import {Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { IconButton } from '@mui/material';
type Props = {
    page: number;
    horizontal?: boolean;
}
function Tabbar(props: Props) {

   const {page} = props;
   const pages: string[] = ["home", "about me", "projects", "resume"];
   const selectedStyle = {
    fontWeight: "bold",
    textDecoration: "none"

   };

   const unSelectedStyle = {
    textDecoration: "none",
   };

   const tabItemsStyle = {
    justifyContent: "flex-end",
   };

   const dropdownItemStyle = {
    justifyContent: "flex-end",
    borderWidth: "0px 0px 2px 0px",
    borderStyle: "none none solid none",
    padding: "8px",
   };
   const dropdownMenuStyle = {
    display: "none"
   };

   const tabItemStyle = {
    paddingRight: "24px"
   };

   const nameStyle = {

   };

   const tabbarStyle = {
    margin: "0px",
    padding: "20px",
    borderWidth: "0px 0px 2px 0px",
    borderStyle: "none none solid none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"    
  }

 
   
   const LinkItem = (index : number) => {
       const content = pages[index];
       const content_nospaces = content.split(" ").join("_");
       const link = content == "home" ? "/" : "/" + content_nospaces.split("/")[0].toLowerCase();
       if (index == page)
       {
        return (
            <Link to={link} style={selectedStyle}>{content}</Link>);
        
       } else {
        

           return (
            <Link style={unSelectedStyle} to={link}>{content}</Link>
   );
       }
   }

   const toggleMenu = () => {
    {
        let menu = document.getElementById("menu");
        let menuIcon = document.getElementById("menuIcon");
        let menuOpenIcon = document.getElementById("menuOpenIcon");

        if (menu && menu.style.display === "block") {
            menu.style.display = "none";
        } else if(menu) {
            menu.style.display = "block";
          
        }
}
   }

  return (
    <div>
        <div className="tabbar" style={tabbarStyle}>

        <div style={nameStyle}>
        <h3>EMILY AMSPOKER</h3>
        </div>

        <div className="tabItems" style={tabItemsStyle}>
        <div style={tabItemStyle}>
            {LinkItem(0)}
        </div>
        <div style={tabItemStyle}>
            {LinkItem(1)}
        </div>
        <div style={tabItemStyle}>
            {LinkItem(2)}
        </div>
        <div style={tabItemStyle}>
            {LinkItem(3)}
        </div>
        </div>

        <div className="hamburger">
            <div className="dropdown">
    <IconButton aria-label="toggle menu" style={{ backgroundColor: 'transparent' }}
        onClick={toggleMenu}>
            <MenuIcon id="menuIcon"/> 
    </IconButton>          
            
            </div>
        </div>
    </div>
    <div id="menu" style={dropdownMenuStyle}>
                    <div style={dropdownItemStyle}>
                        {LinkItem(0)}
                    </div>
                    <div style={dropdownItemStyle}>
                        {LinkItem(1)}
                    </div>
                    <div style={dropdownItemStyle}>
                        {LinkItem(2)}
                    </div>
                    <div style={dropdownItemStyle}>
                        {LinkItem(3)}
                    </div>
                </div>
        </div>
              
  );
}


export default Tabbar;
