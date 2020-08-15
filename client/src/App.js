import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

function App() {
  return (
    <div className="app">
      <Navbar/>
    </div>
  )
}

export default App;
