# A Sanctuary in Sound 
#### **Type**: Academic Research

#### **Dates:** Fall 2025 - Fall 2026

## Project Description
Interactive displays of scientific data in museums can be a powerful informal learning experience for supporting data literacy. These displays, however, often rely on **communicating information visually,** which can be **inaccessible** for blind and low vision (BLV) learners. In this project, we are prototyping museum displays that use **texture** and **sound**-based to communicate marine science data to the public. In particular, we are looking at the following research questions:
#### **RQ1:** How do we make informal learning spaces like aquariums and museums more accessible for blind and low-vision (BLV) learners?

#### **RQ2**: How can we teach people about local ocean data through informal learning interactions?

## Project Team

| **PIs**                                                  | **Research Assistants**                              |
| -------------------------------------------------------- | ---------------------------------------------------- |
| Dr. Jessica Roberts, **Georgia Institute of Technology** | Emily Amspoker, **Georgia Institute of Technology**  |
| Dr. John Bellona, **University of Oregon**               | Solyane Berge, **Georgia Institute of Technology**   |
| Dr. Leslie Smith, **Your Ocean Consulting**              | Rhoney Lee, **Georgia Institute of Technology**      |
| Dr. Amy Bower, **Woods Hole Oceanographic Institute**    | Anna Pickney, **Woods Hole Oceanographic Institute** |

## Project Context

#### When did I join the project?
![[Pasted image 20261001131539.png]]

This project is a follow-up to the Accessible Oceans project, which focused on on creating podcast-style sonifications of simple graphs. [You can read more about that project here](https://accessibleoceans.whoi.edu/). While these podcasts worked well for sonifications of 1D (time series) data,
2D maps are difficult to represent in this format. Thus, the Sanctuary in Sound project began with the goal of designing interactive sonifications for spatial data. 

![[Pasted image 20261001131601.png]]

When I joined the project in the fall of 2025, the team had done some initial exploration of sonification of 2D maps using a touchscreen tablet and the MaxMSP software. The interaction was simple: if you drag your finger on the iPad, it would make sounds based on the data at the corresponding point on the visual map. The sound map used in this particular project uses habitat data.
#### What was my role on the project?
![[Pasted image 20261004153131.png]]
When I joined the project, my role was to design and prototype an **interactive display** of marine habitat data for a public exhibit focused on local marine sanctuaries. Specifically, the team wanted to create an interactive experience based on the habitat map of Gray's Reef National Marine Sanctuary (above). I was the **lead research assistant** on this project, and worked with Solyane and Rhoney to work towards this goal, receiving feedback from the PIs throughout our iteration.
## Iteration 1: Lo-Fi "Stencil" Prototype

### Motivation
From conversations about Gray's Reef National Marine Sanctuary with our experts Amy and Leslie, the team developed three core learning objectives. These were what we wanted people to take away from our interactive exhibit:

**(LO1)** The ocean floor has many different types of habitats in the same area.  
  
**(LO2)** In Gray’s Reef National Marine Sanctuary (GRNMS), the dominant habitat is sand and the iconic dense reefs are scattered sporadically throughout the map.  
  
**(LO3)** Different animals are suited to live in different habitat types.

In the previous iPad prototype, free-form exploration of the sound map was **overwhelming and confusing**. So, for my first iteration, I focused on how we might structure this sound-based exploration to support our learning goals.
### Prototype
![[Pasted image 20261004153101.png]]
I worked on this prototype by myself. The prototype consisted of two parts, a physical structuring of the touchscreen and activities to structure the interaction.
- First, I added **clay barriers** around two touchscreen regions that only had two sounds each. A final clay barrier was placed around a region that had all four sounds.
	- The idea was that users would first compare the two sounds in each region to familiarize themselves with the mapping of sound to habitat.
- I created 2 activities based on the learning objectives:
	- **Draw** the map you hear. (LO1, LO2)
    - **Find** where a clam would live. (LO3)
### Informal Feedback
#### "I have no idea what any of these words mean."
I elicited feedback using lo-fi prototype with other students in my lab. I found that even with the added structure, users kept **forgetting what the sounds meant**. Even more concerningly, users **missed an entire habitat** while interacting with the map. Since we were constrained by size of the iPad, we **finish sentence**.
## Iteration 2: Computer Vision Prototype
#### I presented this work at the 2025 ACM Tangible, Embedded, and Embodied Interaction (TEI) Conference. Read the paper [here](https://dl.acm.org/doi/10.1145/3731459.3779335).

### Motivation
In Iteration #1, the regions of the map were too small to be detectable. We wanted to **explore texture**, but the tradeoffs and affordances between texture/sound were unclear. For this reason, we decided to create a series of three prototypes.
#### **Mini-RQ**: What are the **affordances** and **tradeoffs** of using sonified and/or tactile feedback in a display where learners explore (1) the geography of the ocean floor and (2) the relationship between habitat and life?

### Prototype
- Switched over to a computer vision system.
- Created three 8x8 subsets of the map.
	- Texture, texture + sound, sound
- Added a legend with auditory descriptions of each map.
- Included detection of animal figurines.

### Semi-Structured Interview Study
- Interviews included:
	- Background questions
    - Map exploration and Lego activity
    - Animal matching activity
    - Post-interview survey
    - Post-interview discussions
- Tested with 4 participants (3 sighted, 1 BLV)
- Wanted more diverse sounds.
    - BLV user counted rows and columns based on their absolute position on the map.
    - Sighted users didn’t understand why they would want to listen to a sound-based map.

## Iteration 3: Battleship Prototype

### Motivation
In Iteration #2, interviewees wanted **different sounds**. We also wanted to connect the activity to **scientific data collection processes**.
### Prototype
- Created a 2-player game where players work together to map the bottom of the habitat.
- One player “drives a boat” on a sound-only map.
    - The other player
- “Battleship”-style grid system for easy communication about positioning.
- Choice of three kinds of sounds: simple, music, speech
### Aquarium Evaluation
- Tested with marine scientists/educators, aquarium visitors.
- Scientists/educators identified with the prototype.
- “That’s literally us on the boat!”
    - Sparked ideas for new datasets to explore.
- A variety of visitors interacted with the prototype.
- Asymmetric gameplay helped families collaborate.
    - Speech was the most effective for the task, but there was preference for more fun sounds.