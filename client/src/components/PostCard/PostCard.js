import React from 'react';
import Card from 'react-bootstrap/Card';

const PostCard = () => {
    return (
        <Card className="p-0 my-2">
        <Card.Body>
            <Card.Title>Post Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Meta Data</Card.Subtitle>
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
