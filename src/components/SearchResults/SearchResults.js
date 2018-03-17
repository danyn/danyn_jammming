import React from 'react';
import './SearchResults.css';
import {TrackList} from '../TrackList/TrackList';


export class SearchResults extends React.Component{

  render(){
    // debug code
        // console.log(this.props);
        // console.log(this.props.searchResults.map(track => track.name));
        // console.log(this.props.searchResults[0]);
        // console.log(this.props.searchResults);
    return(
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} caller="SearchResults" />
      </div>
    );
  }
}
