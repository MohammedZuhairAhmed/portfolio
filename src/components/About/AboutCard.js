import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard({data}) {
  const hobbies = data.hobby;
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div dangerouslySetInnerHTML={{__html: data.rte}}/>
          <ul>
            {hobbies.map((hobby) => (
              <li key={hobby} className="about-activity">
                <ImPointRight /> {hobby}
              </li>
            ))}
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
