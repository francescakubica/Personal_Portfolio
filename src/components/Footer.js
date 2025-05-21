import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
//import navIcon1 from "../assets/img/nav-icon1.svg";
//import navIcon2 from "../assets/img/nav-icon2.svg";
//import navIcon3 from "../assets/img/nav-icon3.svg";
import { Linkedin, Github } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           <div className="social-icon">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/francesca-kubica/"
              target="_blank" rel="noopener noreferrer"
              className="icon-btn"
            >
              <Linkedin size={24} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/francescakubica"
              target="_blank" rel="noopener noreferrer"
              className="icon-btn"
            >
              <Github size={24} />
            </a>
          </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
