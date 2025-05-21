import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import headerImg from "../assets/img/header-img.svg";

import headerImg from '../assets/img/header-img.png';

import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "USC Student", "Google Intern", "Cat Lover" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
           <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio!!</span>
                  <h1>{`Francesca `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "USC Student", "Google Intern", "Cat Lover" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Rising <strong>Junior</strong> attending <strong>USC</strong> pursuing <strong>Artificial Intelligence for Business</strong>. Founder of the <strong>Marshall Artificial Intelligence Association</strong> — building a community of student leaders using AI to reimagine Finance, Real Estate, Entertainment, and BioTech.
                    <br /><br />
                    Currently exploring how <strong>AI + Finance</strong> can shape the future of business decision-making.
                    <br /><br />
                    You’ll probably find me: 🎹 playing piano • 🖌️ painting landscapes • 📚 lost in a sci-fi or history book.
                  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
