import React from 'react';
import UserCards from '../components/userCard/UserCards'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProfileCard from '../components/ProfileCard/ProfileCard';



const User = () => {
  return (
    <div className="Container">
      <ProfileCard></ProfileCard>

      
      {/* Row for profile picture */}
      <Row>
        <Col xs={12}>
          Hello
        </Col>
      </Row>

      {/* Row for username */}
      <Row>
        <Col xs={12}>
          Hello
        </Col>
      </Row>

      {/* Row for first/last name*/}
      <Row>
        <Col xs={12}>
          Hello
        </Col>
      </Row>

      {/* Row for bio */}
      <Row>
        <Col xs={12}>
          Hello
        </Col>
      </Row>

      
    </div>
  );
};

export default User;
