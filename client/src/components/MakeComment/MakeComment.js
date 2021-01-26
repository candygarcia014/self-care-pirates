import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import './MakeComment.css';


const MakeComment = () => {
    // first create states to contain input values;
    // 


    return (
    <Card className="p-0 my-2">
        <Card.Body>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">           
                    <Form.Control as="textarea" rows={3} placeholder="Write a Comment!"/>
                </Form.Group>               
                <Row>           
                    <Col xs={6}>
                        <Form.Group>
                            <Form.File   
                            id="exampleFormControlFile1"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Button 
                            variant="primary" 
                            type="submit"
                            className="post-button"
                            >
                            Comment
                        </Button>
                    </Col>
                </Row>        
            </Form>       
        </Card.Body>
    </Card>
)};

export default MakeComment;