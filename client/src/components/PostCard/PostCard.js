import React from 'react';
import Card from 'react-bootstrap/Card';
import '../PostCard/PostCard.css';


const PostCard = () => {
    return (
        <Card className="p-0 my-2">
        <Card.Body>
            <Card.Title>POST TITLE</Card.Title>
            <Card.Subtitle className="mb-2 text-muted meta-data">January, 13th 2021 | 10:13pm </Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Comment</Card.Link>
            <Card.Link href="#">Share</Card.Link>
        </Card.Body>
        </Card>
    )};

export default PostCard;
