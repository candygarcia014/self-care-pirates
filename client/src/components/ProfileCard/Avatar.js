import React from 'react'
import '../images/AvatarExample.jpg';
import '../ProfileCard/ProfileCard.css'


const AvatarImage = require('../images/AvatarExample.jpg')


function Avatar() {
    return (
        <>
            <div className="AvatarImage">
                {/* STOCK IMAGE */}
                {/* <img
                src={AvatarImage.default}
                className="card-img-top"
                alt=""
                /> */}

                {/* IMAGE FROM S3, NEEDS HELP */}
                <img src={'http://scp-ucla-bc2021.s3-us-west-2.amazonaws.com/'+this.image} className="card-img-top"
                alt=""/>
            </div>
        </>
    )
}

export default Avatar
