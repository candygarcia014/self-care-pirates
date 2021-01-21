import React from 'react';
<<<<<<< HEAD
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
=======
import StoryCard from './../../components/StoryCard/StoryCard';
import DevCard from './../../components/DevCard/DevCard';
import { Container, Row, Col } from 'react-bootstrap';
import DevImage from './../../components/DevImage/DevImage'

>>>>>>> 98fa09311b01ca823b0dd9957bb5636791b4817b


const OurStory = (props) => {
  return (
<<<<<<< HEAD
    <div>
      <Card>
        <CardImg src="https://raw.githubusercontent.com/ShanniSnax/self-care-pirates/main/client/src/components/images/AvatarExample.jpgZ" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
=======
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
       <DevImage source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QyQeJ7Wkfu604EQZAbR5RcC-vFl6UDV1Q&usqp=CAU"/>
        <DevCard 
        name="Candy"
        github="candy's github" 
        />
      </Col>

      <Col xs={8}>
       <div className="image">
          {/* Lawrence's Card */}
        <DevCard 
        name="Lawrence"
        github="lawrence's github"
          />
          
        <DevImage source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QyQeJ7Wkfu604EQZAbR5RcC-vFl6UDV1Q&usqp=CAU"/></div>
      </Col>

      <Col xs={8}>
          {/* Tammy's Card */}
          <DevImage source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QyQeJ7Wkfu604EQZAbR5RcC-vFl6UDV1Q&usqp=CAU"/>
        <DevCard 
        name="Tammy"
        github="tammy's github"
          />
      </Col>

      <Col xs={8}>
        {/* Shanni's Card */}
        <DevCard 
        name="Shanni"
        github="shanni's github"/>
        <DevImage source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QyQeJ7Wkfu604EQZAbR5RcC-vFl6UDV1Q&usqp=CAU"/>
      </Col>

      <Col xs={8}>
        {/* Cathlene's Card */}
        <DevImage source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QyQeJ7Wkfu604EQZAbR5RcC-vFl6UDV1Q&usqp=CAU"/>
        <DevCard 
        name="Cathlene"
        github="cathlene's github"/>
      </Col>
    </Row>
  </Container>
>>>>>>> 98fa09311b01ca823b0dd9957bb5636791b4817b
  );
};

export default OurStory;


