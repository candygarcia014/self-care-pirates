import React from 'react'
import '../images/AvatarExample.jpg';
import '../ProfileCard/ProfileCard.css'


const AvatarImage = require('../images/AvatarExample.jpg')


function Avatar() {
    return (
        <>
            <div className="AvatarImage">
                <img
                src={AvatarImage.default}
                className="card-img-top"
                alt=""
                />
            </div>
        </>
    )
}

export default Avatar
