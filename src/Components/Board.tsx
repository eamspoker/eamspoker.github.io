import React from 'react';
import {useDroppable} from '@dnd-kit/react';
import PushPinIcon from '@mui/icons-material/PushPin';
type Props = 
{
    children?: React.ReactNode,
    id?: string
    
}

function Board(props: Props) {

    const id = props.id ? props.id : "";
    const children = props.children;
    
    const cardContentStyle = {
        borderStyle: "solid",
        borderWidth: "2px",
        padding: "0px",
        marginTop: "0px",
        marginLeft: "0px"
    };

    const boardStyle = {
        width: "fit-content",
        minWidth: "100px",
        margin: "8px",
        padding: "16px",
        borderStyle: "solid", 
        borderRadius: "8px",
        color: "#F9F2E1",        
        backgroundColor: props.id == "problems" ? "#445822" : "#A85410",
        filter: "drop-shadow(0px 0px 4.5px #0000004b)"
    };

     const {ref} = useDroppable({
            id,
    });
    const pinStyle = {
        top: "8px",
        left: "8px",
        paddingRight: "16px",
        rotate: "-45deg"
    }

    
  return (
    <div ref={ref} style={boardStyle}>
        <PushPinIcon style={pinStyle}/>
      {children}
    </div>
          
  );
}


export default Board;