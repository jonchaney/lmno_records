import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to="/" ><h1>LMNO recordings</h1></Link>
    );
  }
}

export default Header;