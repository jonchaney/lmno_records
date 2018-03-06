import React, { Component } from 'react';
import BandShow from '../presentationals/bandShow.js';
import ReactHowler from 'react-howler'
import Icon from '../presentationals/icon.js'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/fontawesome-pro-solid'
class FeaturedArtists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentSongTitle: "",
        songUrl: null,
        playing: false
    }
  }

  componentDidMount() {
      window.scrollTo(0, 0);
      this.props.fetchArtists();
  }

  renderIcon(title) {
    if (title === this.state.currentSongTitle) {
        return <FontAwesomeIcon icon={faPause}/>;
    } else {
        return <FontAwesomeIcon icon={faPlay}/>;
    }
  }
  

  renderBands() {
      let icon;
      if (this.props.artists[0]) {
          let bands = this.props.artists.map((artist, idx) => {
            icon = this.renderIcon(artist.songTitle);
        return ( <article key={idx}>
                    <BandShow   artist={artist.name} 
                                title={artist.songTitle}  
                                img={artist.imageURL}
                                location={artist.location}
                                songUrl={artist.songURL}
                                icon={icon}
                                />
                </article>
          )});
      return bands;
    }
  }

  howler() {
    if(this.state.playing) {
        return ( 
            <ReactHowler
                src={this.state.songURL}
                playing={this.state.playing}/>
        );
    } else {
        return null;
    }
  }

  render() {
    return (
      <div className="bands">
        {this.howler()}
        {this.renderBands()}
      </div>
    );
  }
}

export default FeaturedArtists;