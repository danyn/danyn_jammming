import React from 'react';
import './TrackList.css';
import {Track} from '../Track/Track';

export class TrackList extends React.Component{

  render(){
    // debug code
        // console.log('TrackList.js: ');
        // console.log(this.props.tracks[0]);
        // console.log(this.props.tracks.map(track => track.name));
    return (
      <div className="TrackList">
        {/* debug code */}
        {/* <span onClick={this.props.onAdd}>onAdd()</span> */}

        {this.props.tracks.map(trackObj => <Track key={trackObj.id} track={trackObj} onAdd={this.props.onAdd}/>)}

      </div>
    );// return
  }// render
}// TrackList
