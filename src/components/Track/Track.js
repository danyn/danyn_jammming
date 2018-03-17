import React from 'react';
import './Track.css';

export class Track extends React.Component{


  constructor(props){
    super(props);
// event handlers
    this.addTrack = this.addTrack.bind(this);
  }//constructor

  addTrack(){
    // debug
    // console.log('track.js: addTrack(){..');
    // console.log(this.props.track);
    this.props.onAdd(this.props.track);
  }// addTrack()


  render(){
    console.log('Track.js:')
    console.log("this.props.caller === 'SearchResults'")
    console.log(this.props.caller);
    console.log(this.props.caller === 'SearchResults')
    return(
      <div className="Track">
        <div className="Track-information">
          <h3> {this.props.track.name} </h3>
          <p> {this.props.track.artist} | {this.props.track.album} </p>
        </div>
        {/* track action */}
        {this.props.caller === 'SearchResults' &&
          <a className="Track-action" onClick={this.addTrack}> + </a>
        }
        {this.props.caller === 'Playlist' &&
          <a className="Track-action"> - </a>
        }

      </div>
    );// return
  }// render
}// Track
