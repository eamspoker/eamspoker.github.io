import { Grid } from '@mui/material';
import Tabbar from '../../Components/Tabbar';

function AccessibleOceans () {

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




   return<div style={{height: "100vh"}}>
            <Tabbar page={2}/>

   <div style={headerStyle}>
    <h1 data-heading="A Sanctuary in Sound">A Sanctuary in Sound</h1>
   </div>
   <div style={projectPageStyle}>

<Grid container columnSpacing={3} rowSpacing={1}>
<Grid size={{xs: 12, md: 8}} sx={{height: "min-content"}}> 
       <iframe width="100%" height="500px" src="https://embed.figma.com/deck/dDEWF2J1ODCV1LgxMPm0IS/A-Sanctuary-in-Sound-Overview?node-id=1-140&viewport=-98%2C-70%2C0.48&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share" allowFullScreen></iframe>
    </Grid>
<Grid size={{xs: 12, md: 4}}>
    <div style={callOutStyle2} className="graph_paper">
<h4 data-heading="**Type**: Academic Research" dir="auto"><b>Type</b>: Academic Research</h4>
<h4 data-heading="**Dates:** Fall 2025 - Fall 2026" dir="auto"><b>Dates:</b> Fall 2025 - Fall 2026</h4>
<h4 data-heading="**Type**: Academic Research" dir="auto"><b>Read more:</b></h4>
    <ul>
        <li><a href="https://www.cc.gatech.edu/news/new-touchable-sound-museum-display-makes-data-more-accessible" target="_">New 'Touchable Sound' Museum Display Makes Data More Accessible</a></li>
        <li>ACM Conference on Tangible, Embedded, and Embodied Interaction, <i>Touchable Sound: Exploring Spatial Ocean Data Through Tangible and Auditory Displays</i>
            <ul>
                <li> <a href="https://dl.acm.org/doi/10.1145/3731459.3779335" target="_">Paper</a></li>
                <li><a href="https://drive.google.com/file/d/1UjiNB7b9Ghj_UvM9KHHk5dttRzPRvc-i/view?usp=sharing" target="_">Poster</a></li>
            </ul>
       </li>
        
    </ul>
</div>

</Grid>


<Grid size={{xs: 12, md: 6}} sx={{height: "min-content"}}> 
    <h2 data-heading="Project Description" dir="auto">Project Context & Team</h2>

<p dir="auto">Interactive displays of scientific data in museums can be a powerful informal learning experience for supporting data literacy. These displays, however, often rely on <b>communicating information visually,</b> which can be <b>inaccessible</b> for blind and low vision (BLV) learners. In this project, we are prototyping museum displays that use <b>texture</b> and <b>sound</b>-based to communicate marine science data to the public. In particular, we are looking at the following research questions:</p>
<div className="graph_paper callOutStyle">
<h4 data-heading="**RQ1:** How do we make informal learning spaces like aquariums and museums more accessible for blind and low-vision (BLV) learners?" dir="auto"><b>RQ1:</b> How do we make informal learning spaces like aquariums and museums more accessible for blind and low-vision (BLV) learners?</h4>
<h4 data-heading="**RQ2**: How can we teach people about local ocean data through informal learning interactions?" dir="auto"><b>RQ2</b>: How can we teach people about local ocean data through informal learning interactions?</h4>
</div>
</Grid>
<Grid size={{xs: 12, md: 6}}> 
<table>
<thead>
<tr>
<th><b>PIs</b></th>
<th><b>Research Assistants</b></th>
</tr>
</thead>
<tbody>
<tr>
<td>Dr. Jessica Roberts, <b>Georgia Institute of Technology</b></td>
<td>Emily Amspoker, <b>Georgia Institute of Technology</b></td>
</tr>
<tr>
<td>Dr. John Bellona, <b>University of Oregon</b></td>
<td>Solyane Berge, <b>Georgia Institute of Technology</b></td>
</tr>
<tr>
<td>Dr. Leslie Smith, <b>Your Ocean Consulting</b></td>
<td>Rhoney Lee, <b>Georgia Institute of Technology</b></td>
</tr>
<tr>
<td>Dr. Amy Bower, <b>Woods Hole Oceanographic Institute</b></td>
<td>Anna Pickney, <b>Woods Hole Oceanographic Institute</b></td>
</tr>
</tbody>
</table>
</Grid>

<Grid size={{xs: 12}}> 
<h2 data-heading="Project Goals & My Role" dir="auto">Project Context</h2>
</Grid>
<Grid size={{xs: 12, md: 8}}> 

<h4 data-heading="When did I join the project?" dir="auto"><b>When did I join the project?</b></h4>
<p dir="auto">This project is a follow-up to the Accessible Oceans project, which focused on on creating podcast-style sonifications of simple graphs. <a data-tooltip-position="top" aria-label="https://accessibleoceans.whoi.edu/" rel="noopener nofollow" href="https://accessibleoceans.whoi.edu/" target="_blank">You can read more about that project here</a>. While these podcasts worked well for sonifications of 1D (time series) data,
2D maps are difficult to represent in this format. Thus, the Sanctuary in Sound project began with the goal of designing interactive sonifications for spatial data. When I joined the project in the fall of 2025, the team had done some initial exploration of sonification of 2D maps using a touchscreen tablet and the MaxMSP software. The interaction was simple: if you drag your finger on the iPad, it would make sounds based on the data at the corresponding point on the visual map. The sound map used in this particular project uses habitat data.</p>
</Grid>
<Grid size={{xs: 12, md: 4}}> 
    <img src={"assets/accessible_oceans/ipad1.png"} style={{width: "100%"}} alt="on the left, a laptop with the software displaying a colored map. On the left, an ipad with a crosshair-style cursor, allowing the user to play a sound triggered from touchscreen input, as the computer based on the point the cursor is at on the ipad."/>
    <p><i>The original iPad-based sound map.</i></p>
</Grid>

<Grid size={{xs:12,md: 8}}>
        <h4 data-heading="What was my role on the project?" dir="auto"><b>What was my role on the project?</b></h4>
    <img src={"assets/accessible_oceans/Fig1-1.png"} style={{width: "100%"}} alt="Map of Gray's Reef National Marine Sanctuary showing the distribution of four habitat types within the research boundary of the sanctuary: flat sand, rippled sand, sparsely colonized live bottom, densely colonized live bottom."/>
    <p><i>Gray's reef substrate map (habitat map) from the National Oceanic and Atmospheric Administration</i></p>

    <p dir="auto">When I joined the project, my role was to design and prototype an <b>interactive display</b> of marine habitat data for a public exhibit focused on local marine sanctuaries. Specifically, the team wanted to create an interactive experience based on the habitat map of Gray's Reef National Marine Sanctuary (above). I was the <b>lead research assistant</b> on this project, and worked with Solyane and Rhoney to work towards this goal, receiving feedback from the PIs throughout our iteration.</p>
</Grid>


<Grid size={{xs: 12, md: 8}}>
<h2 data-heading="Iteration 1" dir="auto">Iteration 1: Lo-Fi Prototype</h2>
<h3 data-heading="Motivation" dir="auto">Motivation</h3>
<p dir="auto">From conversations about Gray's Reef National Marine Sanctuary with our experts Amy and Leslie, the team developed three core learning objectives. These were what we wanted people to take away from our interactive exhibit:</p>
<p dir="auto"><b>(LO1)</b> The ocean floor has many different types of habitats in the same area.  </p>
<p dir="auto"><b>(LO2)</b> In Gray's Reef National Marine Sanctuary (GRNMS), the dominant habitat is sand and the iconic dense reefs are scattered sporadically throughout the map.  </p>
<p dir="auto"><b>(LO3)</b> Different animals are suited to live in different habitat types.</p>
<p dir="auto">In the previous iPad prototype, free-form exploration of the sound map was <b>overwhelming and confusing</b>. So, for my first iteration, I focused on how we might structure this sound-based exploration to support our learning goals.</p>
<h3 data-heading="Prototype" dir="auto">Prototype</h3>
<p dir="auto">I worked on this prototype independently. The system consisted of two main components: a physical structuring of the touchscreen and defined activities designed to structure user interaction. For the first component, I introduced <b>clay barriers</b> around specific touchscreen regions. These regions were limited to only two sounds each, with a final clay barrier placed around an area containing all four sounds. The underlying concept was that users would first be encouraged to compare the two distinct sounds presented in each region, thus helping them become familiar with mapping sound to habitat type. For the second component, I created two structured activities aligned with the learning objectives: </p>
<ul>
<li dir="auto"><b>Drawing</b> the map based on what they heard (LO1 and LO2).</li>
<li dir="auto"><b>Finding</b> where a specific animal, like a clam, would live (LO3).</li>
</ul>
</Grid>
<Grid size={{xs: 12, md: 4}}>
    <img src={"assets/accessible_oceans/lofi.png"} style={{width: "100%"}} alt="the iPad with three clay frames stuck on with masking tape to the touchscreen. Above two of the regions are sticky notes with two habitat names. Below the iPad, there are close-up photos of two sticky notes describing two activities (drawing a map and finding where a clam would be burrowed in the sand)"/>
    <p><i>My lo-fi prototype with activity sticky notes and clay barriers.</i></p>

</Grid>
<Grid size={{xs: 12, md: 8}}>
<h3 data-heading="Informal Feedback" dir="auto">Informal Feedback</h3>
<h4 data-heading="&quot;I have no idea what any of these words mean.&quot;" dir="auto">"I have no idea what any of these words mean."</h4>
<p dir="auto">I gathered feedback using a lo-fi prototype with other students in my lab. I discovered that even with the added structural constraints, users tended to <b>forget what the sounds represented</b>. Even more concerningly, participants were able to interact with the map but <b>missed an entire habitat</b> type (dense live bottom) since the regions were easily passed over due to the scale of the map on the iPad.</p>
</Grid>
<Grid size={{xs: 12, md: 8}}>
<h2 data-heading="Iteration 2: Computer Vision Prototype" dir="auto">Iteration 2: Computer Vision Prototype</h2>
<h3 data-heading="Motivation" dir="auto">Motivation</h3>
<p dir="auto">In Iteration #1, the regions of the map were too small to be detectable. We wanted to <b>explore texture</b>, but the tradeoffs and affordances between texture/sound were unclear. For this reason, we decided to create a series of three prototypes.</p>
<div className="callOutStyle graph_paper">
<h4 data-heading="**Mini-RQ**: What are the **affordances** and **tradeoffs** of using sonified and/or tactile feedback in a display where learners explore (1) the geography of the ocean floor and (2) the relationship between habitat and life?" dir="auto"><b>Mini-RQ</b>: What are the <b>affordances</b> and <b>tradeoffs</b> of using sonified and/or tactile feedback in a display where learners explore (1) the geography of the ocean floor and (2) the relationship between habitat and life?</h4>
</div>
<h3 data-heading="Prototype" dir="auto">Prototype</h3>
<p dir="auto">For this iteration, the team switched over to utilizing a <b>computer vision system</b>. This system detected where a user's finger was relative to a special marker (called an ArUco marker) and played the corresponding habitat sound based on where the projected map would be. This system allowed us to experiment with the relationship between sound and texture. These subsets were <b>designed to test different modalities of feedback</b>: texture only, texture combined with sound, and sound only. </p>
<p dir="auto">To support users in remembering which sound corresponds to which habitat, I added an auditory legend that provided the name, the representative sound, and a description of each habitat. Furthermore, the system included functionality for detecting animal figurines within the projected map area.</p>
</Grid>
<Grid size={{xs: 12, md: 4}}>
    <img src={"assets/accessible_oceans/othermodalities.png"} style={{width: "100%"}} alt="the three laser cut prototypes with their corresponding digital maps"/>
    <img src={"assets/accessible_oceans/fingertracking.png"} style={{width: "100%"}} alt="user exploring a map (left) and their detected position on a rendering of the map (right)"/>

    <p><i>(above, from left to right) the three boards for each type of feedback: auditory and tactile, tactile only, auditory only. (below) the computer vision system mapping a user's finger  to a point on the virtual map.</i></p>

</Grid>
<Grid size={{xs: 12, md: 8}}>
<h3 data-heading="Semi-Structured Interview Study" dir="auto">Semi-Structured Interview Study</h3>
<h4 data-heading="&quot;It was a little bit harder to first remember what those four sounds were, so I have to [...] listen to it.&quot;" dir="auto">"It was a little bit harder to first remember what those four sounds were, so I have to [...] listen to it."</h4>
<p dir="auto">To evaluate the prototype, we conducted four semi-structured interviews. These interviews included:</p>
<ul>
<li dir="auto">Background questions.</li>
<li dir="auto">A map exploration task where participants had to reconstruct the map using Legos or textured tiles. </li>
<li dir="auto">An animal matching activity where participants had to place </li>
<li dir="auto">Post-interview survey and discussion.</li>
</ul>
<p>I tested this prototype with four participants—three sighted individuals and blind or visually impaired (BLV) individual. These interviews provided crucial insights that informed several key refinements to the exhibit design. First, users' <b>struggled to retain associations</b> between specific habitats and their corresponding sounds. To reduce cognitive strain and allow visitors greater agency, we decided to explore allowing users to select from different kinds of sounds to create their own sound mappings.</p>
<p dir="auto">Additionally, we also realized we needed to <b>strengthen the connection between the exhibit activities and real scientific processes</b>. Part of why we were excited about this habitat map specifically was that it was collected using sonar data, a parallel to the sound-based nature of the map. Since we did not have any specific scaffolding around these scientific processes, sighted users especially were confused about why they would want to explore a map using sound. Therefore, a major goal for the next iteration  became to enrich the exhibit's narrative by connecting users' exploration of the sonified map directly with the methodology used in creating the original habitat map.</p>
</Grid>
<Grid size={{xs: 12, md: 4}}>
    <img src={"assets/accessible_oceans/animals.png"} style={{width: "100%"}} alt="A user sticking Lego blocks on a board with their right hand while they touch the sound-only map with their left hand."/>
    <img src={"assets/accessible_oceans/animals2.png"} style={{width: "100%"}} alt="A user placing a stingray figurine on the textured map."/>

    <p><i>(above) the map reconstruction task with Legos. (below) the animal-matching task.</i></p>

</Grid>
<Grid size={{xs: 12, md: 8}}>
<h2 data-heading="Iteration 3: Battleship Prototype" dir="auto">Iteration 3: Battleship Prototype</h2>
<h3 data-heading="Motivation" dir="auto">Motivation</h3>
<p dir="auto">In Iteration #2, interviewees wanted <b>different sounds</b>. We also wanted to connect the activity to <b>scientific data collection processes</b>.</p>
<h3 data-heading="Prototype" dir="auto">Prototype</h3>
<p dir="auto">I developed a collaborative two-player game designed to help players work together on mapping the bottom of the habitat. In this setup, one player acts as if they are “driving a boat” and navigates using a sound-only map, while the second player fills in an empty grid with textured tiles corresponding to habitat, which I will refer to as the <b>“Battleship”-style</b> game. For the auditory experience, we had visitors choose from three distinct kinds of sounds: simple tones, musical motifs, or spoken language (speech).</p>
</Grid>
<Grid size={{xs: 12, md: 4}}>
    <img src={"assets/accessible_oceans/battleship.png"} style={{width: "100%"}} alt="On the left, one player places textured squares on a grid. On the right, another player holds a ship figurine over a grid of the same size."/>
    <p><i>Two players participating in the "Battleship"-style game.</i></p>

</Grid>
<Grid size={{xs: 12, md: 8}}>
<h3 data-heading="Aquarium Evaluation" dir="auto">Aquarium Evaluation</h3>
<h4 data-heading="&quot;It's literally us on the boat!&quot;" dir="auto">"It's literally us on the boat!"</h4>
<p dir="auto">The prototype was tested with a variety of participants, including marine scientists and educators, as well as general aquarium visitors. The group of scientists and educators identified with the "Battleship"-style prototype, exclaiming that it was "literally us on the boat!" This feedback and the subsequent conversation with educators successfully sparked ideas for new types of datasets to explore for the system. For the general public, we observed that the asymmetric gameplay structure <b>facilitated collaboration between family members</b>. While speech was deemed the most functionally effective sound for completing the task, some visitors expressed <b>a preference for more “fun” sounds</b> or sounds that created a more challenging activity.</p>
</Grid>
<Grid size={{xs: 12, md: 4}}>
    <img src={"assets/accessible_oceans/evaluation.png"} style={{width: "100%"}} alt="a study participant fills out a paper survey on a clipboard with a pen."/>
    <p><i>A study participant filling out their post-survey.</i></p>

</Grid>
</Grid>
</div>
</div>
;

}


export default AccessibleOceans;




