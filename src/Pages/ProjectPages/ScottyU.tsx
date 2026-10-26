import { Grid } from '@mui/material';
import Tabbar from '../../Components/Tabbar';

function ScottyU () {

    // Markdown
   const projectPageStyle = {
    padding: "48px",
    paddingTop: "16px",
    borderTop: "0px",



   }

    

   const callOutStyle2 = {
    padding: "16px",
    paddingTop: "0px",
    border: "2px solid",
    height: "min-content",
    marginBottom: "16px"


   }

  const headerStyle = {
    textAlign: "center" as any,
    borderBottom: "2px solid",
   }




   return <div style={{height: "100vh"}}>
            <Tabbar page={2}/>

   <div style={headerStyle}>
    <h1 data-heading="A Sanctuary in Sound">ScottyU</h1>
   </div>
   <div style={projectPageStyle}>

<Grid container columnSpacing={3} rowSpacing={1}>
<Grid size={{xs: 12, md: 8}} sx={{height: "min-content"}}> 
       <iframe style={{border: "2px"}} width="100%" height="500px" src="https://www.youtube.com/embed/tF07qi-UCx8?si=kah_Vr1VLk77pmnk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </Grid>
<Grid size={{xs: 12, md: 4}}>
    <div style={callOutStyle2} className="graph_paper">
<h4 data-heading="**Type**: Senior" dir="auto"><b>Type</b>: Senior Capstone Project</h4>
<h4 data-heading="**Dates:** Fall 2025 - Fall 2026" dir="auto"><b>Dates:</b> Spring 2025</h4>
<h4 data-heading="**Type**: Academic Research" dir="auto"><b>Read more:</b></h4>
    <ul>
        <li>Final Deliverable
            <ul>
                <li> <a href="https://drive.google.com/file/d/1qmhO2kx32YN31He2bz1V5HopRC50lDn7/view?usp=sharing" target="_">Presentation</a></li>
                <li><a href="https://drive.google.com/file/d/1Q4Ewpzj42R-mDfhRI0q4AKrKsk-dZo48/view?usp=sharing" target="_">Report</a></li>
            </ul>
       </li>
        <li>
            <a href="https://www.youtube.com/watch?v=dQ3ljwqVHck" target="_">Mid to Hi-Fi Prototype Presentation</a>
       </li>
        
    </ul>
</div>

</Grid>


<Grid size={{xs: 12, md: 6}} sx={{height: "min-content"}}> 
<h2 data-heading="Project Context &amp; Team" dir="auto">Project Context & Team</h2>
<p dir="auto">This work is the product of our senior capstone in Human-Computer Interaction (HCI) at Carnegie Mellon University (CMU). Our client was the CMU Department of Modern Languages, specifically Dr. Sébastien Dubreil, who, alongside his collaborators Dr. Lauren Herckis, Dr. Korryn Mosizek, and Dr. Kelly Maxwell noticed a growing need to support first-year CMU students in their transition from high school to college. Our client tasked us with creating a playful mobile experience to support first-year students in finding resources and developing soft skills needed to succeed at CMU. In summary, our team defined our problem, our goal, and our solution as:</p>
</Grid>

<Grid className="callOutStyle" size={{xs: 12, md: 3}}> 
<h3><b>Clients</b></h3>
<ul>
    <li>Dr. Sébastien Dubreil</li>
    <li>Dr. Lauren Herckis</li> 
    <li>Dr. Korryn Mosizek</li>
    <li>Dr. Kelly Maxwell</li>
</ul>
</Grid>

<Grid className="callOutStyle" size={{xs: 12, md: 3}}> 
<h3><b>Team</b></h3>
<ul>
    <li>Janelle Tecson</li>
    <li>Emily Amspoker</li> 
    <li>Connie Kim</li>
    <li>Shirley Du</li>
    <li>Tian Zhou</li>
    <li>Denise Hardman (Capstone Advisor)</li>
</ul>
</Grid>

<Grid size={{xs: 12}}> 
<div className="callOutStyle graph_paper">
<p dir="auto"><b>Problem</b><br></br>
Incoming CMU first-year students often struggle to adapt to the rigorous, high-pressure environment, which contrasts sharply with their prior high school academic success.</p>
<p dir="auto"><b>Goal</b><br></br>
We want to design a playful mobile experience that empowers students to confidently navigate their first year, build essential skills, and establish a strong foundation for success at CMU and beyond.</p>
<p dir="auto"><b>Methods</b><br></br>
We approached this problem using an iterative design process, starting from extensive primary and secondary research with multiple stakeholders (semi-structured interviews, contextual inquiry interviews, digital observations, and literature reviews). 
<br></br>
<br></br>We then used ideation techniques like Crazy 8's brainstorming, journey mapping, and feature prototype to develop our initial idea. 
<br></br>
<br></br>After forming our initial idea, we drew on techniques and tools like whiteboard prototyping, Figma, Wizard of Oz methods, think-alouds, and affinity diagramming to support the iterative development of the game based on stakeholder feedback. </p>
<p dir="auto"><b>Solution</b><br></br>
We created a high fidelity Figma prototype of a mobile game (along with a "technical slice" of the game implemented in code) that includes an interactive tutorial that guides the user through our app's skill building features.</p>
</div>
</Grid>

<Grid size={{xs: 12, md: 8}}> 
<h3 data-heading="Background Research" dir="auto">Background Research</h3>
<p dir="auto">We began with extensive investigation into the first-year experience at CMU and in general, relying on both primary and secondary research. Our research was sparked and guided by the following four questions:</p>
<ol>
<li dir="auto">What experiences contribute to success for first-year students?</li>
<li dir="auto">What are the defining points of a student's experience at CMU?</li>
<li dir="auto">How does first-year students' perceptions of themselves versus CMU's perception of them affect how we built the game?</li>
<li dir="auto">What genre and form should the game take? What would incentivize a first-year student to play a game about their experience?</li>
</ol>
<p dir="auto">To answer these questions, we conducted the following kinds of research.</p>
<ul>
<li dir="auto">A <b>literature review</b> of 14 academic papers about the first-year experience (Q1, Q3).</li>
<li dir="auto"><b>Interviews with 11 faculty and staff</b> (4 first-year professors, 2 teaching assistants, 3 first-year resident assistants, 1 academic advisor, and 1 member of the first-year orientation staff) to better understand their expectations of and the resources available to first-year students (Q1, Q2, Q3).</li>
<li dir="auto"><b>Interviews with 12 students</b> (2 first-year students, 1 sophomore, 3 juniors, and 6 seniors) where we had interviews participate in three activities. We also asked upperclassmen about how their first year affected the rest of their college experience (Q2, Q3):
<ul>
<li dir="auto">A <b>pie-chart filling exercise</b> to help them reflect on their daily life.</li>
<li dir="auto">A <b>journey mapping activity</b> to help them reflect on their first semester and year.</li>
<li dir="auto">A <b>card-sorting activity</b> categorizing resources as important, not important, or not heard of before.</li>
</ul>
</li>
<li dir="auto"><b>Digital observations</b> of the Class of 2028+ Discord server, an online group where first-year students socialize and ask questions. We were particularly interested in how upperclassmen in the server acted as informal mentors for first-year students (Q3).</li>
<li dir="auto">A <b>contextual inquiry</b> interviews with two students (a first-year student and a senior) where we had interviewees play Pokémon Go in buildings throughout campus to understand how students engaged with location-based features (Q4).</li>
<li dir="auto">A <b>survey</b> with 49 respondents where we asked students about their game genre preferences, motivations, and habits (Q4).</li>
<li dir="auto">A <b>diary study</b> where we had 10 CMU students log their reflections about their daily Duolingo practice for a week to understand moments of frustration and joy in a daily educational game (Q4).</li>
</ul>
<p dir="auto">For the research around the first-year experience (Q1-Q3), we used <b>affinity diagramming</b> to derive the following five insights:</p>
<h4 data-heading="Insight 1: A Sense of Belonging" dir="auto">Insight 1: A Sense of Belonging</h4>
<p dir="auto">Low-pressure environments (spending time with friends, inclusive clubs, etc.) create a sense of belonging for first-year students. This sense of belonging is key for students' emotional well-being.</p>
<h4 data-heading="Insight 2: Barriers to Belonging" dir="auto">Insight 2: Barriers to Belonging</h4>
<p dir="auto">Students face mental, social, and academic pressure, which hinders the development of this sense of belonging. First, students may feel pressure to socialize and develop a fear of missing out. Along with social pressure, students face a competing academic pressure and CMU's grind culture, which may prevent them from participating in social activities. </p>
<p dir="auto">Finally, many of the students we interviewed struggled with imposter syndrome, which causes them to doubt their own abilities and compare themselves to their peers, further impacting their sense of belonging.</p>
<h4 data-heading="Insight 3: Student Engagement with Resources" dir="auto">Insight 3: Student Engagement with Resources</h4>
<p dir="auto">In our interviews, especially in the card-sorting activity, we found that students were unaware of or uncertain about the relevance of many key resources identified by faculty and staff. Many of the students, however, relied on "people resources" (i.e. TAs, professors, and advisors) as well as academic/professional support resources (e.g. office hours and the Career and Professional Development Center). Students also highlighted the role of extracurriculars in their personal growth.</p>
<h4 data-heading="Insight 4: Mentorship in College" dir="auto">Insight 4: Mentorship in College</h4>
<p dir="auto">We found that in particular, building personal relationships with key-mentors cultivates a better experience for first-year students. First-year students sought out upperclassmen for academic, extracurricular, and social advice. Moreover, we found that a successful first year experience was supported by a network different kinds of mentors (e.g. teaching assistants, resident assistants, etc.). The effects of these mentors extended far beyond the first year, with former first-year students becoming inspired to mentor newer students due to their positive experiences with upperclassmen mentors.</p>
<h4 data-heading="Insight 5: Agency" dir="auto">Insight 5: Agency</h4>
<p dir="auto">The student interviews, staff interviews, and literature reviews each revealed that a core part of first-year success for students is agency. In this case, we defined agency as students understanding their goals and also having he skills to act on them. In particular, it is key that students (1) are able to explore what they're interested in pursuing in the future and (2) are able to reach out for help early and often. </p>
<h4 data-heading="Game Data Insights" dir="auto">Game Data Insights</h4>
<p dir="auto">For the research activities focused on understanding student gaming preferences (Q4), we derived four key features that make an educational game engaging for our audience of CMU students:</p>
<ul>
<li dir="auto">Students value a clear sense of progression and achievement.</li>
<li dir="auto">Competitive elements drive engagement.</li>
<li dir="auto">Personalization increases interest.</li>
<li dir="auto">Habit tracking and integration into daily life helps maintain engagement.</li>
<li dir="auto">Playing with friends is a key motivator.</li>
</ul>
<h4 data-heading="Journey Map" dir="auto">Journey Map</h4>
<p dir="auto">Based on our research, we also created a first-year journey map to guide the development of our game. On this journey map, we marked key emotional points of anxiety, excitement, academic pressure, and impostor syndrome across the first year alongside key academic and social timelines.</p>
<h4 data-heading="Lenses for Ideation and Prototyping" dir="auto">Lenses for Ideation and Prototyping</h4>
<p dir="auto">Based on our five key insights and our journey map, we developed two lenses to think about our project: the social lens and the technical lens.</p>
<p dir="auto">The social lens considers how the game must facilitate <b>low-pressure engagement for students</b>, allowing them to form connections with their peers and mentors. When focusing on this lens, we thought about how the app <b>might facilitate mentorship</b> and utilize storytelling and role-playing elements to <b>support student belonging</b>.</p>
<p dir="auto">The technical lens considers how the mechanics of the game. Specifically, how <b>habit-tracking might promote engagement</b> with the game over time, and how <b>the UI/UX of the game will promote discoverability of features</b>. We also focused on this lens to <b>consider technical challenges,</b> such as multi-player and location-based features.</p>
<h3 data-heading="Ideation &amp; Lo-Fi Prototyping" dir="auto">Ideation &amp; Lo-Fi Prototyping</h3>
<p dir="auto">After synthesizing our background research, our team went through several iterative ideation and lo-fi prototyping exercises to arrive at an initial game idea. After each activity, we would use the artifacts we produce to facilitate discussion with our client around which features to include and how to structure those features. In particular, we were guided by the following questions:</p>
<div className='callOutStyle graph_paper'>
<h4 data-heading="Which of our features foster the most **engagement and excitement** for first-year students?" dir="auto">Which of our features foster the most <b>engagement and excitement</b> for first-year students?</h4>
<h4 data-heading="Which of our features successfully create **healthy habits and skills** for first-year students?" dir="auto">Which of our features successfully create <b>healthy habits and skills</b> for first-year students?</h4>
</div>
<p dir="auto">For initial feature ideation, we used <b><a data-tooltip-position="top" aria-label="https://designsprintkit.withgoogle.com/methodology/phase3-sketch/crazy-8s" rel="noopener nofollow" className="external-link" href="https://designsprintkit.withgoogle.com/methodology/phase3-sketch/crazy-8s" target="_blank">Crazy 8's brainstorming</a></b>, where each member of the team came up with eight ideas in eight minutes. </p>
<p dir="auto">From this initial generation of the prototype, we used t<b>he journey map to prioritize features</b>, mapping features to the parts of the first-year experience they could potentially impact. To further narrow down our set of features, we did a <b>feature prioritization</b> activity, where we sorted features into four quadrants based on two axes: not feasible to feasible and less important to more important. </p>
<p dir="auto">Based on these activities and our ongoing discussions with the client, we identified eight features, which we organized into an <b>information architecture</b>. Based on this information architecture, we sketched an initial user flow onto a whiteboard and chained together pictures of each screen with simple interactions to create <b>an initial lo-fi prototype</b> in Figma. Based on feedback from our client about these prototypes, we further narrowed down to a set of six key features.</p>
<h4 data-heading="Lo-Fi Prototype Features" dir="auto">Lo-Fi Prototype Features</h4>
<p dir="auto">Our game idea is a location-based game with a timeline of upcoming events throughout the year. The mechanics are intentionally simple to allow busy students to play regularly. By checking into events, players complete quests. From these quests, they earn badges and XP (experience points), which correspond to various skills.</p>
<p dir="auto">Students can also discover quotes by upperclassmen scattered throughout the map, which also earns them XP. When students meet faculty members, they can receive and collect faculty trading cards. Each of these features is a directly grounded in our research findings:</p>
<ol>
<li dir="auto">Quests (<i>Insight 1: A Sense of Belonging, Insight 2: Barriers to Belonging</i>)<br></br>
1. In our research, we found that low pressure environments create a better sense of belonging for students due to the absence of prerequisite expectations. Quests provide shared, yet low stakes activities in overwhelming settings (e.g. the first week of classes, the club fair), strengthening this sense of belonging.</li>
<li dir="auto">Badges (<i>Insight 3: Student Engagement with Resources</i>)
<ol>
<li dir="auto">Another key research finding of ours was that some resources have never been used due to a lack of relevance or uncertainty about their usefulness” To remedy this, we associated unlockable badges with quests that involve utilizing specific resources.</li>
</ol>
</li>
<li dir="auto">Skills <i>(Insight 5: Agency)</i>
<ol>
<li dir="auto">In our research, we found that there were a variety of skills that older students and staff pointed to as contributing to a successful first-year. In the game, we visualized efforts towards improving these skills as XP, equating increasing these valuable competencies as leveling up their character.</li>
</ol>
</li>
<li dir="auto">Faculty Cards <i>(Insight 5: Agency)</i>
<ol>
<li dir="auto">Another key aspect of agency is supporting students in reaching out to faculty and staff for help. As one faculty member noted, "professors want students to be comfortable and understand faculty is there for you and wants to help you". To support this, we included a faculty trading card feature, where you can collect cards with information about faculty by meeting them.</li>
</ol>
</li>
<li dir="auto">Timeline <i>(Journey Map)</i>
<ol>
<li dir="auto">The journey map we derived during our research process highlighted the shifting needs and pain points across the first-year experience. To allow the app to adapt to this journey, we included a timeline of events which is accessible from the main screen of the app (which features a map of the physical campus space).</li>
</ol>
</li>
<li dir="auto">Upperclassmen Advice <i>(Insight 4: Mentorship in College)</i>
<ol>
<li dir="auto">In our research, we noticed a "positive feedback loop" where freshmen become mentors to newer students when they become seniors because of their own positive experiences with upperclassmen mentors. To provide some mentorship in the game, real advice from upperclassmen will be hidden throughout the map and will provide an XP boost when discovered.</li>
</ol>
</li>
</ol>
<h3 data-heading="Mid-Fi Prototyping" dir="auto">Mid-Fi Prototyping</h3>
<p dir="auto">After establishing our set of features and game flow, we developed a mid-fi prototype in Figma. </p>
<p dir="auto">We first developed a design system, starting with the colors, patterns, and logos from the <a data-tooltip-position="top" aria-label="https://brand.cmu.edu/visual-identity" rel="noopener nofollow" className="external-link" href="https://brand.cmu.edu/visual-identity" target="_blank">CMU's visual identity</a>. From there, we refined our design system by selecting colors with appropriate contrast following the WCAG guidelines and choosing pixel-art inspired icons, UI elements, and fonts to contribute a retro game feel to the app.</p>
<h4 data-heading="Mid-Fi User Testing" dir="auto">Mid-Fi User Testing</h4>
<p dir="auto">We tested our mid-fi prototype with 8 participants, both students and experts (1 first-year student, 4 upperclassmen, 2 game designers, 1 UX designer). </p>
<p dir="auto">Users were tasked with first doing an open-ended think-aloud session to evaluate feature discoverability. Then, we used  <a data-tooltip-position="top" aria-label="https://www.nngroup.com/articles/wizard-of-oz/" rel="noopener nofollow" className="external-link" href="https://www.nngroup.com/articles/wizard-of-oz/" target="_blank">Wizard of Oz</a> methods to test the location-based features. Users were instructed to go to two different buildings on campus. The interviewer then triggered different tasks in the app for them to complete based on the building.</p>
<h4 data-heading="Mid-Fi Iterations" dir="auto">Mid-Fi Iterations</h4>
<p dir="auto">We then used affinity diagramming to synthesize our findings from the user testing into key insights. We found that most of the feedback centered on clarifying wording, reducing visual clutter, and surfacing features to users. </p>
<p dir="auto">Based on these findings, we created revised version of our information architecture based on users' mental models of the app revealed through their think-aloud explorations of the app.</p>
</Grid>
<Grid size={{xs: 12, md: 8}}> 
<h3 data-heading="Hi-Fi Prototype" dir="auto">Hi-Fi Prototype</h3>
<Grid size={{xs: 12, md: 8}}> 
    <iframe title="Changes from Mid to Hi Fi presentation" width="560" height="315" src="https://www.youtube.com/embed/dQ3ljwqVHck?si=VP_Bz8lJpiaBgrUC" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
   <p><i>Presentation summarizing changes from Mid to Hi-Fi prototype.</i></p>
</Grid>

<h4 data-heading="Changes from Mid-Fi Prototype" dir="auto">Changes from Mid-Fi Prototype</h4>
<p dir="auto">Based on feedback from our mid-fi prototype, we added a tutorial to introduce users to the various game features. We also refined several features by reducing text, renaming menu items, and adding UI details (a red dot on the timeline to indicate interactability, icons on the badges to indicate rewards associated with badges, etc.) to improve clarity.</p>
</Grid>


<Grid size={{xs: 12, md: 8}}> 
<h4 data-heading="Technical Slice" dir="auto">Technical Slice</h4>
<p dir="auto">We also implemented a <a data-tooltip-position="top" aria-label="https://github.com/mobilefys/mobilefys.github.io" rel="noopener nofollow" className="external-link" href="https://github.com/mobilefys/mobilefys.github.io" target="_blank">real location-based interaction in React.js</a> as a "technical slice" of the game to prove feasibility. </p>
<h4 data-heading="Hi-Fi Prototype Alignment with Social and Technical Goals" dir="auto">Hi-Fi Prototype Alignment with Social and Technical Goals</h4>
<p dir="auto">Our final prototype fulfilled the original goals from the social and technical lenses we articulated during our research phase. </p>
<p dir="auto">For the social lens:</p>
<ul>
<li dir="auto">The upperclassmen anecdotes scattered throughout the game map work as a way to <b>integrate peer guidance and mentorship</b> in the app.</li>
<li dir="auto">Collaborative quests and a social page (which allows for connecting with friends and collecting faculty cards) <b>promote connection and seeking mentorship in a low-pressure environment</b>.</li>
</ul>
<p dir="auto">For the technical lens:</p>
<ul>
<li dir="auto">Our tutorial system and other changes from mid-fi prototyping ensure that the <b>game structure is intuitive and features are discoverable</b>.</li>
<li dir="auto">We implemented <b>habit-tracking and progress-based mechanics</b> throughout the game. For example, the timeline feature includes updates on school events throughout the year and the profile page shows student improvement on skills as well as accumulation of badges.</li>
</ul>
</Grid>
<Grid size={{xs: 12}}> 
<h2 data-heading="Final Product - Figma Prototype" dir="auto">Final Product - Figma Prototype</h2>
<iframe title="Hi-Fi Figma Prototype" width="100%" height="450" src="https://embed.figma.com/proto/OCM9AWk86JZRQq3bxIUI6C/Mobile-Game-for-FYS---CMU?node-id=1158-5882&embed-host=share" allowFullScreen></iframe>
</Grid>
<Grid size={{xs: 12, md: 8}}> 

<h2 data-heading="Future Project Goals" dir="auto">Future Project Goals</h2>
<p dir="auto">As this project was for our senior capstone, we highlighted directions for future groups to iterate on our project. These directions included:</p>
<ul>
<li dir="auto">Expanding the variety of quests based on preexisting educational and orientation materials for first-year students at CMU.</li>
<li dir="auto">Collecting and integrating more upperclassmen anecdotes, ensuring that diverse perspectives are represented in the app.</li>
<li dir="auto">Researching and developing the selection of event badges and in-game skills.</li>
<li dir="auto">Enhance the social page and collaborative features to foster interaction between users.</li>
<li dir="auto">And of course, eventually launching the game itself for use by first-year students!</li>
</ul>

</Grid>
</Grid>
</div>
</div>
;

}


export default ScottyU;




