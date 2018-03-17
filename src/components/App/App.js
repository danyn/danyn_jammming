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
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);

    };//constructor
  // functions that manage state of othe UI
  updatePlaylistName(name){
    console.log('app.js:updatePlayListName:')
    console.log(name);
    this.setState({playlistName:name})
  }//updatePlaylistName

  addTrack(trackObjSelected){

      if(this.state.playlistTracks.every( track => track.id !== trackObjSelected.id)){
        let addTrack = [trackObjSelected];
        let newState = addTrack.concat(this.state.playlistTracks);
        
        this.setState({
          playlistTracks:newState
        });

    }//if track.id not playlist
  }// addTrack()

  removeTrack(trackObjSelected){
    let newState = this.state.playlistTracks.filter(
                   trackObj => trackObj.id !== trackObjSelected.id);

      this.setState({
        playlistTracks:newState
      });

  }//removeTrack()


  render() {
    // debug
      console.log('app.js:render:')
      console.log(this.state);

    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist
               playlistName={this.state.playlistName}
               playlistTracks={this.state.playlistTracks}
               onRemove={this.removeTrack}
               onNameChange={this.updatePlaylistName}
             />
          </div>
        </div>{/* div.App */}
      </div>
    );// return
  }// render
}// App

export default App;
