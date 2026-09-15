import { Grid } from '@mui/material';
import {Link } from "react-router-dom";

type Props = {
    page: number;
    horizontal?: boolean;
}
function Tabbar(props: Props) {

   const {page} = props;
   const pages: string[] = ["home", "about me", "projects", "cv"];
   const selectedStyle = {
    fontWeight: "ExtraBold",
    textDecoration: "none"

   };

   const unSelectedStyle = {
    textDecoration: "none",
   };

   const tabItemsStyle = {
    display: "flex",
    justifyContent: "flex-end",
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
       const link = content == "Home" ? "/" : "/" + content.split("/")[0].toLowerCase();
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

  const itemSize = 12/(pages.length);
  return (
    <div className="tabbar" style={tabbarStyle}>

    <div style={nameStyle}>
      <h3>EMILY AMSPOKER</h3>
    </div>

    <div style={tabItemsStyle}>
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
   </div>
              
  );
}


export default Tabbar;
