import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="nav-bar">
        <Link to="/about"><li>about</li></Link>
        <Link to="/equipment"><li>equipment</li></Link>
        <Link to="/contact"><li>contact</li></Link>
      </ul>
    );
  }
}

export default NavBar;