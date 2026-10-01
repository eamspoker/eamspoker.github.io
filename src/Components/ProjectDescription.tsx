import { Paper } from '@mui/material';

type Props = 
{
  name: string,
  skills: string,
  titles?: Array<string>,
  sections?: Array<string>,
}
function ProjectDescription(props: Props) {
  const {name, skills} = props;
  const descriptionStyle = {
  }

  const headerStyle = {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  }


  const paperStyle = {
    borderRadius: "2%",
    padding: "8px",
  }

  return (
    <div style={paperStyle} >
    <header style={headerStyle}>
        <h1>
          {name}
        </h1>
        <h4 style={descriptionStyle}>{skills}</h4>
      </header>
      </div>
  );
}


export default ProjectDescription;
