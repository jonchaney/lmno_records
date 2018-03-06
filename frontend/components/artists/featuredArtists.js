import React, { Component } from 'react';
import Band from '../presentationals/bandShow.js';
import ReactHowler from 'react-howler'
import Icon from '../presentationals/icon.js'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/fontawesome-pro-solid'
class FeaturedArtists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        songUrl: null,
        playing: false
    }
  }

  componentDidMount() {
      window.scrollTo(0, 0);
      this.props.fetchArtists();
  }

  renderIcon(song) {
    if (song === this.state.songUrl) {
        return <FontAwesomeIcon icon={faPause}/>;
    } else {
        return <FontAwesomeIcon icon={faPlay}/>;
    }
  }

  playTrack(song) {
      if (this.state.songUrl === song) {
        this.setState({songUrl: null, playing: false})
      } else {
        this.setState({songUrl: song, playing: true})
      }
  }
  

  artists() {
      if (this.props.artists[0]) {
        let bands = this.props.artists.map((artist, idx) => {
        return ( <article key={idx}>
                    <Band   artist={artist.name} 
                            title={artist.songTitle}  
                            img={artist.imageURL}
                            location={artist.location}
                            songUrl={artist.songURL}
                            icon={this.renderIcon(artist.songURL)}
                            play={(song) => this.playTrack(song)}
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
                src={this.state.songUrl}
                playing={this.state.playing}
                html5={true}/>
        );
    } else {
        return null;
    }
  }

  render() {
    return (
      <div className="bands">
        {this.howler()}
        {this.artists()}
      </div>
    );
  }
}

export default FeaturedArtists;