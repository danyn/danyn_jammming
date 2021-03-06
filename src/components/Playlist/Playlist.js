import React from 'react';
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList';

export class Playlist extends React.Component{
  constructor(props){
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);

  }//constructor

  handleNameChange(e){
    this.props.onNameChange(e.target.value);
  }

  render(){
    // debug
    // console.log("Playlist.js: ");
    // console.log(this.props);
    // console.log(this.props.playlistTracks);

    return(
      <div className="Playlist">
        <input defaultValue={'New PLaylist'} onChange={this.handleNameChange} />
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} caller="Playlist"/>
        <a className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</a>
      </div>
    );
  }
}
