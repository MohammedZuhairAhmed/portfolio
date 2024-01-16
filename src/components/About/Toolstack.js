import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack({tool}) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tool.map((icon) =>(
        <Col key={icon.url} xs={4} md={2} className="tech-icons">
          <img src={icon.url} />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
