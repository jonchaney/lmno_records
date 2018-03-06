import React, { Component } from 'react';

class Equipment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
        <p>Tascam 38 Tape Machine</p>
        <p>Soundcraft Series 200B Mixer</p>
        <p>Tascam DA 3000 for analog to digital mastering</p>
        <p>Sennheiser MD421 Microphones</p>
    </div>
    );
  }
}

export default Equipment;