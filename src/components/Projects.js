import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
	const classProjects = [
		{
			title: "Security Queue Optimization",
			description: "Advanced Operations and Analytics",
			link: "https://github.com/francescakubica/USC_Checkpoint_Optimization",
			imgUrl: projImg1,
		},
		{
			title: "Data Consulting",
			description: "Statistics & Data Science for Business",
			link: "https://github.com/francescakubica/Claires_Place_Data_Consulting",
			imgUrl: projImg2,
		},
		{
			title: "Used-Car Market Analysis",
			description: "Statistics & Data Science for Business",
			link: "https://github.com/francescakubica/Analyzation_of_Used_Car_Market",
			imgUrl: projImg3,
		},
	];

	const workProjects = [
		{
			title: "SEC Common Stock Filer",
			description: "Streamline Data Entry",
			link: "https://github.com/francescakubica/SEC-Common-Stock-Filer",
			imgUrl: projImg4,
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) =>
								<div className={isVisible ? "animate__animated animate__fadeIn": ""}>
									<h2>Projects</h2>
									<p>Below are projects that showcase my skills in linear/simulation programming, statistical data analysis, business case reports, modeling, and web applications. Please click on each project to learn more! </p>
									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
											<Nav.Item>
												<Nav.Link eventKey="first">Class</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">Work</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="third">Future</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
											<Tab.Pane eventKey="first">
												<Row>
													{classProjects.map((project, index) => (
														<ProjectCard key={index} {...project} />
													))}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<Row>
													{workProjects.map((project, index) => (
														<ProjectCard key={index} {...project} />
													))}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<p>Currently exploring the intersection of Finance and AI Innovation. Stay tuned!</p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" alt="decor" />
		</section>
	);
}
