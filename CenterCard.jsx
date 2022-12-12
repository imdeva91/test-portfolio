import React from "react";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./centerCard.css";

function CenterCard() {
  return (
    <div className="centerCard">
      <div className="centerCardLeft">
        <img alt="" src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-01.jpg"/>
      </div>
      <div className="centerCardRight">
        
        <Row xs={1} md={2} className="g-2">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img className="centerCardRightImg"
                  variant="top"
                  src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-01.jpg"
                />
                {/* <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body> */}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default CenterCard;
