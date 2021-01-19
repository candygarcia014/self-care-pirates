import React from 'react';
import '../components/images/SCP.gif'

const logo = require('../components/images/SCP.gif')


const LandingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <div className="Container">
        <img src={logo.default} alt="logo"/>
      </div>

    </div>
  );
};

export default LandingPage;
