import React from 'react';
import PostCardFull from './../../components/PostCardFull/PostCardFull';
import CategoryWidget from './../../components/CategoryWidget/CategoryWidget';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from '../../components/BackToTop/BackToTop';
import './PostPage.css';
import OtherWidgets from '../../components/OtherWidgets/OtherWidgets';
import MakeComment from '../../components/MakeComment/MakeComment';

//fake data placeholders 

const fakeData = [
  {
    date: 'October 10, 1992',
    time: '10:30pm',
    username: 'shannisnax',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium aperiam ut! Voluptate et accusantium natus a omnis at odio fuga perferendis nulla similique recusandae dolor dolore placeat aspernatur nostrum, quisquam molestiae repellat, nemo laboriosam. Reprehenderit debitis hic dolorum, possimus veniam eligendi, optio saepe reiciendis sed exercitationem inventore voluptas quas sequi ipsa dolor excepturi est aliquam odio ex enim repudiandae eius quos? Iste nemo cum harum vitae aspernatur perferendis maiores minus esse quidem, recusandae saepe repellat. Molestiae quos doloribus ad natus nemo expedita quidem necessitatibus aperiam sed reprehenderit laboriosam odit rem iure eveniet commodi dolores tempore, distinctio odio corporis minus eligendi nostrum corrupti! Non nulla placeat dicta cumque ea velit sed? Reiciendis quidem corrupti, ratione sed aspernatur inventore deserunt voluptates dolore nulla ea quo tempora amet modi possimus ipsa nemo blanditiis omnis? Ipsum dolores autem dolore aperiam voluptate nesciunt eveniet, earum commodi rem quasi. Distinctio, maiores dolore sit quo cum quos ex nobis repellendus ea laboriosam necessitatibus atque libero eaque voluptatibus vitae cupiditate officiis assumenda expedita deleniti saepe doloremque quaerat asperiores incidunt. Saepe, et quaerat. Ea cupiditate vel quisquam fuga repellendus accusamus. Voluptatibus iste similique adipisci sint aperiam illo quam ratione voluptas sapiente perspiciatis, cum nesciunt, quia facilis quidem aut.",
    title: 'OMG Skin Care',
    id: 1
  }
]

const PostPage = () => {
  return (
    <Container fluid className="forum-container">
      <Row>

        {/* left side widgets */}
        <Col xs={2}>
          <Row>
            <Col xs={12}>
              <CategoryWidget />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <OtherWidgets />
            </Col>
          </Row>
        </Col>

        {/* truncated posts */}
        <Col xs={8}>
            {fakeData.map(({ title, body, username, date, time, id}) => (
            <Row>
            <Col xs={12}>
              <PostCardFull 
                id={id}
                title={title} 
                date={date} 
                time={time} 
                username={username} 
                body={body} 
             />
            </Col>
            </Row>
          ))}

            <Row>
             <Col xs={12}>
              <MakeComment />
             </Col>
            </Row>
        </Col>

        {/* right side widgets */}
        <Col xs={2}>
          <Row>
            <Col xs={12}>
              <OtherWidgets />
            </Col>
          </Row>
        </Col>

      </Row>

    <BackToTop />
  
  </Container>
)};

export default PostPage;
