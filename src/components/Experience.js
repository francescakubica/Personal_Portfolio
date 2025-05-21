import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

import companyLogo1 from '../assets/img/company1.svg';
import companyLogo2 from '../assets/img/company2.png'; 
import companyLogo3 from '../assets/img/company3.png';
import companyLogo4 from '../assets/img/company4.png'; 

export const Experience = () => {
  const experiences = [
	{
	  title: "Finance Business Intelligence Intern",
	  company: "Google",
	  date: "Summer 2025",
	  description: [
		"Incoming Summer 2025 - Finance Data and Analytics Team.",
		"Collaborated cross-functionally to design and implement AI-powered solutions that automate and scale financial processes across Google Finance."
	  ],
	  logo: companyLogo1
	},
	{
	  title: "Founder",
	  company: "Marshall Artificial Intelligence Association",
	  date: "August 2023 – Present",
	  description: [
		"Founded and scaled MAIA to 180+ active members, securing $8,000 in annual funding as a freshman and leading a team of 11.",
		"Pitched and earned top-24 recognition from USC’s Marshall School among 1,500+ clubs by driving AI-business integration in Finance, Biotech, Real Estate, and Entertainment.",
		"Launched weekly R mentorship program and led outreach efforts including industry panels, speaker events, and professional partnerships."
	  ],
	  logo: companyLogo4
	},
	{
	  title: "Statistics and Data Science for Business Teaching Assistant",
	  company: "Marshall School of Business",
	  date: "August 2024 – December 2024",
	  description: [
		"Tutored 15 students 5 hours a week in R and statistics utilizing RStudio (tidyverse, skimr, GGally, infer, lubridate) for linear regression modeling, data visualizations, residual/QQ plotting, hypothesis testing, and data wrangling."
	  ],
	  logo: companyLogo2
	},
	{
	  title: "CURVE Research Fellow",
	  company: "Viterbi School of Engineering",
	  date: "January 2025 – Present",
	  description: [
		"Awarded a $1,250 stipend through the CURVE Scholarship Fellow Program.",
		"Auditing political exposure bias in promoted ads on X (formerly Twitter).",
		"Conducted statistical analysis using the CARC Research database and Python (Jupyter Notebooks).",
		"Applied BERTopic modeling to identify and visualize latent topic clusters in ad content."
	  ],
	  logo: companyLogo3
	}
  ];

  return (
	<section className="experience" id="experience">
	  <Container>
		<h2 className="text-center mb-5">Experience</h2>
		<TrackVisibility once>
		  {({ isVisible }) =>
			<div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
			  {experiences.map((exp, idx) => (
				<Row key={idx} className="mb-4 align-items-center">
				 <Col xs={3} md={2} className="experience-logo-wrapper">
					<img
						src={exp.logo}
						alt={`${exp.company} logo`}
						className="img-fluid experience-logo"
					/>
					</Col>

				  <Col xs={9} md={10}>
					<h4 className="experience-title">{exp.title}</h4>
<h6 className="experience-subheading">{exp.company} | {exp.date}</h6>

					<ul>
					  {exp.description.map((point, i) => (
						<li key={i}>{point}</li>
					  ))}
					</ul>
				  </Col>
				</Row>
			  ))}
			</div>
		  }
		</TrackVisibility>
	  </Container>
	</section>
  );
};
