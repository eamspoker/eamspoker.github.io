import React from 'react';
import { Grid } from '@mui/material';
import { Outlet, Link } from "react-router-dom";
import { BorderColor } from '@mui/icons-material';

type Props = {
    page: number;
    horizontal?: boolean;
}
function Tabbar(props: Props) {

   const {page} = props;
   const pages: string[] = ["Home", "Research", "Games", "CV"];
   const selectedStyle = {
    fontWeight: "bold",
    color: "black",
    textDecoration: "none"

   };

   const unSelectedStyle = {
    textDecoration: "none",

 
  
   };

   const gridStyle = {
    padding: "10px",
    borderWidth: "2px",
    borderStyle: "solid none solid none"
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
    <Grid
  container
  direction={"row"}

  height= {"100%"}
  className="centered"
  spacing={2}
  padding="30px"

  
>

{Array.from(Array(4)).map((_, index) => (
  <Grid style={gridStyle} item xs={itemSize}>
            {LinkItem(index)}
          </Grid>

    ))}


   


</Grid>
  );
}


export default Tabbar;
