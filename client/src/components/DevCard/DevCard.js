import React from 'react';
import Card from 'react-bootstrap/Card';
import "./DevCard.css"
import '../../developers.json'



const DevCard = (props) => {
    return (

        <Card className="dev-card" style={{maxHeight: "20rem !important", maxWidth: "50rem" }}>
            {/* <Card.Img style={styles.image} variant="top" src="https://picsum.photos/200" /> */}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <a href={props.github}>
                    <Card.Text>
                        {props.github}
                    </Card.Text>
                </a> */}
                <a href={props.github}>
                    <Card.Text>
                       <a href={props.github}><img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/96/iconmonstr-github-3.png"/></a> 
                    </Card.Text>
                </a>
                <a href={props.linkedin}>
                    <Card.Text>
                       <a href={props.linkedin}><img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"/></a> 
                    </Card.Text>
                </a>
                {/* <a href={props.linkedin}>
                    <Card.Text>
                       <a href={props.linkedin}><img src="https://cdn5.vectorstock.com/i/thumb-large/99/09/linkedin-social-media-icon-design-template-vector-22339909.jpg"/></a> 
                    </Card.Text>
                </a> */}
            </Card.Body>
        </Card>
    )
};

export default DevCard;
