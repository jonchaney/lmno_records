import React, { Component } from 'react';


class Band extends React.Component {
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
            <section onClick={() => this.props.play(this.props.songUrl)}>{this.props.icon}</section>
        </div>
      </div>
    );
  }
}

export default Band;