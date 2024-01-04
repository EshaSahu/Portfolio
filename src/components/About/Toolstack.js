import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman
} from "react-icons/si";
import { DiIllustrator } from "react-icons/di";
import { FaFigma } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiIllustrator />
      </Col>
    </Row>
  );
}

export default Toolstack;
