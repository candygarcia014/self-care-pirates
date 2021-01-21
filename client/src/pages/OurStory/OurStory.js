import React from 'react';
import StoryCard from './../../components/StoryCard/StoryCard';
import DevCard from './../../components/DevCard/DevCard';
import { Container, Row, Col } from 'react-bootstrap';
import DevImage from './../../components/DevImage/DevImage'


const OurStory = () => {
  return (
  <Container>
    <Row>
      <Col xs={8}>
      {/* Card for Our Story */}
        <StoryCard />
      </Col>
    </Row>

    <Row>
      <Col xs={8}>
        {/* Candy's Card */}
       <DevImage source="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
        <DevCard 
        name="Candy"
        github="candy's github" 
        />
      </Col>

      <Col xs={8}>
       <div className="image">
          {/* Lawrence's Card */}
        <DevCard 
        name="Lawny dawg"
        github="real G github"
          />
          
        <DevImage source="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/></div>
      </Col>

      <Col xs={8}>
        {/* Shanni's Card */}
        <DevCard />
      </Col>

      <Col xs={8}>
        {/* Cathlene's Card */}
        <DevCard />
      </Col>
    </Row>
  </Container>
  );
};

export default OurStory;


