import React from 'react';
import StoryCard from './../../components/StoryCard/StoryCard';
import DevCard from './../../components/DevCard/DevCard';
import { Container, Row, Col } from 'react-bootstrap';
import DevImage from './../../components/DevImage/DevImage';
import developers from '../../developers.json'

// class OurStory extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
//     developers
//   };

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
          name={developers[0].name}
          github={developers[0].github} />
      </Col>
    </Row>
    
    {/* Laurynas's Info */}
    <Row>
      <Col xs={6}>
        <DevCard 
          name={developers[1].name}
          github={developers[1].github}  />
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
          name={developers[2].name}
          github={developers[2].github}  />
      </Col>
    </Row>

    {/* Shanni's Info */}
    <Row>
      <Col xs={8}>
        <DevCard 
          name={developers[3].name}
          github={developers[3].github}  />
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
            name={developers[4].name}
            github={developers[4].github}  />
        </Col>
      </Row>
    
  </Container>

  );
};

export default OurStory;


