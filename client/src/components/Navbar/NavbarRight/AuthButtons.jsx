// main libraries
import React from 'react';

const AuthButtons = (props) => {
  return (
    <>
      <span style={{ color: 'white' }} onClick={() => props.setSignupModal(true)}>
        Signup
      </span>
      <span style={{ color: 'white' }} onClick={() => props.setLoginModal(true)}>
        Login
      </span>
    </>
  );
};

export default AuthButtons;
