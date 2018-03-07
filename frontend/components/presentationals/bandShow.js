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
            <section>
              <p>{this.props.title}</p>
              <p>{`Artist: ${this.props.artist}`}</p>
              <p>{this.props.location}</p>
            </section>
            <section onClick={() => this.props.play(this.props.songUrl)}>
              {this.props.icon}
            </section>
        </div>
      </div>
    );
  }
}

export default Band;