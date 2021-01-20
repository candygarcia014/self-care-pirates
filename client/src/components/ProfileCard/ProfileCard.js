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

            {/* Username */}
            <Row>
                <Col xs={12}>
                    <div className="Username">
                        USERNAME
                    </div> 
                </Col>
            </Row>


        </div>
    )
}

export default ProfileCard
