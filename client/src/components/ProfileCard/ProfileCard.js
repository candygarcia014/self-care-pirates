import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/esm/Card';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Button from 'react-bootstrap/esm/Button';
import FormControl from 'react-bootstrap/esm/FormControl';
import Api from "../../utils/Api";
import decode from 'jwt-decode';
import '../ProfileCard/ProfileCard.css'
import Avatar from './Avatar';
import PhotoModal from '../PhotoModal/PhotoModal';




function ProfileCard() {
    
    const[userInfo, setUserInfo]=useState();
    const[userBio, setUserBio]=useState();
    // const username = JSON.parse(localStorage.getItem("username")).username;
    useEffect(() => {
        getUser();
    }, [userInfo]);



    // Update Bio
    function UpdateBio() {
        const userId = decode(localStorage.getItem("token"));
        Api.bio(data, userId.id).then(() => console.log("fettuchini chicken alfredo"))
        // (x => this.setState({ ...this.state, show: false}))
        .catch((err) => console.log(err))
    
    }

    const getUser = async () => {
        const { id } = decode(localStorage.getItem("token"));
        const { data } = await Api.name(id);
        setUserInfo(data);
    };
    if(!userInfo) return <h1>Loading...</h1>
    const { firstName, lastName, username, image } = userInfo;
    const fullName = (user) => {
        return `${user.firstName} ${user.lastName}`
    }
    return (
        <div className="Container">
            {/* User Photo */}
            <Row>
                <Col xs={12}>
                    <Avatar image={image} style={{"max-height":"250px", "max-width": "250px", "height":"100%", }}/>
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
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="blah blah blah update your bio here!"
                            aria-label="User Bio"
                            onChange={this.onChangeHandler}

                            />
                            <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={Api.bio}>Edit Bio</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Card>
                    </div> 
                </Col>
            </Row>
        </div>
    )
}
export default ProfileCard