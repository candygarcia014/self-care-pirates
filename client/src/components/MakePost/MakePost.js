import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import './MakePost.css';


const MakePost = () => {
    return (
    <Card className="p-0 my-2">
    <Card.Body>

    <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Create a Post!</Form.Label>
                <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Text"/>
            </Form.Group>
        
        
        <Row>
            <Col xs={4}>
                <DropdownMultiselect
                    options={["Skin", "Hair", "Body", "Mind", "Style", "Nails"]}
                    name="tags"
                    placeholder="Tags (select up to 3)"
                />
            </Col>
            <Col xs={4}>
                <Form.Group>
                    <Form.File   
                    id="exampleFormControlFile1"
                    />
                </Form.Group>
            </Col>

            <Col xs={4}>
                <Button 
                    variant="primary" 
                    type="submit"
                    className="post-button"
                    >
                    Post
                </Button>
            </Col>
        </Row>
        
        </Form>
       

    </Card.Body>
    </Card>
)};

export default MakePost;
