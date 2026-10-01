import { Grid } from '@mui/material';
import React from 'react';
import Tabbar from './Tabbar';


type Props = {
  smallItem: React.ReactNode,
  bigItem: React.ReactNode,
  optionalTitle?: React.ReactNode,
  page?: number,
}
function Right2Item(props: Props) {
  const {smallItem, bigItem} = props;

  // const Item = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  // }));

  

  return (
    <div>
                

    
    <Grid container spacing={0}>

       <Grid size={{xs:12, md:8}}>
        {bigItem}
        </Grid>

        <Grid size={{xs:12, md:4}}>
        {smallItem}

        </Grid>
        


              
        </Grid>
        </div>
    
  );
}


export default Right2Item;
