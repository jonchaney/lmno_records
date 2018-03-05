import React, { Component } from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="nav-bar">
        <li>about</li>
        <li>equipment</li>
        <li>contact</li>
      </ul>
    );
  }
}

export default NavBar;