import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Esha Sahu </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            A fourth-year B.Tech student in Computer Science and Engineering at Ajay Kumar Garg
            Engineering College, actively seeking internship and job opportunities.
            <br />
            
            <br />
            <br />
            Apart from development and coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphic Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for impactful creations!"{" "}
          </p>
          <footer className="blockquote-footer">Esha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
