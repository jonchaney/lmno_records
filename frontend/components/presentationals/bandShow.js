import React, { Component } from 'react';

class BandShow extends React.Component {
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
            {this.props.icon}
        </div>
      </div>
    );
  }
}

export default BandShow;