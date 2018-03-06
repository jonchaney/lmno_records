import React, { Component } from 'react';
import AudioPlayer from './audioPlayer.js';

class Bands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        songFile: ["desoulations.mp3", "harvestmoon.mp3",
                "heygene.mp3", "pumpkin.mp3", "slowcrawl.mp3"],
        bands: ["Desoulations", "Hazel's Wart", "Kiss Cam", "Pumpkin", "Slow Crawl"],
        tracks: ["Untitled", "Harvest Moon", "Hey Gene", "Marble Eyes", "Seemingly Never"],
        location: ["Campbell", "SF", "SF", "SF", "SF"],
        image: ["http://res.cloudinary.com/tonedream/image/upload/v1520291954/lmno_records/Screen_Shot_2018-02-24_at_7.45.08_PM.png",
                "http://res.cloudinary.com/tonedream/image/upload/v1520275990/lmno_records/hazelswart_pxdwv5.png",
                "http://res.cloudinary.com/tonedream/image/upload/v1520275986/lmno_records/kisscam_lii5me.png",
                "http://res.cloudinary.com/tonedream/image/upload/v1520275987/lmno_records/pumpkin_fltkqy.jpg",
                "http://res.cloudinary.com/tonedream/image/upload/v1520291859/lmno_records/Screen_Shot_2018-02-25_at_10.50.16_PM.png"]
    };
  }

  renderBands() {
      let bands = this.state.bands.map((band, idx) => (
          <article key={idx}>
        <AudioPlayer artist={band} 
                     title={this.state.tracks[idx]}  
                     img={this.state.image[idx]}
                     location={this.state.location[idx]}
                     />
                     </article>
      ));
      return bands;
  }

  render() {
    return (
      <div className="bands">
        {this.renderBands()}
      </div>
    );
  }
}

export default Bands;