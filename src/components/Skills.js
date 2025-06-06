import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<section className="skill" id="skills">
				<div className="container">
						<div className="row">
								<div className="col-12">
										<div className="skill-bx wow zoomIn">
												<h2>Skills</h2>
												<p>These are the most relevant skills I've developed through hands-on projects, internships, and coursework. I aim to pursue a career in Data Analytics with a passion for the intersection of Finance and AI. </p>
												<Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
														<div className="item">
																<img src={meter1} alt="Image" />
																<h5>Statistical Data Analysis</h5>
														</div>
														<div className="item">
																<img src={meter2} alt="Image" />
																<h5>Optimization Programming</h5>
														</div>
														<div className="item">
																<img src={meter3} alt="Image" />
																<h5>Machine Learning</h5>
														</div>
														<div className="item">
																<img src={meter1} alt="Image" />
																<h5>Agentic AI Utilization</h5>
														</div>
												</Carousel>
										</div>
								</div>
						</div>
				</div>
				<img className="background-image-left" alt="Image" />
		</section>
	)
}
