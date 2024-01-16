import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home3({contact}) {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                  Feel free to <span className="purple">connect </span>with me
                </p>
                <ul className="home-about-social-links">
                    {contact.map((obj) => (
                        <li key={obj._metadata.uid} className="social-icons">
                            <a
                                href={obj.link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                            <img src={obj.icon.url} />
                            </a>
                        </li>
                    ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    }
    export default Home3;