import React from 'react';
import PostCard from './../../components/PostCard/PostCard';
import { Container, Row, Col } from 'react-bootstrap';

const Forum = () => {
  return (
    <Container>
      <Row>

        {/* left side widgets */}
          <Col xs={2}>
            <Row>
              <Col xs={12}>
              Widgets
              </Col>
            </Row>
          </Col>

          {/* center post truncates */}
          <Col xs={8}>
           
           {/* truncated posts */}
           <Row>
             {/* {arr.map()} */}
             <Col xs={12}>
              <PostCard />
             </Col>
           </Row>

           <Row>
             {/* {arr.map()} */}
             <Col xs={12}>
              <PostCard />
             </Col>
           </Row>
           
           <Row>
             {/* {arr.map()} */}
             <Col xs={12}>
              <PostCard />
             </Col>
           </Row>

           <Row>
             {/* {arr.map()} */}
             <Col xs={12}>
              <PostCard />
             </Col>
           </Row>
           
        </Col>

      {/* right side widgets */}
        <Col xs={2}>
          <Row>
            <Col xs={12}>
            Widgets
            </Col>
          </Row>
        </Col>

      </Row>
</Container>


  )};

export default Forum;
