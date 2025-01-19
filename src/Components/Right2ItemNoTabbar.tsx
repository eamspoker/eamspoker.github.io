import { Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Tabbar from './Tabbar';
import Footer from './Footer';


type Props = {
  smallItem: React.ReactNode,
  bigItem: React.ReactNode,
  
}
function Right2ItemNoTabbar(props: Props) {
  const {smallItem, bigItem} = props;

  const Item = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  

  return (
    <div>
                

    
    <Grid container spacing={2}>


        <Grid item xs={12}>
        </Grid>

        <Grid item xs={3} md={1}>
        </Grid>


        

        <Grid item xs={6} md={2}>
        {smallItem}

        </Grid>
        


        <Grid item xs={12} md={8}>
        {bigItem}
        </Grid>       
        </Grid>
        </div>
    
  );
}


export default Right2ItemNoTabbar;
