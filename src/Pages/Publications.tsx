import React from 'react';
import Card from '../Components/Card';


function Publications() {

  const descriptionStyle = {
    textAlign: "left" as const,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  }

  const paperStyle = {
    borderRadius: "2%",
    padding: "10px",
  }

  const updatesStyle = {
    textAlign: "left" as const,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    
  }

  return (
    <Card top={<h2 style={descriptionStyle }>
      Publications
    </h2>}>
    <div style={updatesStyle}>
    <p style={{fontSize: "1em"}}>
    <b>Emily Amspoker</b>, Jessica Hammer, Amy Ogan, and Jaemarie Solyst. <i>Augmenting Youths' Critical Consciousness Through Redesign of Algorithmic Systems</i>. Proceedings of the ACM Conference on International Computing Education Research, 2024.
    </p>
    <p style={{fontSize: "1em"}}>
Jaemarie Solyst, <b>Emily Amspoker</b>, Ellia Yang, Yi Luo, Jessica Hammer, and Amy Ogan. <i>Scaffolding Critical Thinking about Stakeholders' Power in Socio-Technical AI Literacy</i>. Proceedings of the ACM Conference on International Computing Education Research, 2024.
</p>
<p style={{fontSize: "1em"}}>
Gabrielle Ohlson, Angelica M. Bonilla Fominaya, Kavya Puthuveetil, Jenny Wang, <b>Emily Amspoker</b>, and James McCann. <i>Estimating Yarn Length for Machine-Knitted Structures</i>. Proceedings of the 8th ACM Symposium on Computational Fabrication, SCF, 2023.
</p>
<p style={{fontSize: "1em"}}>
Huilian Sophie Qiu, Anna Lieb, Jennifer Chou, Megan Carneal, Jasmine Mok, <b>Emily Amspoker</b>, Bogdan Vasilescu, and Laura Dabbish. <i>Climate Coach: A Dashboard for Open-Source Maintainers to Overview Community Dynamics</i>. Proceedings of the ACM CHI Conference on Human Factors in Computing Systems, CHI, 2023.
</p>
<p style={{fontSize: "1em"}}>
<b>Emily Amspoker</b> and Miriam RL Petruck. A Gamified Approach to Frame Semantic Role Labeling. Proceedings of the Fourth Workshop on Data Science with Human-in-the-Loop (Language Advances), 2022.
</p>   
 </div>
    </Card>
  );
}


export default Publications;
