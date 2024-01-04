import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              Specializing as a MERN stack developer, I possess a strong command of <b className="purple">React.js</b> for frontend, <b className="purple">Node.js</b> with the <b className="purple">Express.js</b> framework for the backend, and <b className="purple">MongoDB</b> as a preferred NoSQL database.
<br />
<br />
Languages I work on <b className="purple">C++</b>, <b className="purple">HTML</b>, <b className="purple">CSS</b>, and <b className="purple">JavaScript</b>.
<br />
<br />
My commitment to continuous improvement is evident in regular coding practice on platforms like <b className="purple">GFG</b>.
<br />
<br />

Explored the creative realm as a graphic designer  enriching my understanding of design principles and the significance of user experience in the digital world.
<br />
<br />
As I continue my journey as a <b className="purple">developer</b> and a <b className="purple">learner</b>, I am seeking opportunities to collaborate, contribute, and grow within the tech industry.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: '30px' }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
      
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/EshaSahu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/esha-sahu-ab1296230/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="sahuesha78@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <CgMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
