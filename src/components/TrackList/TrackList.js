import React from 'react';
import './TrackList.css';
import {Track} from '../Track/Track';

export class TrackList extends React.Component{

  render(){
    // debug code
        console.log('TrackList.js: ');
        // console.log(this.props.tracks[0]);
        // console.log(this.props.tracks.map(track => track.name));
    return (
      <div className="TrackList">

        {this.props.tracks.map(trackObj => <Track key={trackObj.id} track={trackObj} />)}

      </div>
    );// return
  }// render
}// TrackList
