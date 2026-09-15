import { Grid } from '@mui/material';
import React from 'react';
import Tabbar from './Tabbar';


type Props = {
  smallItem: React.ReactNode,
  bigItem: React.ReactNode,
  optionalTitle?: React.ReactNode,
  page: number,
}
function Right2Item(props: Props) {
  const {smallItem, bigItem, optionalTitle, page} = props;

  // const Item = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  // }));

  

  return (
    <div>
                

    
    <Grid container spacing={2}>

        <Grid size={{xs:12}}>
        <Tabbar page={page} horizontal={true}/>
        </Grid> 

        <Grid size={{xs:12}}>
        {optionalTitle}
        </Grid> 


         


        <Grid size={{xs:12}}>
        </Grid>

        <Grid size={{xs:3, md:1}}>
        </Grid>


        

        <Grid size={{xs:6, md:2}}>
        {smallItem}

        </Grid>
        


        <Grid size={{xs:12, md:8}}>
        {bigItem}
        </Grid>       
        </Grid>
        </div>
    
  );
}


export default Right2Item;
