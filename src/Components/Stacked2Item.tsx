import { Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Tabbar from './Tabbar';
import Footer from './Footer';


type Props = {
  item1: React.ReactNode,
  item2: React.ReactNode,
}
function Stacked2Item(props: Props) {
  const {item1, item2} = props;

  const Item = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  return (
    <div>
                

    
    <Grid container spacing={2}>


        <Grid item xs={12}>
        {item1}
        </Grid>
        


        <Grid item xs={12}>
        {item2}
        </Grid>       
        </Grid>
        </div>
    
  );
}


export default Stacked2Item;
