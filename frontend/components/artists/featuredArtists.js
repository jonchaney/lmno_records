import React, { Component } from 'react';
import BandShow from '../presentationals/bandShow.js';
import ReactHowler from 'react-howler'

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
        return <i className="fas fa-pause"></i>;
    } else {
        return <i className="fas fa-play"></i>;
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

  render() {
    return (
      <div className="bands">
        {/* <ReactHowler
            src={this.state.songURL}
            playing={true}
        /> */}
        {this.renderBands()}
      </div>
    );
  }
}

export default FeaturedArtists;