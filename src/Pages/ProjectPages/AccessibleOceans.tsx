import Markdown from 'react-markdown'
import { useState, useEffect} from 'react';
import remarkGfm from 'remark-gfm';
import { Grid } from '@mui/material';

function AccessibleOceans () {

    // Markdown
   const projectPageStyle = {
    padding: "48px",
    paddingTop: "16px",
    border: "2px solid",
    borderTop: "0px",
    overflow: "scroll",
    height: "100%"


   }

    const callOutStyle = {
    padding: "16px",
    border: "2px solid",


   }

   const embedStyle = {

   }


   return <div style={projectPageStyle}>
<div style={callOutStyle} className="graph_paper">
<h4 data-heading="**Type**: Academic Research" dir="auto"><b>Type</b>: Academic Research</h4>
<h4 data-heading="**Dates:** Fall 2025 - Fall 2026" dir="auto"><b>Dates:</b> Fall 2025 - Fall 2026</h4>
</div>
<h2 data-heading="Project Description" dir="auto">Project Description</h2>
<p dir="auto">Interactive displays of scientific data in museums can be a powerful informal learning experience for supporting data literacy. These displays, however, often rely on <b>communicating information visually,</b> which can be <b>inaccessible</b> for blind and low vision (BLV) learners. In this project, we are prototyping museum displays that use <b>texture</b> and <b>sound</b>-based to communicate marine science data to the public. In particular, we are looking at the following research questions:</p>
<div style={callOutStyle} className="graph_paper">
<h4 data-heading="**RQ1:** How do we make informal learning spaces like aquariums and museums more accessible for blind and low-vision (BLV) learners?" dir="auto"><b>RQ1:</b> How do we make informal learning spaces like aquariums and museums more accessible for blind and low-vision (BLV) learners?</h4>
<h4 data-heading="**RQ2**: How can we teach people about local ocean data through informal learning interactions?" dir="auto"><b>RQ2</b>: How can we teach people about local ocean data through informal learning interactions?</h4>
</div>
<h2 data-heading="Project Team" dir="auto">Project Team</h2>
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
<h2 data-heading="Project Context" dir="auto">Project Context</h2>
<h4 data-heading="When did I join the project?" dir="auto">When did I join the project?</h4>
<p dir="auto">This project is a follow-up to the Accessible Oceans project, which focused on on creating podcast-style sonifications of simple graphs. <a data-tooltip-position="top" aria-label="https://accessibleoceans.whoi.edu/" rel="noopener nofollow" href="https://accessibleoceans.whoi.edu/" target="_blank">You can read more about that project here</a>. While these podcasts worked well for sonifications of 1D (time series) data,
2D maps are difficult to represent in this format. Thus, the Sanctuary in Sound project began with the goal of designing interactive sonifications for spatial data. When I joined the project in the fall of 2025, the team had done some initial exploration of sonification of 2D maps using a touchscreen tablet and the MaxMSP software. The interaction was simple: if you drag your finger on the iPad, it would make sounds based on the data at the corresponding point on the visual map. The sound map used in this particular project uses habitat data.</p>
<h4 data-heading="What was my role on the project?" dir="auto">What was my role on the project?</h4>
<p dir="auto">When I joined the project, my role was to design and prototype an <b>interactive display</b> of marine habitat data for a public exhibit focused on local marine sanctuaries. Specifically, the team wanted to create an interactive experience based on the habitat map of Gray's Reef National Marine Sanctuary (above). I was the <b>lead research assistant</b> on this project, and worked with Solyane and Rhoney to work towards this goal, receiving feedback from the PIs throughout our iteration.</p>
</div>;

}


export default AccessibleOceans;



