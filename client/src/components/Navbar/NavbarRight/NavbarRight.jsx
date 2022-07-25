// main libraries
import React from 'react';

// component
import ToolButtons from './ToolButtons';
import AuthButtons from './AuthButtons';

const NavbarRight = (props) => {
  switch (props.auth) {
    case 'auth':
      return <AuthButtons />;
    case null:
      return <ToolButtons />;
    default:
      return <ToolButtons />;
  }
};

export default NavbarRight;
