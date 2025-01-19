import { Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Tabbar from './Tabbar';
import Footer from './Footer';


type Props = {
  titleItem: React.ReactNode,
  item1: React.ReactNode,
  item2: React.ReactNode,
}
function Title2Item(props: Props) {
  const {titleItem, item1, item2} = props;

  const Item = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  return (
    <div>
                

    
    <Grid container spacing={2}>



        <Grid item xs={12}>
          {titleItem}
        </Grid>

     

        

        <Grid item xs={12} md={8}>
        {item1}
        </Grid>
        


        <Grid item xs={12} md={4}>
        {item2}
        </Grid>       
        </Grid>
        </div>
    
  );
}


export default Title2Item;
