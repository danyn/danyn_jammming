import React, { Component } from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import {TrackData, PlaylistData}    from '../utils/Spotify';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        searchResults:TrackData(),
        playlistTracks:PlaylistData(),
        playlistName:'Danyn\'s Favorites'
      }//state

      // event bindings
      this.addTrack = this.addTrack.bind(this);

    };//constructor

    addTrack(track){
      // debug code
      // console.log(track);
      // track.target.innerHTML = "I was clicked addTrack()";
      
    }// addTrack()



  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName}  playlistTracks={this.state.playlistTracks} />
          </div>
        </div>{/* div.App */}
      </div>
    );// return
  }// render
}// App

export default App;
