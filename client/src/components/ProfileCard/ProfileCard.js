import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/esm/Card';

import '../ProfileCard/ProfileCard.css'
import Avatar from './Avatar';
import PhotoModal from '../PhotoModal/PhotoModal';


function ProfileCard() {
    return (
        <div className="Container">
            {/* User Photo */}
            <Row>
                <Col xs={12}>
                    <Avatar />
                    <PhotoModal />
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

            {/* User Bio*/}
            <Row>
                <Col xs={12}>
                    <div className="Bio">
                    <Card className="BioCard"> 
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Card>
                    </div> 
                </Col>
            </Row>
            


        </div>
    )
}

export default ProfileCard
