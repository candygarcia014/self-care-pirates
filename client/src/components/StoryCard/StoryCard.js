import React from 'react';
import Card from 'react-bootstrap/Card';
import './StoryCard.css'

const StoryCard = () => {
    return (
  
  <Card className="story-card p-3 my-0">
  <Card.Body>
    <Card.Text style={{marginTop: "2rem"}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

    )};

export default StoryCard;
