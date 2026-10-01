import React from 'react';
import {useDraggable} from '@dnd-kit/react';

type Props = 
{
    color: string,
    id: string,
    text?: string
}

function StickyNote(props: Props) {

     const {ref} = useDraggable({
        id: props.id,
    });

    const stickyNoteStyle = {
         width: "175px",
         padding: "8px",

    aspectRatio: "360 / 320",
        backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderWidth:"2px",
    borderStyle: "none"
    };
    

    
    return (
        <div style={stickyNoteStyle} className={props.color+"_sticky"} ref={ref}>
        {props.text}
        </div>
    );
}


export default StickyNote;