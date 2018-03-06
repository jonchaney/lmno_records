import React from 'react';
import { Link } from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome'
import faPlay from '@fortawesome/fontawesome-pro-light/faPlay'
import faPause from '@fortawesome/fontawesome-pro-light/faPause'


fontawesome.library.add(faPause)

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.class}>
        <i className={this.props.type} ></i>
      </div>
    );
  }
}

export default Icon;
