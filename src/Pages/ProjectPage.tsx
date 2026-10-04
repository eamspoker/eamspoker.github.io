import Markdown from 'react-markdown'
import { useState, useEffect } from 'react';
import Tabbar from '../Components/Tabbar';
import WrapperPage from './WrapperPage';
import remarkGfm from 'remark-gfm';

type Props = {
    project: string
}
function ProjectPage(props: Props) {

   const {project} = props;
   const [description, setDescription] = useState("");
   const projectPageStyle = {
    padding: "48px",
    paddingTop: "16px",
   }

   useEffect(() => {
    fetch("/project_descriptions/" + project + ".md")
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.text()
        })
        .then((project_text) => {
            console.log(project_text)
            setDescription(project_text);
        })
        .catch((e) => console.error(e));
   }, [])

   return <div>
            <Tabbar page={2}/>
            <WrapperPage>
            <div className="graph_paper" style={projectPageStyle}>
                <Markdown remarkPlugins={[remarkGfm]}>{description}</Markdown>
            </div>
            </WrapperPage>
            </div>;

}


export default ProjectPage;
