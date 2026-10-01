import * as React from 'react';
import Tabbar from '../Components/Tabbar';
import {DragDropProvider} from '@dnd-kit/react';
import { useState } from 'react';
import StickyNote from '../Components/StickyNote';
import Board from '../Components/Board';
import Grid from '@mui/material/Grid';


function Homepage() {


  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const header_style = {
    padding: "48px",
    borderWidth: "0px 0px 2px 0px",
    borderStyle: "none none solid none"
   };

  const sticky_container_style = {
    padding: "48px",
    borderWidth: "0px 0px 2px 0px",
    borderStyle: "none none solid none"

   };

   const hero_image_style = {
    padding: "8px", 
    margin:"0px",
    display: "flex",
    justifyContent: "flex-start",
    gap: "56px"

   };

   const title_style = {
    padding: "8px", 
    margin:"0px",
    display: "flex",
    justifyContent: "flex-end"

   };

  const [project, setProject] = useState("");
  const [problem, setProblem] = useState("");
  const project_texts = ["accessible museum exhibits", "a location-based game", "component libraries"];
  const problem_texts = ["people can play with data through sounds", "freshmen navigate their first year", "artists engineer their own tools"];
  const stickyIds : Array<string> = [];
  project_texts.forEach((_, index) => {
    stickyIds.push("red_" + index);
    stickyIds.push("green_" + index);

  })


  const projects= [

        {   
            link: "Accessible_Oceans",
            name: "A Sanctuary in Sound",
            subtitle: "Designing multimodal museum displays @ Georgia Tech",
            dates: "Fall 2025 - Fall 2026",
            type: "Academic Research"
        },

        {   
            link: "ScottyU",
            name: "ScottyU",
            subtitle: "Designing a game for the first-year experience @ CMU",
            dates: "Spring 2025",
            type: "Design Capstone"
        },
      // {   
        //     link: "pixar",
        //     name: "Xscripts & Webapp Components",
        //     subtitle: "Designing a game for the first-year experience @ CMU",
        //     dates: "Summer 2026",
        //     type: "Industry Internship"
        // }
        ];


  function onDropStickyNote(event : any){
                    console.log(event.operation.target?.id);
                    if (event.canceled) 
                    {
                      return;
                    }
                    if(event.operation.target?.id === 'projects' &&
                      (event.operation.source?.id as string).split("_")[0] == "red")
                    {
                      setProject(event.operation.source?.id as string);
                      setProblem("green_" + (event.operation.source?.id as string).split("_")[1]);
                    } else if(event.operation.target?.id === 'problems' &&
                      (event.operation.source?.id as string).split("_")[0] == "green")
                    {
                      setProblem(event.operation.source?.id as string);
                      setProject("red_" + (event.operation.source?.id as string).split("_")[1]);
                    } else if (!event.operation.target
                      && (event.operation.source?.id === project ||
                        event.operation.source?.id === problem)
                      )
                      {
                        setProject("");
                        setProblem("");
                      }
    }
  return (
    <div className="Homepage">
        <Tabbar page={0} horizontal={true}/>
        
        <div style={header_style} className='graph_paper'>
          <div className="heroImage">
            <img alt="Emily in her graduation robes looking forward and smiling." style={{width:"50%", maxWidth: "256px", minWidth: "150px", objectFit: "contain"}} src="emily.png"/>
          <div style={{alignContent: "center"}}>
            <h1 style={{paddingBottom: "8px", margin:"0px"}}>HELLO! I'M EMILY :D</h1>
            <h4  style={{padding: "0px", margin:"0px"}} className="subtitle">I'm a designer, researcher, and developer.</h4>
          </div>
          </div>
        </div>

         <div style={sticky_container_style} className='graph_paper'>
          <div style={hero_image_style}>
          <div style={{alignContent: "center"}}>

                <DragDropProvider
                  onDragEnd={onDropStickyNote}
                >
                  <Grid container spacing={2}>
                  <Grid size={{xs: 12, md: 4}}>
                  <h3 style={{padding: "0px", margin:"0px"}} >I've investigated how</h3>                 
                    

                    <Board id="problems">
                     {problem && <StickyNote color="green" id={problem} text={problem_texts[parseInt(problem.split("_")[1])]}/>}
                    </Board>

                      <h3 style={{padding: "0px", margin:"0px"}} >In order to create</h3>                 


                    <Board id="projects">
                     {project && <StickyNote color="red" id={project} text={project_texts[parseInt(project.split("_")[1])]}/>}
                    </Board>
                    </Grid>

                    <Grid size={{xs: 12, md: 8}}>

                    <Grid container spacing={2}>
                    {stickyIds.map((id) => {
                    let color = id.split("_")[0];
                    let index = parseInt(id.split("_")[1]);
                    let text = color === "green" ? problem_texts[index] : project_texts[index]; 
                    return (id != project) && (id != problem) && <Grid size={{xs: 12, md: 4}}><StickyNote id={id} key={id} color={color} text={text}/></Grid>
                  })} 
                  </Grid>  

                  </Grid>  
                  </Grid>

                </DragDropProvider>
          </div>
          </div>
        </div>

    </div>
  );
}


export default Homepage;
