import React, { Component } from 'react';
import AudioPlayer from '../presentationals/audioPlayer.js';

class FeaturedArtists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      window.scrollTo(0, 0);
      this.props.fetchArtists();
  }
  

  renderBands() {
      if (this.props.artists[0]) {
      let bands = this.props.artists.map((artist, idx) => (
        <article key={idx}>
            <AudioPlayer artist={artist.name} 
                        title={artist.songTitle}  
                        img={artist.imageURL}
                        location={artist.location}
                        />
        </article>
      ));
      return bands;
    }
  }

  render() {
    return (
      <div className="bands">
        {this.renderBands()}
      </div>
    );
  }
}

export default FeaturedArtists;