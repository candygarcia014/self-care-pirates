import React from 'react';
import StoryCard from './../../components/StoryCard/StoryCard';
import { Container, Row, Col } from 'react-bootstrap';

const OurStory = () => {
  return (
  <Container>
    <Row>
      <Col xs={8}>
        <StoryCard />
      </Col>
    </Row>

    <Row>
      <Col xs={6}>
        <StoryCard />
      </Col>

      <Col xs={8}>
        <StoryCard />
      </Col>
    </Row>
  </Container>
  );
};

export default OurStory;


