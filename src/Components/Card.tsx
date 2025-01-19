import React from 'react';

type Props = 
{
    top: React.ReactNode,
    children: React.ReactNode,
    style?: React.CSSProperties | undefined
}

function Card(props: Props) {

    
    const cardContentStyle = {
        borderStyle: "solid",
        borderWidth: "2px",
        padding: "0px",
        marginTop: "0px",
        marginLeft: "0px"
    };

    const topContentStyle = {
        marginTop: "auto",
        borderStyle: "solid",
        borderWidth: "2px",
        borderBottom: "none",
        marginBottom: "0px",
        padding: "0px",
        overflow: "hidden",
        marginLeft: "0px"
    };

    const cardStyle = props.style ? props.style : {};
    
  return (
    <div style={cardStyle}>
        <div style={topContentStyle}>
        {props.top}
        </div>
        
      <div style={cardContentStyle}>
        
        {props.children}
      </div>
      </div>
          
  );
}


export default Card;