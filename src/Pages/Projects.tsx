import ProjectButton from "../Components/ProjectButton";
import Tabbar from "../Components/Tabbar";

function Projects()
{
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

        {   
            link: "Cosmend",
            name: "Cosmend",
            subtitle: "Designing a board game to teach K-12 learners about social media recommendation systems for my senior thesis @ CMU",
            dates: "Spring 2025 - Summer 2025",
            type: "Academic Research"
        },

         {   
            link: "Accessible_Pittsburgh",
            name: "Accessible Pittsburgh",
            subtitle: "Designing a smart parking system for the city of Pittsburgh @ CMU",
            dates: "Fall 2023",
            type: "Coursework"
        },


        // {   
        //     link: "europaPrime",
        //     name: "Europa Prime",
        //     subtitle: "Designing a VR experience to increase neurodivergent students' interest in awareness of STEM concepts @ TERC",
        //     dates: "Summer 2024",
        //     type: "REU Project"
        // },

        // {   
        //     link: "pixar",
        //     name: "Xscripts & Webapp Components",
        //     subtitle: "Designing a game for the first-year experience @ CMU",
        //     dates: "Spring 2025",
        //     type: "Academic Research"
        // },

    ]; 
    
    const projectButtons = projects.map ( (project, index) => {
                return <li style={{margin:"16px"}}>
                <ProjectButton colors={index%2} link={project.link} name={project.name} subtitle={project.subtitle} dates={project.dates}  type={project.type}/>
                </li>;
            });
   return(<div>
    <Tabbar page={2}/>
    <div style={{padding:" 32px"}}>
    <h1 style={{paddingBottom: "px", margin:"0px"}}>Projects</h1>


        <ul style={{listStyleType:"none"}}>
            {
                projectButtons
            }
        </ul>
    </div>
</div>);
}
export default Projects;