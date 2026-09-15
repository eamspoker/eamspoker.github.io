import Card from '../Components/Card';


function AboutMe() {

  const descriptionStyle = {
    textAlign: "left" as const,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    fontSize: "1.5em"
  }

  const paperStyle = {
    borderRadius: "2%",
    padding: "10px",
  }



  const aboutMeStyle = {

  }

  return (
    <Card top={<h2 style={descriptionStyle }>
      About Me
    </h2>}>
    <div className="grid" style={aboutMeStyle}>
    </div>
    </Card>
  );
}


export default AboutMe;
