import React, { Component } from 'react';

class Bands extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.img} />
        <div className="band-info">
            <section>{this.props.title}</section>
            <section>{`Artist: ${this.props.artist}`}</section>
            <section>{this.props.location}</section>
        </div>
      </div>
    );
  }
}

export default Bands;