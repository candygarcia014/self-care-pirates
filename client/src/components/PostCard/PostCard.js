import React from 'react';
import './PostCard.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';



const PostCard = (props) => {
    const truncatedPost = props.body?.substring(0, 200) + "...";
    return (
        <Card className="p-0 my-2">
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle 
                className="mb-2 text-muted meta-data-date-time meta-data">
                {props.date} | {props.time} 
                <span className="meta-data-username">{props.username}</span>
            </Card.Subtitle>
            <Card.Text>
                {truncatedPost}
            </Card.Text>
            <ButtonGroup className="comment-share-button">
            <Button as="input" type="button" value="Comment" data-id={props.id}/>{' '}
            <Button as="input" type="submit" value="Share" />{' '}
            </ButtonGroup>           
        </Card.Body>
        </Card>
    )};

export default PostCard;
