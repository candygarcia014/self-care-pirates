import React from 'react';
import PostCard from './../../components/PostCard/PostCard';
import CategoryWidget from './../../components/CategoryWidget/CategoryWidget';
import { Container, Row, Col } from 'react-bootstrap';

const Forum = () => {
  return (
    <Container>
      <Row>

        {/* left side widgets */}
        <Col xs={2}>
          <Row>
            <Col xs={12}>
            <CategoryWidget />
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
              
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
)};

export default Forum;
