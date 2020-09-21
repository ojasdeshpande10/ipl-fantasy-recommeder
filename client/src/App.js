import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './components/players/players'
import Picks from './components/players/picks'
import Ticks from './components/players1/ticks'
class App extends Component {
  render(){
  return (
    <div>
    <div class="split left">
    <div class="centered">
      
      <h2> Team1 </h2>
      <p><Picks />
          
      </p>
    </div>
  </div>
  
  <div class="split right">
    <div class="centered">
     
      <h2> Team2 </h2>
      <p><Ticks /></p>
    </div>
  </div>
  </div>
  );
  }
}

export default App;
