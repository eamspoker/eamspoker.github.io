import { Link } from "react-router-dom";

type Props = 
{
name: string,
  type: string,
  dates: string,
  subtitle: string, 
  link: string, 
  colors: number

}

function ProjectButton(props : Props)
{
    const accent_color = props.colors ? "#A85410" : "#445822";
    const third_color = props.colors ?  "#445822" : "#A85410";


    const buttonStyle = {
        width: "95%",
        height: "fit-content",
        color: "inherit",
        border: "none",
        padding: "16px",
        font: "inherit",
        outline: "inherit",
        borderRadius: "2px",
        borderStyle: "solid",
        justifyContent: "center",
        textAlign: "center" as const,
    
    };

 
    const pillColor = {
        backgroundColor: accent_color,
        color: " #F9F2E1",
        borderRadius: "8px",
        borderWidth: "8px",
         borderStyle: "double",
    };

    const pillColor2 = {
        color: accent_color,
        backgroundColor: " #F9F2E1",
        borderRadius: "8px",
        borderWidth: "4px",
        padding: "12px",
        borderStyle: "solid",
    };


    const pillStyle = {
        width: "fit-content",
        borderRadius: "8px",
        borderColor: accent_color,

    };

    return (
    <Link style={{textDecoration: "none"}} to={props.link}>
        <div style={buttonStyle}>

            <h2 style={{color: accent_color}}>{props.name}</h2>
            <h4 style={{color: third_color}}>{props.subtitle}</h4>
        <div style={{display: "flex", gap: "16px", justifyContent: "center"}}>
        <div style={pillStyle}>
            <p style={pillColor2}>{props.type}</p>
        </div>
         <div style={pillStyle}>
            <p style={pillColor}>{props.dates}</p>
            
        </div>
        </div>
        </div>
    </Link>);

}

export default ProjectButton;