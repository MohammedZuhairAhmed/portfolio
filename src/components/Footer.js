import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer({content}) {
const contact = content.media;

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{content.design_tag}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{content.copyright}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {contact.map((obj) => (
              <li key={obj._metadata.uid} className="social-icons">
                <a
                  href={obj.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-social-icons"
                >
                  <img src={obj.icon.url} />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
