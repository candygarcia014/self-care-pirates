import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import '../images/AvatarExample.jpg';
import '../ProfileCard/ProfileCard.css'

const Avatar = require('../images/AvatarExample.jpg')

function ProfileCard() {
    return (
        <div className="Container">
            {/* User Photo */}
            <Row>
                <Col xs={12}>
                    <div className="avatar">
                        <img
                        src={Avatar.default}
                        className="card-img-top"
                        alt=""
                        />
                  </div>
                </Col>
            </Row>

            {/* Username */}
            <Row>
                <Col xs={12}>
                Username
                </Col>
            </Row>


        </div>
    )
}

export default ProfileCard
