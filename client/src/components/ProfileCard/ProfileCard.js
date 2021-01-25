import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/esm/Card';
import Api from "../../utils/Api";
import decode from 'jwt-decode';
import '../ProfileCard/ProfileCard.css'
import Avatar from './Avatar';
import PhotoModal from '../PhotoModal/PhotoModal';


function ProfileCard() {
    const[userInfo, setUserInfo]=useState();

    // const username = JSON.parse(localStorage.getItem("username")).username;
    
    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const { id } = decode(localStorage.getItem("token"));
        const { data } = await Api.name(id);
        setUserInfo(data);
    };

    if(!userInfo) return <h1>Loading...</h1>
    const { firstName, lastName, username } = userInfo;

    const fullName = (user) => {
        return `${user.firstName} ${user.lastName}`
    }

    return (
        <div className="Container">
            {/* User Photo */}
            <Row>
                <Col xs={12}>
                    <Avatar />
                    <PhotoModal />
                </Col>
            </Row>

            {/* Username*/}
            <Row>
                <Col xs={12}>
                    <div className="Username">
                        {username.toUpperCase()}
                    </div> 
                </Col>
            </Row>

            {/* Full Name*/}
            <Row>
                <Col xs={12}>
                    <div className="FullName">
                        {fullName(userInfo)}
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
