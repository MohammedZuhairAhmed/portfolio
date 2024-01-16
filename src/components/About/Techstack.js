import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack({icons}) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((icon) =>(
        <Col key={icon.url} xs={4} md={2} className="tech-icons">
          <img src={icon.url} />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
