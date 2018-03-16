import React from 'react';
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList';

export class Playlist extends React.Component{

  render(){
    // debug
    // console.log("Playlist.js: ");
    // console.log(this.props);
    // console.log(this.props.playlistTracks);

    return(
      <div className="Playlist">
        <input defaultValue={'New PLaylist'}/>
        <TrackList tracks={this.props.playlistTracks} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}
