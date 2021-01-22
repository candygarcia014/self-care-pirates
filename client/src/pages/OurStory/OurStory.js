import React from 'react';
import StoryCard from './../../components/StoryCard/StoryCard';
import DevCard from './../../components/DevCard/DevCard';
import { Container, Row, Col } from 'react-bootstrap';
import DevImage from './../../components/DevImage/DevImage';

const OurStory = (props) => {
  return (
  <Container>
    
    <div>
      <h1>Our Story</h1>
    </div>

    {/* Card for Our Story */}
    <Row>
      <Col xs={8} md={8}>
        <StoryCard />
      </Col>
    </Row>

    <div>
      <h1>Meet the Developers!</h1>
    </div>

    {/* Candy's Info */}
    <Row>
      <Col xs={6}>
        <DevImage source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QyQeJ7Wkfu604EQZAbR5RcC-vFl6UDV1Q&usqp=CAU"/>
      </Col>
      
      <Col xs={8}>
        <DevCard 
          name="Candy Garcia"
          // <a href={url}>LinkedIn handle</a>
          github= "https://github.com/candygarcia014" />
      </Col>
    </Row>
    
    {/* Laurynas's Info */}
    <Row>
      <Col xs={6}>
        <DevCard 
          name="Laurynas Juzva"
          github="https://github.com/Juzva8" />
      </Col>

      <Col>
        <DevImage source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QyQeJ7Wkfu604EQZAbR5RcC-vFl6UDV1Q&usqp=CAU"/>
      </Col>
    </Row>

    {/* Tammy's Info */}
    <Row>
      <Col xs={8}>
        <DevImage source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QyQeJ7Wkfu604EQZAbR5RcC-vFl6UDV1Q&usqp=CAU"/>
      </Col>

      <Col>
        <DevCard 
          name="Tammy Nguyen"
          github="https://github.com/ttngu" />
      </Col>
    </Row>

    {/* Shanni's Info */}
    <Row>
      <Col xs={8}>
        <DevCard 
          name="Shanni Suissa"
          github="https://github.com/ShanniSnax" />
      </Col>

      <Col>
        <DevImage source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QyQeJ7Wkfu604EQZAbR5RcC-vFl6UDV1Q&usqp=CAU"/>
      </Col>
    </Row>

      {/* Cathlene's Info */}
      <Row>
        <Col xs={8}>
          <DevImage source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QyQeJ7Wkfu604EQZAbR5RcC-vFl6UDV1Q&usqp=CAU"/>
        </Col>

        <Col>
          <DevCard 
            name="Cathlene Converse"
            github="https://github.com/cgconverse" />
        </Col>
      </Row>
    
  </Container>

  );
};

export default OurStory;


