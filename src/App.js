import React, { Component } from 'react';
import './App.css';
import {SearchBar} from './components/SearchBar/SearchBar';
import {SearchResults} from './components/SearchResults/SearchResults';
import {Playlist} from './components/Playlist/Playlist';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>{/* div.App */}
      </div>
    );// return
  }// render
}// App

export default App;
