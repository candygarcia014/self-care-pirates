import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import '../ProfileCard/ProfileCard.css'
import Avatar from './Avatar';


function ProfileCard() {
    return (
        <div className="Container">
            {/* User Photo */}
            <Row>
                <Col xs={12}>
                    <Avatar />
                </Col>
            </Row>

            {/* Username, this.uppercase(data.name.username)*/}
            <Row>
                <Col xs={12}>
                    <div className="Username">
                        USERNAME
                    </div> 
                </Col>
            </Row>

            {/* First/Last Name, this.uppercase(data.name.username)*/}
            <Row>
                <Col xs={12}>
                    <div className="FullName">
                        {/* {this.uppercase(data.name.first) + " " + this.uppercase(data.name.last)} */}
                        {/* Placeholder: */}
                        Jean-Luc Pikachu
                    </div> 
                </Col>
            </Row>
            


        </div>
    )
}

export default ProfileCard
